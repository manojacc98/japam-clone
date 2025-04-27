'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProductDetailGallery from './ProductDetailGallery';
import Categories from '@/app/sections/Categories';
import FooterHighlights from '@/app/components/FooterHighlights';
import Footer from '@/app/components/Footer';

interface Product {
  slug: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
}

export default function ProductClient({ product }: { product: Product }) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <main className="w-full">
      {/* Top Section: Product Images + Details */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8 text-black">

        {/* Left Side - Product Image Gallery */}
        <div className="w-full lg:w-1/2">
          <ProductDetailGallery images={product.images} title={product.title} />
        </div>

        {/* Right Side - Product Info and Details */}
        <div className="w-full lg:w-1/2 space-y-8">

          {/* Product Basic Details */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">{product.discount}</div>
              <h1 className="text-2xl font-bold text-black">{product.title}</h1>
            </div>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (<FaStar key={i} className="text-yellow-400" />))}
              <span className="text-sm text-gray-700">({product.reviews} reviews)</span>
            </div>

            <div>
              <span className="text-3xl font-bold text-red-600 mr-2">₹{product.price}</span>
              <span className="text-gray-700 line-through">₹{product.originalPrice}</span>
            </div>

            <p className="text-green-700">GST included. Free delivery over ₹299</p>

            <div className="bg-green-100 p-3 rounded-md text-green-800">
              Use code <b>NAMASTE</b> & get Free 5 Mukhi Rudraksha worth ₹399
            </div>

            <div className="flex flex-col gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md">Order Now - Cash On Delivery</button>
              <button className="bg-black hover:bg-gray-800 text-white py-3 rounded-md">Pay Online & Save ₹20</button>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="bg-blue-50 p-6 rounded-lg text-black">
            <h2 className="text-lg font-bold">NEED HELP?</h2>
            <p>Mon to Sat 10 AM to 5 PM</p>
            <div className="mt-3 space-y-2">
              <a className="underline block" href="#">📱 Order on WhatsApp</a>
              <a className="underline block" href="#">💬 Instant Help: Chat With Sevak</a>
              <a className="underline block" href="mailto:support@japam.in">✉️ Email: support@japam.in</a>
            </div>
          </div>

          {/* Description Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-800">{product.description}</p>
          </section>

          {/* Product Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Features</h2>
            <div className="bg-gray-100 h-60 flex items-center justify-center text-gray-700">Image coming soon</div>
          </section>

          {/* Why Japam */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Japam?</h2>
            <div className="bg-gray-100 h-60 flex items-center justify-center text-gray-700">Image coming soon</div>
          </section>

          {/* FITTING, WORKMANSHIP, CARE INSTRUCTIONS */}
          <div className="space-y-4 text-black">
            <div>
              <h3 className="font-bold text-gray-900">FITTING:</h3>
              <p className="text-gray-800">This bracelet has a soft elastic band which gives a comfortable fit on most wrist sizes. Ideal for daily wear.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">WORKMANSHIP:</h3>
              <p className="text-gray-800">Handcrafted with care, undergoes strict quality checks to ensure durability and excellence.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">CARE INSTRUCTIONS:</h3>
              <p className="text-gray-800">Keep your bracelet away from water, soaps, perfumes, and harsh chemicals. Store separately.</p>
            </div>
          </div>

          {/* Accordions Section */}
          <div className="space-y-4 mt-8 text-black">
            {['Got Questions?', 'Delivery and Shipping', 'Returns & Replacement'].map((section, idx) => (
              <div key={idx}>
                <button onClick={() => toggleAccordion(section)} className="flex justify-between w-full text-left font-bold text-gray-900 py-3 border-b">
                  {section}
                  {openAccordion === section ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openAccordion === section && (
                  <div className="p-4 bg-gray-100 text-gray-800">
                    {section === 'Got Questions?' && (
                      <p>We try and resolve all queries within a day. Contact us for quick help.</p>
                    )}
                    {section === 'Delivery and Shipping' && (
                      <p>We offer free delivery over ₹299. Prepaid orders are shipped faster!</p>
                    )}
                    {section === 'Returns & Replacement' && (
                      <p>6 Months Replacement Guarantee available. 1-day return policy!</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Up to Here: Dark Text is Done ✅ */}

      {/* Made In India Red Section (this is after) */}
      <div className="w-full bg-red-600 py-16 text-white text-center space-y-4">
        <h2 className="text-3xl font-bold">Made In India</h2>
        <p className="max-w-2xl mx-auto">All our jewellery is handmade by Indian craftsmen and women — largely from villages. In this way, we are able to play our part in supporting and growing the local Indian economy.</p>
      </div>

      {/* Categories / Shop Our Collection */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <Categories />
      </div>

      {/* Footer Highlights and Footer */}
      <FooterHighlights />
      <Footer />

    </main>
  );
}



