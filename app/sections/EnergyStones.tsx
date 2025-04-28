'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import energyStoneProducts from '../constants/energyStoneProducts'; 

export default function EnergyStones() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { addToCart } = useCart();

  return (
    <section className="bg-[#f2f2f2] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 px-2 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Energy Stones</h2>
          <Link href="#" className="text-sm text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {energyStoneProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-3 group relative"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-md">
                <Image
                  src={`/${product.folder}/${hoverIndex === index ? product.images[1] : product.images[0]}`}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-300"
                />

                {/* Discount Tag */}
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() =>
                    addToCart({
                      id: Math.random(),
                      title: product.title,
                      price: product.price,
                      image: `/energy_stones/${product.folder}/${product.images[0]}`,
                      quantity: 1,
                    })
                  }
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition bg-black text-white p-2 rounded-full hover:bg-red-600"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-sm font-semibold text-gray-800 leading-tight">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                {'★'.repeat(product.rating)}
                {'☆'.repeat(5 - product.rating)}
                <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
              </div>

              {/* Pricing */}
              <div className="mt-1">
                <span className="font-bold text-gray-900 mr-2">₹ {product.price}.00</span>
                <span className="line-through text-gray-400 text-sm">₹ {product.originalPrice}.00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
