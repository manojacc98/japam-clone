'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // import here

const initialCartItems = [
  {
    id: 1,
    name: 'Money Magnet Band',
    image: '/energy_stones/money_magnet_band/money_magnet_band_bracelet1.jpg',
    price: 799,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Original 7 Mukhi Rudraksha',
    image: '/single_rudraksha_beads/7mukhi_nepali_rudraksha/7nepalirudraksha1.jpg',
    price: 499,
    quantity: 2,
  },
];

export default function CartPage() {
  const router = useRouter(); 

  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          Your cart is empty.{' '}
          <Link href="/" className="text-red-600 underline">Continue Shopping</Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-6 border p-4 rounded-md shadow-sm">
              <div className="w-24 h-24 relative">
                <Image src={item.image} alt={item.name} fill className="object-cover rounded-md" />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <div className="flex items-center mt-2 gap-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-300">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-300">+</button>
                </div>
              </div>

              <div className="text-lg font-bold text-red-600">
                ₹ {item.price * item.quantity}
              </div>

              <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-600">
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Total and Checkout */}
          <div className="text-right mt-8">
            <div className="text-xl font-bold mb-4">Total: ₹ {totalPrice}</div>
            <button
              onClick={() => router.push('/checkout')}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
