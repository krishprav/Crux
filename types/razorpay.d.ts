declare module 'razorpay' {
    interface RazorpayOptions {
      key_id: string;
      key_secret: string;
    }
  
    interface Order {
      amount: number;
      currency: string;
      receipt: string;
      notes?: Record<string, string>;
      payment_capture?: 0 | 1;
    }
  
    interface PaymentResponse {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }
  
    class Razorpay {
      constructor(options: RazorpayOptions);
      orders: {
        create(order: Order): Promise<{
          id: string;
          amount: number;
          currency: string;
        }>;
      };
      payments: {
        fetch(paymentId: string): Promise<any>;
      };
    }
  
    export = Razorpay;
  }