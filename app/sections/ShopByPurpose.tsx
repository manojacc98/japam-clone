'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const purposes = [
  { name: 'wealth', icon: '/shop_by_purpose/wealthicon.jpg' },
  { name: 'health', icon: '/shop_by_purpose/health_icon.jpg' },
  { name: 'love', icon: '/shop_by_purpose/love_icon.jpg' },
  { name: 'luck', icon: '/shop_by_purpose/luck_icon.jpg' },
  { name: 'protection', icon: '/shop_by_purpose/protection_icon.jpg' },
  { name: 'peace', icon: '/shop_by_purpose/peace_icon.jpg' },
  { name: 'courage', icon: '/shop_by_purpose/courage_icon.jpg' },
  { name: 'balance', icon: '/shop_by_purpose/balance_icon.jpg' },
];

const ShopByPurpose = () => {
  const router = useRouter();

  return (
    <div className="bg-[#262232] py-10 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Shop By Purpose</h2>
      <div className="flex justify-center flex-wrap gap-4 max-w-6xl mx-auto">
        {purposes.map((item) => (
          <div
            key={item.name}
            className="relative w-[120px] h-[120px] cursor-pointer group"
            onClick={() => router.push(`/category/${item.name}`)}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={120}
              height={120}
              className="object-cover w-full h-full rounded-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-white text-black rounded-full p-2">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByPurpose;
