'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; 

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayButton({
  plan,
  amount,
  className,
}: {
  plan: string;
  amount: number;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const { order } = await response.json();
      
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Crux AI',
        description: `${plan} Plan Subscription`,
        order_id: order.id,
        image: '/logo.png',
        theme: { color: '#2563eb' },
        handler: (response: any) => {
          router.push(`/payment/success?payment_id=${response.razorpay_payment_id}`);
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      new window.Razorpay(options).open();
    } catch (error) {
      console.error('Payment error:', error);
      router.push('/payment/failure');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={loading || !scriptLoaded}
      className={cn(
        'w-full py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
        className
      )}
    >
      {loading ? 'Processing...' : `Get ${plan} Now`}
    </Button>
  );
}