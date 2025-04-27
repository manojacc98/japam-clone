'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import singleRudrakshaProducts from '../constants/singleRudrakshaProducts'; // ✅ import corrected

const SingleRudrakshaBeads = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#f2f2f2] py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Single Rudraksha Beads
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Banner */}
          <div className="w-full lg:w-1/3 relative overflow-hidden rounded-lg shadow-md">
            <Image
              src="/single_rudraksha_beads/rudraksha_banner.jpg"
              alt="Original Nepali Rudraksha"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 bg-black/70 text-white w-full px-6 py-4">
              <h3 className="text-2xl font-bold">Original Nepali Rudraksha</h3>
              <p className="text-sm">1 Mukhi to 11 Mukhi - Certified & Genuine</p>
            </div>
          </div>

          {/* Right Side Products */}
          <div className="relative w-full lg:w-2/3">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            >
              {singleRudrakshaProducts.map((product, index) => (
                <div
                  key={index}
                  className="min-w-[200px] max-w-[220px] bg-white rounded-xl overflow-hidden shadow-md group relative"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={product.image1}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <Image
                      src={product.image2}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {/* Discount Tag */}
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>

                    {/* Cart Button */}
                    <button className="absolute bottom-2 right-2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                      <FaShoppingCart size={16} />
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-1">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <FaStar />
                      <span className="text-gray-600 text-xs">{product.rating.toFixed(1)} ({product.reviews})</span>
                    </div>

                    <div className="mt-2">
                      <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                      <span className="ml-2 line-through text-gray-500 text-sm">₹{product.originalPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRudrakshaBeads;
