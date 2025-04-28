
// New code:

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User } from 'lucide-react';

const rudrakshaCategories = [
  { name: 'Rudraksha Bracelets', link: '/collections/rudraksha-bracelets' },
  { name: 'Rudraksha Malas', link: '/collections/rudraksha-malas' },
  { name: 'Nepali Rudraksha', link: '/collections/nepali-rudraksha' },
];

const rudrakshaProducts = [
  {
    name: 'Silver Plated Modern Rudraksha Bracelet',
    image: '/images/placeholder.jpg',
    link: '/product/silver-plated-modern-rudraksha-bracelet',
  },
  {
    name: 'Gold Plated DuoTone Rudraksha Bracelet',
    image: '/images/placeholder.jpg',
    link: '/product/gold-plated-duotone-rudraksha-bracelet',
  },
];

export default function Header() {
  const [isRudrakshaOpen, setIsRudrakshaOpen] = useState(false);

  return (
    <header className="border-b relative">
      {/* Top announcement */}

      {/* Main Header */}
      <div className="flex items-center justify-between px-8 py-3 bg-white">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.gif" alt="Japam Logo" className="h-10 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 items-center relative">
          <div
            className="relative"
            onMouseEnter={() => setIsRudrakshaOpen(true)}
            onMouseLeave={() => setIsRudrakshaOpen(false)}
          >
            <button className="text-gray-800 font-medium flex items-center gap-1 text-sm hover:text-black">
              Rudraksha
              <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Fullscreen Dropdown */}
            {isRudrakshaOpen && (
              <div className="fixed top-[100px] left-0 right-0 bg-white shadow-md border-t z-50">
                <div className="max-w-7xl mx-auto flex px-8 py-8 gap-10">
                  {/* Left Categories */}
                  <div className="w-1/4 flex flex-col gap-4">
                    {rudrakshaCategories.map((category) => (
                      <Link key={category.name} href={category.link} className="flex justify-between items-center p-2 text-gray-800 hover:bg-gray-100 rounded text-sm font-semibold">
                        {category.name}
                        <span className="text-gray-400">➔</span>
                      </Link>
                    ))}
                  </div>

                  {/* Right Products */}
                  <div className="w-3/4 grid grid-cols-4 gap-6">
                    {rudrakshaProducts.map((product) => (
                      <Link key={product.name} href={product.link} className="text-center group">
                        <div className="relative w-full h-32 overflow-hidden rounded-md bg-gray-100">
                          <Image
                            src={product.image}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <p className="mt-2 text-xs text-gray-700 group-hover:text-black">{product.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other Menus */}
          {["Spiritual Jewellery", "Karungali", "Energy Stones", "Gift Hampers", "Idols", "Support"].map((item) => (
            <Link key={item} href="#" className="text-gray-800 font-medium text-sm hover:text-black">
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-gray-700" />
          <User className="w-5 h-5 text-gray-700" />
          <ShoppingCart className="w-5 h-5 text-gray-700" />
          <button className="ml-2 px-4 py-1.5 text-xs bg-black text-white rounded-full">Chat with us</button>
        </div>
      </div>
    </header>
  );
}
