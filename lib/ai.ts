import axios from 'axios';
import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';
import { createHash as cryptoCreateHash } from 'crypto';

// Error mapping for user-friendly messages
const ERROR_MAP = {
  'rate_limit_exceeded': 'API rate limit exceeded - please try again later',
  'document_too_large': 'Document exceeds maximum processing size',
  'invalid_api_key': 'AI service configuration error',
  'empty_document': 'The document contains no text',
  'default': 'AI processing failed - please try again'
};

type SummaryResponse = {
  success: boolean;
  summary?: string;
  error?: string;
  metadata?: {
    model: string;
    processingTime: number;
    tokenCount?: number;
  };
};

type SummaryOptions = {
  temperature?: number;
  maxTokens?: number;
  formatRules?: string[];
  model?: string;
  cacheResults?: boolean;
};

const CONFIG = {
  DEFAULT_MODEL: 'google/gemma-3-4b-it:free',
  DEFAULT_TEMPERATURE: 0.7,
  DEFAULT_MAX_TOKENS: 1500,
  DEFAULT_FORMAT_RULES: [
    'emoji_bullet_points',
    'markdown_formatting',
    'non_technical_language'
  ],
  CACHE_TTL: 24 * 60 * 60 * 1000, // 24 hours
  RETRY_COUNT: 2,
  RETRY_DELAY: 1000, // 1 second
};

class SummaryCache {
  private cache = new Map<string, { timestamp: number; data: SummaryResponse }>();
  private ttl: number;

  constructor(ttlMs = CONFIG.CACHE_TTL) {
    this.ttl = ttlMs;
  }

  get(key: string): SummaryResponse | null {
    const entry = this.cache.get(key);
    if (!entry || Date.now() - entry.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    return entry.data;
  }

  set(key: string, data: SummaryResponse): void {
    this.cache.set(key, { timestamp: Date.now(), data });
  }

  clear(): void {
    this.cache.clear();
  }

  prune(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

const summaryCache = new SummaryCache();

export async function generateSummary(
  pdfText: string,
  options: SummaryOptions = {}
): Promise<SummaryResponse> {
  const startTime = Date.now();

  try {
    // Validate input
    if (!pdfText || pdfText.trim().length === 0) {
      return {
        success: false,
        error: ERROR_MAP['empty_document']
      };
    }

    // Trim long documents
    const maxChars = 25000;
    const trimmedText = pdfText.length > maxChars 
      ? `${pdfText.substring(0, maxChars)}... [Document truncated due to length]` 
      : pdfText;

    // Merge options
    const finalOptions = {
      temperature: options.temperature ?? CONFIG.DEFAULT_TEMPERATURE,
      maxTokens: options.maxTokens ?? CONFIG.DEFAULT_MAX_TOKENS,
      formatRules: options.formatRules ?? CONFIG.DEFAULT_FORMAT_RULES,
      model: options.model ?? CONFIG.DEFAULT_MODEL,
      cacheResults: options.cacheResults ?? true
    };

    // Check cache
    if (finalOptions.cacheResults) {
      const hash = createDocumentHash(trimmedText + JSON.stringify(finalOptions));
      const cachedResult = summaryCache.get(hash);
      if (cachedResult) return cachedResult;
    }

    // Create API payload
    const payload = {
      model: finalOptions.model,
      messages: [
        {
          role: 'system',
          content: `${SUMMARY_SYSTEM_PROMPT}\n\nFORMATTING OPTIONS:\n${finalOptions.formatRules.join('\n')}`
        },
        {
          role: 'user',
          content: `DOCUMENT TEXT:\n${trimmedText}\n\nINSTRUCTIONS:\n1. Analyze and structure according to format\n2. Maintain original meaning\n3. Optimize for social sharing`
        }
      ],
      temperature: finalOptions.temperature,
      max_tokens: finalOptions.maxTokens,
      response_format: { type: 'text' }
    };

    // Make API call
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com',
          'X-Title': 'Crux AI Summarizer'
        }
      }
    );

    // Extract and clean summary
    const rawSummary = response.data.choices[0].message.content;
    const cleanedSummary = cleanSummary(rawSummary);

    const result: SummaryResponse = {
      success: true,
      summary: cleanedSummary,
      metadata: {
        model: response.data.model,
        processingTime: Date.now() - startTime,
        tokenCount: response.data.usage?.total_tokens
      }
    };

    // Cache result
    if (finalOptions.cacheResults) {
      const hash = createDocumentHash(trimmedText + JSON.stringify(finalOptions));
      summaryCache.set(hash, result);
    }

    return result;

  } catch (error: any) {
    console.error('AI Summary Generation Error:', error);
    const errorKey = error.message in ERROR_MAP ? error.message : 'default';
    
    return {
      success: false,
      error: ERROR_MAP[errorKey],
      metadata: {
        processingTime: Date.now() - startTime,
        model: options.model ?? CONFIG.DEFAULT_MODEL
      }
    };
  }
}

function cleanSummary(summary: string): string {
  if (!summary) return '';
  return summary
    .replace(/<!--.*?-->/gs, '') // Remove comments
    .replace(/\n#/g, '\n\n#') // Fix headings
    .replace(/\*\*(.*?)\*\*/g, '**$1**') // Fix bold
    .trim();
}

function createDocumentHash(text: string): string {
  try {
    return cryptoCreateHash('sha256')
      .update(text)
      .digest('hex')
      .substring(0, 16);
  } catch (error) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash.toString(16);
  }
}