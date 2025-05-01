

import { bestSellersProducts } from '@/app/constants/bestSellersProducts';
import { trendingProducts } from '@/app/constants/trendingProducts';
import { energyStoneProducts } from '@/app/constants/energyStoneProducts';
import { singleRudrakshaProducts } from '@/app/constants/singleRudrakshaProducts';

import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

//  1. Combine all product arrays into one big array
const allProducts = [
  ...bestSellersProducts,
  ...trendingProducts,
  ...energyStoneProducts,
  ...singleRudrakshaProducts,
];

interface PageProps {
  params: {
    slug: string;
  };
}

//  2. Make function async
export default async function ProductPage({ params }: PageProps) {
  const { slug } = params; 

  // 3. Find product by slug
  const product = allProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound(); //  If not found, show 404 page
  }

  //  4. Render the product client
  return (
    <div className="min-h-screen">
      <ProductClient product={product} />
    </div>
  );
}


