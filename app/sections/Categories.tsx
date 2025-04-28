'use client';

import CategoryCard from '../components/CategoryCard';

const categories = [
  { name: 'Rudraksha Bracelets', image: '/category/rudraksha_bracelets.jpg', slug: 'rudraksha-bracelets' },
  { name: 'Rudraksha Malas', image: '/category/rudraksha_malas.jpg', slug: 'rudraksha-malas' },
  { name: 'Nepali/Indian Rudraksha', image: '/category/nepali_rudraksha.jpg', slug: 'nepali-indian-rudraksha' },
  { name: 'Spiritual Jewellery', image: '/category/spiritual_jewellery.jpg', slug: 'spiritual-jewellery' },
  { name: 'Karungali Wearables', image: '/category/karungali_wearable.jpg', slug: 'karungali-wearables' },
  { name: 'Energy Stones', image: '/category/energy_stones.jpg', slug: 'energy-stones' },
  { name: 'Pyrite Wearables', image: '/category/pyrite_wearable.jpg', slug: 'pyrite-wearables' },
];

export default function Categories() {
  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6"> {/* Changed px-4 ➔ px-6 to make wider */}
        <h2 className="text-2xl md:text-3xl font-bold text-left text-gray-900 mb-8">Shop Our Collections</h2>

        {/* Scroll Container */}
        <div
          id="scroll-container"
          className="flex gap-10 overflow-x-auto scroll-smooth pb-6"
          style={{
            scrollbarColor: "#4B5563 #E5E7EB", // thumb color, track color
            scrollbarWidth: "thin",
          }}
        >
          {categories.map((cat, index) => (
            <CategoryCard key={index} name={cat.name} image={cat.image} slug={cat.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
