'use client';

import { useEffect, useState } from 'react';

const messages = [
  '🌿 Introducing Japam Energy Stones — Explore Now!',
  '🚚 Free Shipping on Orders Above ₹999!',
  '🛍️ Authentic Spiritual Products from Japam!',
];

export default function Announcement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[black] text-white py-2 text-sm font-medium overflow-hidden h-[35px] flex items-center">
      <div
        key={index}
        className="animate-slide whitespace-nowrap px-4"
      >
        {messages[index]}
      </div>

      <style jsx>{`
        .animate-slide {
          animation: slide-in 0.5s ease-in-out;
        }

        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}

