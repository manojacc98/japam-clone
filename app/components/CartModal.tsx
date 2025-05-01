

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import { X } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Gold Plated Nathdwara Krishna Ji Necklace',
    image: '/energy_stones/sample1.jpg', // Update your image paths
    price: 499,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Oxi-Silver Plated Hanuman Ji Necklace',
    image: '/energy_stones/sample2.jpg',
    price: 799,
    quantity: 1,
  },
];

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increaseQty = (id: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50 overflow-y-auto">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-800">
        <X size={28} />
      </button>

      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900">Your cart</h2>
      </div>

      {/* Cart Items */}
      <div className="p-6 space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <div className="relative w-16 h-16">
                <Image src={item.image} alt={item.name} fill className="rounded object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold text-sm leading-tight">{item.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => decreaseQty(item.id)} className="w-7 h-7 bg-gray-200 text-gray-800 font-bold">-</button>
                  <span className="text-gray-800 font-medium">{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="w-7 h-7 bg-gray-200 text-gray-800 font-bold">+</button>
                </div>
              </div>
              <div className="text-gray-800 font-bold">
                ₹ {item.price * item.quantity}
              </div>
              <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-600">
                <FaTrash size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">Your cart is empty.</div>
        )}
      </div>

      {/* Total and Checkout Button */}
      <div className="mt-10 p-6 border-t">
        <div className="flex justify-between mb-4">
          <span className="text-lg font-bold text-gray-900">Total:</span>
          <span className="text-lg font-bold text-gray-900">₹ {totalPrice}</span>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
