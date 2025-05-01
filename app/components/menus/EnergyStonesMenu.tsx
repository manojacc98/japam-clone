// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const energyCategories = [
//   {
//     name: 'Money Magnet Fusion',
//     slug: 'money_magnet_fusion',
//     thumbnail: '/energy_stones/money_magnet_fusion/money_magnetbracelet1.jpg',
//     products: [
//       { title: 'Money Magnet Bracelet 1', image: '/energy_stones/money_magnet_fusion/money_magnetbracelet1.jpg' },
//       { title: 'Money Magnet Bracelet 2', image: '/energy_stones/money_magnet_fusion/money_magnetbracelet2.jpg' },
//       { title: 'Money Magnet Bracelet 3', image: '/energy_stones/money_magnet_fusion/money_magnetbracelet3.jpg' },
//       { title: 'Money Magnet Bracelet 4', image: '/energy_stones/money_magnet_fusion/money_magnetbracelet4.jpg' },
//     ],
//   },
//   {
//     name: 'Pyrite Wealth Band',
//     slug: 'pyrite_wealth_band',
//     thumbnail: '/energy_stones/pyrite_wealth_band/pyrite_wealth_band_bracelet1.jpg',
//     products: [
//       { title: 'Pyrite Wealth Bracelet', image: '/energy_stones/pyrite_wealth_band/pyrite_wealth_band_bracelet1.jpg' },
//     ],
//   },
//   {
//     name: 'Seven Chakra Bracelet',
//     slug: 'pyrite_seven_chakra_bracelet',
//     thumbnail: '/energy_stones/pyrite_seven_chakra_bracelet/seven_chakra_bracelet1.jpg',
//     products: [
//       { title: 'Seven Chakra Bracelet 1', image: '/energy_stones/pyrite_seven_chakra_bracelet/seven_chakra_bracelet1.jpg' },
//       { title: 'Seven Chakra Bracelet 2', image: '/energy_stones/pyrite_seven_chakra_bracelet/seven_chakra_bracelet2.jpg' },
//     ],
//   },
//   {
//     name: 'Splash Bracelet',
//     slug: 'pyrite_stone_splash_bracelet',
//     thumbnail: '/energy_stones/pyrite_stone_splash_bracelet/splash_bracelet1.jpg',
//     products: [
//       { title: 'Splash Bracelet 1', image: '/energy_stones/pyrite_stone_splash_bracelet/splash_bracelet1.jpg' },
//       { title: 'Splash Bracelet 2', image: '/energy_stones/pyrite_stone_splash_bracelet/splash_bracelet2.jpg' },
//     ],
//   },
// ];

// export default function EnergyStonesMenu() {
//   const [activeCategory, setActiveCategory] = useState(energyCategories[0]);

//   return (
//     <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t flex z-50">
//       {/* Left Categories */}
//       <div className="w-1/4 border-r">
//         {energyCategories.map((category, index) => (
//           <div
//             key={index}
//             className={`flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-gray-100 ${activeCategory.name === category.name ? 'bg-gray-100' : ''}`}
//             onMouseEnter={() => setActiveCategory(category)}
//           >
//             <div className="relative w-12 h-12 rounded overflow-hidden">
//               <Image src={category.thumbnail} alt={category.name} fill className="object-cover" />
//             </div>
//             <p className="font-semibold text-gray-700 text-sm">{category.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Right Product Previews */}
//       <div className="w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
//         {activeCategory.products.map((product, index) => (
//           <div key={index} className="flex flex-col items-center text-center">
//             <div className="relative w-32 h-32">
//               <Image src={product.image} alt={product.title} fill className="rounded object-cover" />
//             </div>
//             <p className="mt-2 text-sm text-gray-700 font-medium">{product.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
