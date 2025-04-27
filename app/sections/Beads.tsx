'use client';
import BeadCard from '../components/BeadCard';

const beads = [
  { name: 'Rudraksha', image: '/bead-rudraksha.jpg' },
  { name: 'Karungali', image: '/bead-karungali.jpg' },
  { name: 'Pyrite', image: '/bead-pyrite.jpg' },
  { name: 'Sandalwood', image: '/bead-sandalwood.jpg' },
  { name: 'Sphatik', image: '/bead-sphatik.jpg' },
  { name: 'Tiger Eye', image: '/bead-tigereye.jpg' },
  { name: 'Rose Quartz', image: '/bead-rosequartz.jpg' },
  { name: 'Amethyst', image: '/bead-amethyst.jpg' },
];

export default function Beads() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
        Shop By Bead/Stone
      </h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {beads.map((bead, index) => (
          <BeadCard key={index} image={bead.image} name={bead.name} />
        ))}
      </div>
    </section>
  );
}

