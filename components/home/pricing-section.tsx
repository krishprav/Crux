'use client';

import { motion } from 'framer-motion';
import { IndianRupee } from 'lucide-react';
import MacOSWindow from '@/components/ui/MacOSWindow';
import RazorpayButton from '@/components/payment/RazorpayButton';
import { useWeb3 } from '@/context/Web3Context';

export function PricingSection() {
  const { isConnected, provider, walletAddress } = useWeb3();

  const handleWeb3Payment = async (amount: number) => {
    if (!provider || !walletAddress) {
      alert('Please connect your wallet first!');
      return;
    }

    try {
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: 'YOUR_RECEIVING_WALLET_ADDRESS', // Replace with your wallet address
        value: ethers.utils.parseEther(amount.toString()),
      });
      console.log('Transaction sent:', tx.hash);
      alert('Payment successful!');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Pricing 💰
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Choose the plan that perfectly matches your document processing needs
          </motion.p>
        </div>

        <MacOSWindow title="Pricing Plans" className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            
            {/* Freemium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/50 rounded-2xl border-2 border-white/10 backdrop-blur-lg h-full flex flex-col"
            >
              <div className="p-6 pb-8 text-center flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">🎁 Freemium</h3>
                  <p className="text-sm text-gray-400">Start for free</p>
                </div>

                <div className="text-3xl font-bold text-gray-100 mb-8 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 mr-1" />
                  0<span className="text-lg text-gray-400 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left flex-grow px-4">
                  {[
                    '🎯 3 PDF summaries/month',
                    '📄 Basic processing speed',
                    '📧 Community support',
                    '✅ Core features only'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="mt-0.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto w-full py-3.5 rounded-xl bg-gray-700/50 hover:bg-gray-700 transition-all text-gray-100 font-medium">
                  Start Free 🚀
                </button>
              </div>
            </motion.div>

            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-800/50 rounded-2xl border-2 border-blue-500/30 backdrop-blur-lg h-full flex flex-col"
            >
              <div className="p-6 pb-8 text-center flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">🧑💻 Basic</h3>
                  <p className="text-sm text-gray-400">For individual users</p>
                </div>

                <div className="text-3xl font-bold text-gray-100 mb-8 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 mr-1" />
                  299<span className="text-lg text-gray-400 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left flex-grow px-4">
                  {[
                    '🚀 Standard processing speed',
                    '📧 Priority email support',
                    '🔑 Advanced features',
                    '📈 Basic analytics dashboard'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="mt-0.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Razorpay Button for Basic Plan */}
                <RazorpayButton 
                  plan="Basic" 
                  amount={299}
                  className="mt-auto bg-blue-600/30 hover:bg-blue-600/40 text-blue-100"
                />
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl h-full flex flex-col transform hover:scale-[1.02] transition-transform"
            >
              <div className="p-6 pb-8 text-center flex flex-col h-full relative">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-4 py-1 rounded-bl-2xl rounded-tr-2xl">
                  Most Popular
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">⚡ Pro</h3>
                  <p className="text-sm text-blue-100">For teams & professionals</p>
                </div>

                <div className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 mr-1" />
                  599<span className="text-lg text-blue-100/80 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left flex-grow px-4">
                  {[
                    '🚀 Ultra-fast priority processing',
                    '🛡️ Document encryption & security',
                    '📞 24/7 dedicated support',
                    '📊 Advanced analytics & reporting'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-blue-100">
                      <span className="mt-0.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Razorpay Button for Pro Plan */}
                <RazorpayButton 
                  plan="Pro" 
                  amount={599}
                  className="mt-auto"
                />

                {/* Web3 Crypto Payment Button */}
                {isConnected && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => handleWeb3Payment(599)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold shadow-lg"
                    >
                      Pay with Crypto
                    </button>
                  </div>
                )}

              </div>
            </motion.div>

          </div>
        </MacOSWindow>
      </div>
    </section>
  );
}
