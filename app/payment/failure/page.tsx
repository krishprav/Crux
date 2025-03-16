export default function PaymentFailurePage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Payment Failed 😢
          </h1>
          <p className="text-gray-300 mb-6">
            We couldn't process your payment. Please try again or contact support.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/#pricing"
              className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300"
            >
              Try Again
            </a>
            <a
              href="mailto:support@crux.ai"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }