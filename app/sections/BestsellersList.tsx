'use client';

import { bestSellersProducts } from '@/constants/bestSellersProducts';
import ProductCard from '@/components/ProductCard';

export default function BestsellersList() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home {'>'} <span className="text-black">Bestsellers</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">Bestsellers</h1>
      <p className="text-center text-gray-500 mb-10">({bestSellersProducts.length} products)</p>

      <div className="flex gap-10">
        {/* Sidebar Filters */}
        <aside className="hidden md:block w-1/4">
          <h2 className="text-lg font-semibold mb-4">Purpose</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><input type="checkbox" /> Health (55)</li>
            <li><input type="checkbox" /> Wealth (22)</li>
            <li><input type="checkbox" /> Peace (62)</li>
            <li><input type="checkbox" /> Love (12)</li>
            <li><input type="checkbox" /> Protection (31)</li>
            <li><input type="checkbox" /> Balance (50)</li>
            <li><input type="checkbox" /> Courage (10)</li>
          </ul>
        </aside>

        {/* Main Product Grid */}
        <div className="flex-1">
          {/* Sorting */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Sort by:</span> Best selling ▼
            </div>
            <div className="flex gap-2">
              <button>🔳</button>
              <button>🔲</button>
            </div>
          </div>

          {/* Product Grid */}
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
      </div>
    </section>
  );
}
