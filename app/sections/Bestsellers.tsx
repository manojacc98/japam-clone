'use client';

import { bestSellersProducts } from '../constants/bestSellersProducts';
import ProductCard from '../components/ProductCard';

export default function BestSellers() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Japam Bestsellers
          </h2>
          <a href="/bestsellers" className="text-sm font-semibold text-black underline hover:text-gray-600">
            View all
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {bestSellersProducts.map((product, index) => (
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
