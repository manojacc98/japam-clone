'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ name, image, slug }: { name: string; image: string; slug: string }) {
  return (
    <Link href={`/category/${slug}`} className="flex flex-col items-center flex-shrink-0 w-32 sm:w-36">
      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden relative bg-white border shadow-sm">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-2 text-center text-sm sm:text-base font-semibold text-gray-800">
        {name}
      </div>
    </Link>
  );
}
