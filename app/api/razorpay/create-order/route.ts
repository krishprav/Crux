import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import shortid from 'shortid';

export async function POST(request: Request) {
  const { amount, currency = 'INR', notes = {} } = await request.json();
  
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      notes,
      payment_capture: 1,
    });

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}