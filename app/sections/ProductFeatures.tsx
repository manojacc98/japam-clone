'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const features = [
  {
    id: 1,
    title: 'BTR Card',
    description: 'We send samples for lab testing and provide Batch Test Reports',
    top: '65%',
    left: '60%',
  },
  {
    id: 2,
    title: 'Premium Packing',
    description: 'Delivered with beautifully crafted packaging',
    top: '55%',
    left: '30%',
  },
];

const ProductFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const wrapperRef = useRef(null);

  //  Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setSelectedFeature(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-[#f2f2f2] py-10 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
        Lab Tested Rudraksha
      </h2>
      <p className="text-gray-700 mb-6 max-w-2xl">
        We follow our proprietary system of BTR (Batch Test Reports) to ensure you always get original and genuine Rudraksha.
      </p>

      <div className="relative w-full max-w-6xl mx-auto" ref={wrapperRef}>
        <Image
          src="/product_futures.jpg"
          alt="Product Features"
          width={1200}
          height={800}
          className="rounded-lg object-cover w-full"
        />

        {features.map((feature) => (
          <button
            key={feature.id}
            className="absolute w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg"
            style={{ top: feature.top, left: feature.left }}
            onClick={() =>
              setSelectedFeature(selectedFeature === feature.id ? null : feature.id)
            }
          >
            {selectedFeature === feature.id ? '×' : '+'}
          </button>
        ))}

        {features.map(
          (feature) =>
            selectedFeature === feature.id && (
              <div
                key={feature.id}
                className="absolute bg-white shadow-lg rounded-lg p-4 max-w-sm"
                style={{
                  top: feature.top,
                  left: feature.left,
                  transform: 'translateX(20px)',
                  zIndex: 10,
                }}
              >
                <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default ProductFeatures;

