"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface TrendingCardProps {
  title: string;
  image: string;
  hoverImage: string;
  price: number;
  originalPrice: number;
  discount: number;
  slug: string;
}

export default function TrendingCard({
  title,
  image,
  hoverImage,
  price,
  originalPrice,
  discount,
  slug,
}: TrendingCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/product/${slug}`} className="group relative w-[220px] shrink-0">
      <div
        className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-72 w-full">
          <Image
            src={hovered ? hoverImage : image}
            alt={title || "Trending Product"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
          />

          {/* Discount badge */}
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
              {discount}% off
            </div>
          )}

          {/* New Arrival badge */}
          <div className="absolute top-10 left-2 bg-yellow-300 text-black text-xs px-2 py-1 rounded shadow">
            New Arrival
          </div>

          {/* Cart Button */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition">
            <button className="bg-black hover:bg-red-600 text-white p-2 rounded-full">
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Title */}
      <h4 className="mt-2 text-sm font-semibold text-gray-800 leading-tight text-center">
        {title}
      </h4>

      {/* Pricing */}
      <div className="text-sm text-center">
        <span className="text-gray-900 font-semibold">₹ {price}</span>
        {originalPrice > price && (
          <span className="text-gray-500 line-through ml-2">₹ {originalPrice}</span>
        )}
      </div>
    </Link>
  );
}
