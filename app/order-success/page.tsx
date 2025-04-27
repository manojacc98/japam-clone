'use client';

import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function OrderSuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-12">
      
      {/* Big Success Icon */}
      <FaCheckCircle className="text-green-500 text-6xl mb-6" />

      {/* Thank You Message */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Order!</h1>

      {/* Small Info */}
      <p className="text-gray-600 mb-6">
        Your order has been placed successfully.  
        We will process it and send updates to your email.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
        >
          Continue Shopping
        </Link>
        <Link
          href="/my-orders"
          className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          View My Orders
        </Link>
      </div>

    </main>
  );
}

