'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const slides = [
  {
    src: '/banner1.jpg',
    alt: 'Every Bead Tells A Story',
    title: 'Every Bead Tells A Story',
    subtitle: 'Experience Japam’s exclusive range of high quality spiritual wearables',
    button: 'SHOP NOW',
    link: '/collections/all',
  },
  {
    src: '/banner2.jpg',
  
    alt: 'Authentic Rudraksha Bracelets',
    title: 'Authentic Rudraksha Bracelets',
    subtitle: 'Genuine 5 Mukhi Rudraksha beads in everyday wearable designs',
    button: 'SHOP NOW',
    link: '/collections/bracelets',
  },
  {
    src: '/banner3.jpg',
    alt: 'Karungali - Natural Ebony Wood',
    title: 'Karungali - Natural Ebony Wood',
    subtitle: 'Sacred Karungali Beads in everyday wearable designs.',
    button: 'EXPLORE COLLECTION',
    link: '/collections/karungali',
  },
  {
    src: '/banner4.jpg',
    alt: 'His & Hers Rudraksha',
    title: 'His & Hers Rudraksha',
    subtitle: 'Specially curated sets of our bestselling Rudraksha bracelets',
    button: 'SHOP NOW',
    link: '/collections/rudraksha',
  },
  {
    src: '/banner5.jpg',
    alt: 'Exclusive Flash Sale Alert',
    title: 'Exclusive Flash Sale Alert',
    subtitle: 'Explore limited edition sale of premium products starting at just ₹199.',
    button: 'ORDER NOW - LIMITED STOCK',
    link: '/collections/flash-sale',
    
    // alt: 'Every Bead Tells A Story',
    // title: 'Every Bead Tells A Story',
    // subtitle: 'Experience Japam’s exclusive range of high quality spiritual wearables',
    // button: 'SHOP NOW',
    // link: '/collections/all',
  },
];

export default function HeroBanner() {
  return (
    <div className="w-full h-[300px] md:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[600px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
              />

              {/* Motion overlay applies to each slide */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white bg-black/20"
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm md:text-lg mb-4">{slide.subtitle}</p>
                <Link
                  href={slide.link}
                  className="w-max px-5 py-2 border border-white hover:bg-white hover:text-black transition rounded"
                >
                  {slide.button}
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
