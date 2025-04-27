'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  slug: string;
  title: string;
  image: string;
  hoverImage: string;
  price: number;
  originalPrice: number;
  discount: string;
}

export default function ProductCard({
  slug,
  title,
  image,
  hoverImage,
  price,
  originalPrice,
  discount,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/product/${slug}`} className="group block w-full max-w-[250px]">
      <div
        className="relative w-full aspect-square overflow-hidden rounded-lg shadow hover:shadow-lg transition-all duration-300 bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? hoverImage || image : image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {discount}
        </div>
      </div>

      <h3 className="mt-2 text-sm font-semibold text-gray-800 leading-tight">{title}</h3>

      <div className="flex items-center gap-2 mt-1">
        <span className="font-bold text-gray-900">₹{price}</span>
        <span className="line-through text-gray-400 text-sm">₹{originalPrice}</span>
      </div>
    </Link>
  );
}



