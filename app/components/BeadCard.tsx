'use client';

import Image from 'next/image';

export default function BeadCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center text-center w-24 md:w-28">
      <div className="w-24 h-24 md:w-28 md:h-28">
        <Image
          src={image}
          alt={name}
          width={112}
          height={112}
          className="object-contain w-full h-full"
        />
      </div>
      {/* <p className="text-sm italic mt-2 text-[#1e1e1e]">{name}</p> */}
    </div>
  );
}

