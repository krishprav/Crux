// app/sign-in/[[...sign-in]]/page.tsx
'use client';

import { 
  SignIn,
  ClerkLoaded,
  ClerkLoading 
} from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-screen px-4">
        <ClerkLoading>
          <div className="flex items-center justify-center h-[400px]">
            <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
          </div>
        </ClerkLoading>
        
        <ClerkLoaded>
          <div className="w-full bg-gray-900/50 backdrop-blur-lg rounded-xl border border-white/10 p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <SignIn 
              path="/sign-in"
              routing="path"
              signUpUrl="/sign-up"
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'bg-transparent shadow-none w-full',
                  headerTitle: 'text-gray-300',
                  headerSubtitle: 'text-gray-400',
                  socialButtons: 'gap-4',
                  socialButtonsBlockButton: 'bg-gray-800 hover:bg-gray-700 border border-white/10',
                  socialButtonsBlockButtonText: 'text-gray-300',
                  dividerLine: 'bg-white/10',
                  dividerText: 'text-gray-400',
                  formFieldLabel: 'text-gray-300',
                  formFieldInput: 'bg-gray-800 border border-white/10 text-gray-300 focus:ring-2 focus:ring-blue-400',
                  formButtonPrimary: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
                  footerActionText: 'text-gray-400',
                  footerActionLink: 'text-blue-400 hover:text-blue-300'
                }
              }}
            />
          </div>
        </ClerkLoaded>
      </div>
    </div>
  );
}