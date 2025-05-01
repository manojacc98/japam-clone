'use client';

import { useState } from 'react';
import { bestSellersProducts } from '../constants/bestSellersProducts';
import ProductCard from '../components/ProductCard';
import { FaFilter, FaChevronDown } from 'react-icons/fa';

const sortOptions = [
  { value: 'best-selling', label: 'Best Selling' },
  // You can add more options here if needed
];

const filterOptions = [
  'Health',
  'Wealth',
  'Peace',
  'Love',
  'Protection',
  'Balance',
  'Courage',
];

export default function BestsellersPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('best-selling');
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const sortedProducts = [...bestSellersProducts].sort((a, b) => {
    if (sortBy === 'low-to-high') return a.price - b.price;
    if (sortBy === 'high-to-low') return b.price - a.price;
    return 0;
  });

  const displayedProducts = sortedProducts;

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home &gt; Bestsellers
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Bestsellers</h1>
      <p className="text-center text-gray-500 mb-8">
        ({displayedProducts.length} products)
      </p>

      {/* Top Filter + Sort */}
      <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-6">
        <div className="flex items-center gap-4">
          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-gray-800 font-semibold"
          >
            <FaFilter className="text-lg" />
            Filter
          </button>

          {/* Sort By */}
          <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
            <span className="text-gray-800 font-semibold">Sort by</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm appearance-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex gap-6">

        {/* Left Sidebar Filters */}
        {showFilters && (
          <aside className="w-[250px] border-r border-gray-200 pr-6">
            {/* Purpose Accordion */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-gray-900">Purpose</h2>
                <FaChevronDown className="text-gray-500" />
              </div>

              {/* Filter List */}
              <div className="flex flex-col gap-2">
                {filterOptions.map((filter) => (
                  <label key={filter} className="flex items-center justify-between text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter)}
                        onChange={() => toggleFilter(filter)}
                        className="accent-red-600"
                      />
                      <span>{filter}</span>
                    </div>
                    <span className="text-gray-400 text-xs">(10)</span> {/* Hardcoded count for now */}
                  </label>
                ))}
                <button className="text-blue-600 text-sm mt-2">Show more</button>
              </div>
            </div>

            {/* Price Filter (Dummy UI) */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-gray-900">Price</h2>
                <FaChevronDown className="text-gray-500" />
              </div>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="₹0" className="border rounded-md p-1 w-1/2" />
                <input type="text" placeholder="₹4999" className="border rounded-md p-1 w-1/2" />
              </div>
            </div>
          </aside>
        )}

        {/* Product Grid */}
        <section className={`grid ${showFilters ? 'grid-cols-3' : 'grid-cols-5'} gap-6 flex-1`}>
          {displayedProducts.map((product, index) => (
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
        </section>

      </div>
    </main>
  );
}

