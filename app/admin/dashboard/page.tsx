'use client';

import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Orders */}
          <Link href="/admin/orders" className="flex-1 bg-gray-100 p-6 rounded-md hover:bg-gray-200 transition">
            <h2 className="text-xl font-semibold mb-2">Manage Orders</h2>
            <p className="text-gray-600">View and update customer orders</p>
          </Link>

          {/* Products */}
          <Link href="/admin/products" className="flex-1 bg-gray-100 p-6 rounded-md hover:bg-gray-200 transition">
            <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
            <p className="text-gray-600">Add, Edit or Delete products</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
