'use client';

import { useState } from 'react';
import { X, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


import { bestSellersProducts } from '@/app/constants/bestSellersProducts';
import { energyStoneProducts } from '@/app/constants/energyStoneProducts';
import { singleRudrakshaProducts } from '@/app/constants/singleRudrakshaProducts';
import { trendingProducts } from '@/app/constants/trendingProducts';

//  Merge all products together
const allProducts = [
  ...bestSellersProducts,
  ...energyStoneProducts,
  ...singleRudrakshaProducts,
  ...trendingProducts,
];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const suggestions = ['rudraksha', 'modern rudraksha bracelet', 'rudraksha mala', 'energy stone', 'gift hampers'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20">
      <div className="bg-white w-full max-w-5xl rounded-lg p-6 relative mx-4">
        
        {/* x Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-black">
          <X className="w-6 h-6" />
        </button>

        {/* Search Input */}
        <div className="flex items-center gap-2 border rounded px-4 py-2 mb-6">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full outline-none text-black" // 🖤 Important: dark text
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/*  Tabs */}
        <div className="flex gap-6 mb-6 font-semibold text-black"> {/* 🖤 dark text */}
          <div className="border-b-2 border-black pb-1">Products</div>
          <div className="text-gray-400">Collections</div>
          <div className="text-gray-400">Pages</div>
        </div>

        {/*  Products + Suggestions */}
        <div className="flex gap-6">
          
          {/* Left: Products List */}
          <div className="flex-1 space-y-4 overflow-y-auto max-h-[400px] pr-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Link key={index} href={`/product/${product.slug}`} onClick={onClose}>
                  <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded">
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image
                        src={product.image || product.thumbnail || '/placeholder.jpg'}
                        alt={product.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-sm text-black">{product.title}</h2> {/* 🖤 dark title */}
                      <div className="text-red-600 font-bold text-sm mt-1">
                        ₹ {product.price.toLocaleString('en-IN')}
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through ml-2 text-xs">
                            ₹ {product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-gray-500">No products found.</div>
            )}
          </div>

          {/* Right: Suggestions */}
          <div className="w-1/3 hidden md:block">
            <h3 className="font-bold text-black mb-4">Suggestions</h3> {/* 🖤 dark heading */}
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => setSearchTerm(suggestion)}
                  className="text-sm text-gray-700 hover:underline cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
