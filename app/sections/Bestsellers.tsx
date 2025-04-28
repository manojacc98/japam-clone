'use client';

import { bestSellersProducts } from '../constants/bestSellersProducts';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';

export default function BestSellers() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title and View All Link */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Japam Best Sellers
          </h2>
          <Link
            href="/bestsellers"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            View All
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {bestSellersProducts.slice(0, 8).map((product, index) => (
            <ProductCard
              key={index}
              slug={product.slug}
              title={product.title}
              thumbnail={product.thumbnail || product.image}
              hoverThumbnail={product.hoverImage}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
