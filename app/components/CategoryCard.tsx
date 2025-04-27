'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ name, image, slug }: { name: string; image: string; slug: string }) {
  return (
    <Link href={`/category/${slug}`}>
      <div className="flex flex-col items-center w-36 sm:w-40 flex-shrink-0">
        <div className="w-36 h-36 sm:w-40 sm:h-40 relative overflow-hidden border border-gray-200">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
}

