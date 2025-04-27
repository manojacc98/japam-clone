'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddNewProductPage() {
  const router = useRouter();

  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Product:', productData);
    alert('Product Created Successfully!');
    router.push('/admin/products');
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-md shadow-md">

        {/* Product Name */}
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            required
            value={productData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Enter product name"
          />
        </div>

        {/* Product Price */}
        <div>
          <label className="block font-semibold mb-1">Price (₹)</label>
          <input
            type="number"
            name="price"
            required
            value={productData.price}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Enter price"
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            required
            value={productData.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            rows={4}
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            required
            value={productData.image}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Paste image URL here"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="bg-black text-white px-8 py-3 rounded hover:bg-red-600 transition">
            Create Product
          </button>
        </div>
      </form>
    </main>
  );
}
