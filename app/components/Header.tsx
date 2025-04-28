'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const rudrakshaCategories = [
  { name: 'Rudraksha Bracelets', link: '/collections/rudraksha-bracelets' },
  { name: 'Rudraksha Malas', link: '/collections/rudraksha-malas' },
  { name: 'Nepali Rudraksha', link: '/collections/nepali-rudraksha' },
];

const rudrakshaProducts = [
  {
    name: 'Silver Plated Modern Rudraksha Bracelet',
    image: '/Om_Trishool_Necklace.jpg',
    link: '/product/silver-plated-modern-rudraksha-bracelet',
  },
  {
    name: 'Gold Plated DuoTone Rudraksha Bracelet',
    image: '/Ganesh_Necklace.jpg',
    link: '/product/gold-plated-duotone-rudraksha-bracelet',
  },
  {
    name: 'Gold Plated DuoTone Rudraksha Bracelet2',
    image: '/Shiv_Tapasya_Necklace_2.jpg',
    link: '/product/gold-plated-duotone-rudraksha-bracelet',
  },
  {
    name: 'Gold Plated DuoTone Rudraksha Bracelet3',
    image: '/Shiv_Tapasya_Necklace_2.jpg',
    link: '/product/gold-plated-duotone-rudraksha-bracelet',
  },
];

const navItems = ["Rudraksha", "Spiritual Jewellery", "Karungali", "Energy Stones", "Gift Hampers", "Idols", "Support"];

export default function Header() {
  const [isRudrakshaOpen, setIsRudrakshaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsRudrakshaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsRudrakshaOpen(false);
    }, 200);
  };

  return (
    <header className="border-b relative">
      {/* Top announcement */}

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 md:px-15 py-3 bg-white">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.gif" alt="Japam Logo" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {/* Rudraksha dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-900 font-semibold flex items-center gap-1 text-[15px] hover:text-black">
              Rudraksha
              <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Full Width Dropdown */}
            {isRudrakshaOpen && (
              <div className="fixed top-[100px] left-0 right-0 bg-white shadow-md border-t z-50 transition-all duration-300 ease-in-out">
                <div className="max-w-7xl mx-auto flex px-8 py-8 gap-10">
                  {/* Left */}
                  <div className="w-1/4 flex flex-col gap-4">
                    {rudrakshaCategories.map((category) => (
                      <Link key={category.name} href={category.link} className="flex justify-between items-center p-2 text-gray-800 hover:bg-gray-100 rounded text-sm font-semibold">
                        {category.name}
                        <span className="text-gray-400">➔</span>
                      </Link>
                    ))}
                  </div>

                  {/* Right */}
                  <div className="w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {rudrakshaProducts.map((product) => (
                      <Link key={product.name} href={product.link} className="text-center group">
                        <div className="relative w-full aspect-square overflow-hidden rounded-md bg-gray-100">
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

          {/* Other Menu Items */}
          {navItems.slice(1).map((item) => (
            <Link key={item} href="#" className="text-gray-900 font-semibold text-[15px] hover:text-black">
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons and Hamburger */}
        <div className="flex items-center gap-4">
          <Search className="w-7 h-7 text-gray-900" />
          <User className="w-7 h-7 text-gray-900" />
          <ShoppingCart className="w-7 h-7 text-gray-900" />

          {/* Desktop Chat Button */}
          <button className="hidden md:block ml-2 px-4 py-1.5 text-md bg-black text-white rounded-full">
            Chat with us
          </button>

          {/* Hamburger Icon only on Mobile */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block md:hidden text-gray-900">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[100px] left-0 right-0 bottom-0 bg-white shadow-md border-t z-40 p-6 overflow-y-auto">
          {/* Mobile Nav Items */}
          {navItems.map((item) => (
            <div key={item} className="border-b border-gray-200">
              {/* If Rudraksha, make it expandable */}
              {item === "Rudraksha" ? (
                <>
                  <div 
                    className="flex justify-between items-center py-4 font-semibold text-gray-900 cursor-pointer"
                    onClick={() => setIsRudrakshaOpen(!isRudrakshaOpen)}
                  >
                    {item}
                    <span className="text-gray-400">{isRudrakshaOpen ? "−" : ">"}</span>
                  </div>

                  {/* Submenu (only when open) */}
                  {isRudrakshaOpen && (
                    <div className="flex flex-col pl-6 pb-4 gap-3 text-gray-700 text-sm">
                      {rudrakshaCategories.map((category) => (
                        <Link key={category.name} href={category.link} className="hover:underline">
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href="#" className="flex justify-between items-center py-4 font-semibold text-gray-900">
                  {item}
                  <span className="text-gray-400">{">"}</span>
                </Link>
              )}
            </div>
          ))}

          {/* Chat Button Mobile */}
          <button className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#262130] text-white rounded-lg text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 16.5a2.5 2.5 0 01-2.5 2.5h-11l-4 4V4a2 2 0 012-2h13.5a2.5 2.5 0 012.5 2.5v12z" />
            </svg>
            Chat with us
          </button>
        </div>
      )}

    </header>
  );
}
