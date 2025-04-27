'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProductDetailGalleryProps {
  images: string[];
  title: string;
}

export default function ProductDetailGallery({ images, title }: ProductDetailGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  if (!images || images.length === 0) {
    return <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-gray-500">No Images Available</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full aspect-square overflow-hidden group">
      {/* Image */}
      <div
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
        className="relative w-full h-full overflow-hidden"
      >
        <Image
          src={images[currentIndex]}
          alt={title}
          fill
          className={`object-cover transition-transform duration-300 ${zoomed ? 'scale-125' : 'scale-100'}`}
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
