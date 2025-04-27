// app/sections/Trending.tsx
'use client';

import TrendingCard from '../components/TrendingCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';
import trendingProducts from '../constants/trendingProducts';
 // ✅ Importing from constants

export default function Trending() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Latest & Trending
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth pb-4"
          >
            {trendingProducts.map((product, index) => (
              <TrendingCard
                key={index}
                title={product.title}
                slug={product.slug}
                image={product.image}
                hoverImage={product.hoverImage}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
              />
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll(-300)}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll(300)}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700 p-2 rounded-full shadow-md"
          >
            <FaArrowRight />
          </button>
        </div>

        <hr className="mt-8 border-t border-gray-300" />
      </div>
    </section>
  );
}
