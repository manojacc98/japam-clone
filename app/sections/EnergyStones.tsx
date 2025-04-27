'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
// import EnergyStones from './sections/EnergyStones';


const energyStoneProducts = [
  {
    title: 'Money Magnet Fusion Band',
    folder: 'money_magnet_fusion',
    images: ['money_magnetbracelet1.jpg', 'money_magnetbracelet2.jpg'],
    price: 699,
    originalPrice: 1299,
    discount: '46% off',
    rating: 5,
    reviews: 119,
  },
  {
    title: 'Pyrite Wealth Band',
    folder: 'pyrite_wealth_band',
    images: ['pyrite_wealth_band_bracelet1.jpg', 'pyrite_wealth_band_bracelet1.jpg'],
    price: 599,
    originalPrice: 1299,
    discount: '54% off',
    rating: 5,
    reviews: 27,
  },
  {
    title: 'Pyrite x Seven Chakra Band',
    folder: 'pyrite_seven_chakra_bracelet',
    images: ['seven_chakra_bracelet1.jpg', 'seven_chakra_bracelet2.jpg'],
    price: 899,
    originalPrice: 1299,
    discount: '31% off',
    rating: 5,
    reviews: 28,
  },
  {
    title: 'Pyrite Stone Splash Bracelet',
    folder: 'pyrite_stone_splash_bracelet',
    images: ['splash_bracelet1.jpg', 'splash_bracelet2.jpg'],
    price: 799,
    originalPrice: 1299,
    discount: '38% off',
    rating: 5,
    reviews: 9,
  },
  {
    title: 'Dreamy Duo Combo with Rose Quartz and Amethyst Bands',
    folder: 'dreamy_duo_combo',
    images: ['/dreamyduocombo1.jpg', 'dreamyduocombo2.jpg'],
    price: 799,
    originalPrice: 1299,
    discount: '38% off',
    rating: 5,
    reviews: 19,
  },
  {
    title: 'Natural Tiger Eye Om Band',
    folder: 'natural_tiger_eye_om_band',
    images: ['tigereye_bracelet1.jpg', 'tigereye_bracelet2.jpg'],
    price: 599,
    originalPrice: 1299,
    discount: '54% off',
    rating: 5,
    reviews: 10,
  },
];

const EnergyStones = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f2f2f2] py-10 px-4 md:px-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Energy Stones</h2>
        <Link href="#" className="text-sm text-blue-600 hover:underline">View all</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {energyStoneProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-3 group relative"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src={`/energy_stones/${product.folder}/${
                  hoverIndex === index ? product.images[1] : product.images[0]
                }`}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.discount}
              </div>
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black text-white p-2 rounded-full cursor-pointer hover:scale-110">
                  <ShoppingCart size={20} />
                </div>
              </div>
            </div>

            <h3 className="mt-3 font-semibold text-sm text-gray-900 leading-tight">
              {product.title}
            </h3>

            <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
              <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
            </div>

            <div className="mt-1">
              <span className="font-bold text-gray-900 mr-2">₹ {product.price}.00
              </span>
              <span className="line-through text-gray-400">₹ {product.originalPrice}.00
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnergyStones;



