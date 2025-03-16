export default function PaymentSuccessPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Payment Successful! 🎉
          </h1>
          <p className="text-gray-300 mb-6">
            Thank you for upgrading your Crux experience. Your premium features are now active.
          </p>
          <a
            href="/upload"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
          >
            Start Summarizing →
          </a>
        </div>
      </div>
    );
  }