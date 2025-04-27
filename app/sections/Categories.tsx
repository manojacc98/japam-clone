import CategoryCard from '../components/CategoryCard';

const categories = [
  { name: 'Rudraksha Bracelets', image: '/category/rudraksha_bracelets.jpg' },
  { name: 'Rudraksha Malas', image: '/category/rudraksha_malas.jpg' },
  { name: 'Nepali/Indian Rudraksha', image: '/category/nepali_rudraksha.jpg' },
  { name: 'Spiritual Jewellery', image: '/category/spiritual_jewellery.jpg' },
  { name: 'Karungali Wearables', image: '/category/karungali_wearable.jpg' },
  { name: 'Energy Stones', image: '/category/energy_stones.jpg' },
  { name: 'Pyrite Wearables', image: '/category/pyrite_wearable.jpg' },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Shop Our Collections</h2>

      <div className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2">
        {categories.map((cat, index) => (
          <CategoryCard key={index} name={cat.name} image={cat.image} />
        ))}
      </div>
    </section>
  );
}
