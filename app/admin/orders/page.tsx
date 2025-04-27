'use client';

import Link from 'next/link';

const mockOrders = [
  {
    id: 'ORD12345',
    name: 'Manoj Kumar',
    email: 'manoj@example.com',
    date: '2025-04-25',
    total: 1599,
    status: 'Pending',
  },
  {
    id: 'ORD12346',
    name: 'Sita Devi',
    email: 'sita@example.com',
    date: '2025-04-24',
    total: 799,
    status: 'Shipped',
  },
];

export default function AdminOrdersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Manage Orders</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow-md">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Email</th>
              <th className="p-4">Date</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-4 font-semibold">{order.id}</td>
                <td className="p-4">{order.name}</td>
                <td className="p-4">{order.email}</td>
                <td className="p-4">{order.date}</td>
                <td className="p-4 font-bold text-red-600">₹ {order.total}</td>
                <td className="p-4 font-semibold">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
