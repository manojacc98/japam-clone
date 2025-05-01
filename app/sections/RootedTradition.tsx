'use client';

import Image from 'next/image';
import Link from 'next/link';

const traditionItems = [
  {
    src: '/mahakal-mala.jpg',
    link: '/products/silver-plated-elegant-rudraksha-mala',
  },
  {
    src: '/red-sandalwood.jpg',
    link: '/products/red-sandalwood-necklace',
  },
  {
    src: '/dreamy-duo.jpg',
    link: '/products/dreamy-duo',
  },
  {
    src: '/silver-rudraksha-mala.jpg',
    link: '/products/silver-rudraksha-mala',
  },
  {
    src: '/golden-beads-modern.jpg',
    link: '/products/golden-modern-beads',
  },
  {
    src: '/money-magnet-fusion.jpg',
    link: '/products/money-magnet-fusion',
  },
  {
    src: '/amethyst-band.jpg',
    link: '/products/amethyst-band',
  },
  {
    src: '/pyrite-splash.jpg',
    link: '/products/pyrite-splash',
  },
  {
    src: '/tiger-eye-om.jpg',
    link: '/products/tiger-eye-om',
  },
];

export default function Tradition() {
  return (
    <section className="bg-[#f3f3f3] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Rooted In Tradition, Made For Today
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {traditionItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="overflow-hidden rounded-lg group">
                <div className="relative w-full aspect-[3/4]"> {/* Maintain perfect ratio */}
                  <Image
                    src={item.src}
                    alt="Tradition item"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
