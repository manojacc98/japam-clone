'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Search,
  User,
  ShoppingBag,
  MessageCircleMore,
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar
      <div className="bg-black text-white text-sm text-center py-1 px-4">
        ₹20 NAMASTE Discount & Prepaid Offer
      </div> */}

      {/* Main header */}
      <div className="bg-white py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.gif" alt="Logo" className="h-10" />
          </Link>

          {/* Search bar */}
          {showSearch && (
            <div className="hidden md:block w-1/2 mx-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border rounded-full"
              />
            </div>
          )}

          {/* Icons */}
          <Link href="/cart">
          <div className="flex items-center gap-4">
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search className="w-5 h-5 text-[#1e1e1e]" />
            </button>
            <button>
              <User className="w-5 h-5 text-[#1e1e1e]" />
            </button>
            <button className="relative">
              <ShoppingBag className="w-5 h-5 text-[#1e1e1e]" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5">
                1
              </span>
            </button>
            <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
          </Link>
        </div>
      </div>

      {/* Navigation row */}
      <div className="bg-white ">
        <nav className="text-gray-800 text-sm font-medium">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
            {/* Nav links */}
            <ul className="hidden md:flex space-x-6">
              <li className="relative group">
                <span className="hover:underline cursor-pointer">Rudraksha</span>
                <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow mt-2 w-40 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/">All Types</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/">Nepali</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/">Indonesian</Link></li>
                </ul>
              </li>
              <li className="relative group">
                <span className="hover:underline cursor-pointer">Spiritual Jewellery</span>
                <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow mt-2 w-40 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/">Bracelets</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/">Necklaces</Link></li>
                </ul>
              </li>
              <li><Link href="/">Karungali</Link></li>
              <li><Link href="/">Energy Stones</Link></li>
              <li><Link href="/">Gift Hampers</Link></li>
              <li><Link href="/">Idols</Link></li>
              <li className="relative group">
                <span className="hover:underline cursor-pointer">Support</span>
                <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow mt-2 w-40 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/">Contact Us</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/">FAQ</Link></li>
                </ul>
              </li>
            </ul>

            {/* ✅ Chat button on nav bar */}
            <div className="hidden md:flex">
              <button className="flex items-center gap-2 bg-[#2e2b35] text-white text-sm px-3 py-1.5 rounded-full hover:scale-105 transition">
                <MessageCircleMore className="w-4 h-4" />
                Chat with us
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <ul className="md:hidden flex flex-col gap-2 px-4 pb-4">
              <li><Link href="/">Rudraksha</Link></li>
              <li><Link href="/">Spiritual Jewellery</Link></li>
              <li><Link href="/">Karungali</Link></li>
              <li><Link href="/">Energy Stones</Link></li>
              <li><Link href="/">Gift Hampers</Link></li>
              <li><Link href="/">Idols</Link></li>
              <li><Link href="/">Support</Link></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}


