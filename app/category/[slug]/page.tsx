import { Metadata } from 'next';
import CategoryClient from './CategoryClient';

// --- SEO ---
export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const formattedSlug = params.slug.replace(/-/g, ' ');

  return {
    title: `${formattedSlug} - Explore Category | Japam Spiritual Store`,
    description: `Find best products under ${formattedSlug} category at Japam.`,
    openGraph: {
      title: `${formattedSlug} - Explore Category | Japam`,
      description: `Shop authentic ${formattedSlug} products.`,
      type: 'website', // ✅ use type: website
    },
  };
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <CategoryClient slug={params.slug} />;
}



