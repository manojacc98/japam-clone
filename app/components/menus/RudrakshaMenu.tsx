'use client';

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { bestSellersProducts } from "../../constants/bestSellersProducts";

export default function RudrakshaMenu() {
  const bracelets = bestSellersProducts.filter((p) =>
    p.slug.includes("bracelet")
  );

  return (
    <div className="flex bg-white rounded-md shadow-lg border border-gray-200 w-full max-w-7xl mx-auto p-6">
      
      {/* LEFT COLUMN */}
      <div className="w-1/4 flex flex-col gap-4 pr-6 border-r border-gray-200">
        {/* Menu items */}
        {[
          { href: "/category/rudraksha-bracelets", label: "Rudraksha Bracelets", img: bracelets[0]?.thumbnail || "/placeholder.jpg" },
          { href: "/category/rudraksha-malas", label: "Rudraksha Malas", img: "/placeholder-mala.jpg" },
          { href: "/category/nepali-rudraksha", label: "Nepali Rudraksha", img: "/placeholder-nepali.jpg" },
        ].map((item, idx) => (
          <Link href={item.href} key={idx} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
            <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
              <Image
                src={item.img}
                alt={item.label}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-800">{item.label}</span>
            <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
          </Link>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-3/4 grid grid-cols-4 gap-6 pl-6">
        {bracelets.map((item) => (
          <Link href={`/product/${item.slug}`} key={item.slug} className="group">
            <div className="relative w-full aspect-square bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={item.thumbnail || item.image || "/placeholder.jpg"}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <p className="mt-2 text-xs font-medium text-center text-gray-700 group-hover:underline">
              {item.title}
            </p>
          </Link>
        ))}
      </div>

    </div>
  );
}
