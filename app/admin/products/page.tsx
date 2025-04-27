'use client';

import Link from 'next/link';
import Image from 'next/image';

const mockProducts = [
  {
    id: 1,
    name: 'Money Magnet Band',
    price: 799,
    image: '/energy_stones/money_magnet_band/money_magnet_band_bracelet1.jpg',
  },
  {
    id: 2,
    name: '7 Mukhi Nepali Rudraksha',
    price: 499,
    image: '/single_rudraksha_beads/7mukhi_nepali_rudraksha/7nepalirudraksha1.jpg',
  },
];

export default function AdminProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Manage Products</h1>

      {/* Add New Product (future) */}
      <div className="flex justify-end mb-6">
        <Link href="/admin/products/new" className="bg-black text-white px-6 py-2 rounded hover:bg-red-600 transition">
          Add New Product
        </Link>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow-md">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((product) => (
              <tr key={product.id} className="border-t">
                {/* Product Info */}
                <td className="p-4 flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>{product.name}</div>
                </td>

                {/* Price */}
                <td className="p-4 font-semibold text-red-600">₹ {product.price}</td>

                {/* Actions */}
                <td className="p-4 space-x-4">
                  <button className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500 transition">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
