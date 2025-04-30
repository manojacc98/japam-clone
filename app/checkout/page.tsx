'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function CheckoutPage() {
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    payment: 'cod',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order Placed', formData);
    router.push('/order-success'); 
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-md shadow-md">
        
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-1">Shipping Address</label>
          <input
            type="text"
            name="address"
            required
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* City and Pincode */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">City</label>
            <input
              type="text"
              name="city"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-1">Pincode</label>
            <input
              type="text"
              name="pincode"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
        </div>

        {/* State */}
        <div>
          <label className="block font-semibold mb-1">State</label>
          <input
            type="text"
            name="state"
            required
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block font-semibold mb-1">Payment Method</label>
          <select
            name="payment"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          >
            <option value="cod">Cash on Delivery (COD)</option>
          </select>
        </div>

        {/* Place Order Button */}
        <div className="text-center">
          <button type="submit" className="bg-black text-white px-8 py-3 rounded-md hover:bg-red-600 transition">
            Place Order
          </button>
        </div>

      </form>
    </main>
  );
}

