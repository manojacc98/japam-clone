'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
  slug: string;
  title: string;
  thumbnail: string;
  hoverThumbnail?: string;
  price: number;
  originalPrice: number;
  discount: string;
}

export default function ProductCard({
  slug,
  title,
  thumbnail,
  hoverThumbnail,
  price,
  originalPrice,
  discount,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Product Card */}
      <div className="group block w-full max-w-[250px]">
        <div
          className="relative w-full aspect-square overflow-hidden rounded-lg shadow hover:shadow-lg transition-all duration-300 bg-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Product Image */}
          <Link href={`/product/${slug}`}>
            <Image
              src={isHovered && hoverThumbnail ? hoverThumbnail : thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 250px"
            />
          </Link>

          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}
          </div>

          {/* Cart Button on Hover */}
          {isHovered && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="absolute bottom-2 right-2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              <FaShoppingCart />
            </button>
          )}
        </div>

        {/* Product Title */}
        <h3 className="mt-3 text-base font-semibold text-gray-800 leading-tight group-hover:underline line-clamp-2">
          {title}
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-red-600 text-lg">₹{price}</span>
          <span className="line-through text-gray-500 text-sm">₹{originalPrice}</span>
        </div>
      </div>

      {/* Buy Now Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end z-50">
          <div className="w-full max-w-sm bg-white p-6 flex flex-col gap-4 overflow-y-auto shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="ml-auto text-2xl font-bold text-gray-700"
            >
              ×
            </button>

            {/* Product Info */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 relative">
                <Image src={thumbnail} alt={title} fill className="object-cover rounded-md" />
              </div>
              <div>
                <h2 className="font-bold text-gray-800">{title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-red-600 text-lg">₹{price}</span>
                  <span className="line-through text-gray-500 text-sm">₹{originalPrice}</span>
                </div>
                <p className="text-green-600 text-sm mt-1">GST included. Free delivery over ₹299</p>
                <Link href={`/product/${slug}`} className="text-blue-600 text-sm underline mt-2 block">
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Size options */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Size</h3>
              <div className="flex gap-2">
                <button className="border px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">REGULAR</button>
                <button className="border px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">SMALL</button>
                <button className="border px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">LARGE</button>
              </div>
            </div>

            {/* Order Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md">
                Order Now - Cash On Delivery
              </button>
              <button className="bg-black hover:bg-gray-800 text-white py-3 rounded-md">
                Pay Online & Get ₹20 Off
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

