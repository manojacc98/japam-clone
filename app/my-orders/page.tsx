'use client';

import Link from 'next/link';

const mockOrders = [
  {
    id: 'ORD123456',
    date: '2025-04-25',
    status: 'Shipped',
    total: 1299,
  },
  {
    id: 'ORD123457',
    date: '2025-04-20',
    status: 'Delivered',
    total: 799,
  },
];

export default function MyOrdersPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

      {mockOrders.length === 0 ? (
        <div className="text-center text-gray-600">
          You have no orders yet. <Link href="/" className="text-red-600 underline">Start Shopping</Link>
        </div>
      ) : (
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="border rounded-md p-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-sm"
            >
              <div className="space-y-2">
                <p className="text-lg font-semibold">Order ID: {order.id}</p>
                <p className="text-gray-500">Date: {order.date}</p>
                <p className="text-gray-500">Status: <span className="font-semibold text-green-600">{order.status}</span></p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-lg font-bold text-red-600">₹ {order.total}</p>
                <Link href="/" className="text-sm text-blue-600 underline mt-2 inline-block">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
