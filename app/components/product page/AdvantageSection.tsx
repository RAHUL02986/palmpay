'use client';

import React, { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface AdvantageCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, description, imageSrc }) => (
  <div className="flex flex-col md:flex-row items-center bg-white rounded-xl md:p-8 p-4 space-y-8 md:space-y-0 md:space-x-12 shadow-lg">
    <div className="md:w-6/12">
      <Image
        src={imageSrc}
        alt={`Illustration for ${title}`}
        className="rounded-lg w-full h-auto object-cover"
        width={510}
        height={318}
      />
    </div>
    <div className="md:w-6/12 text-center md:text-left md:space-y-3 space-y-1">
      <h3 className="md:text-5xl text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-lg text-[#000000] font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

const AdvantageSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const advantages = [
    {
      title: 'Offline Ready',
      description:
        'Transactions process even without internet - sync automatically when connected. Our powerful local storage ensures zero disruption.',
      imageSrc: '/Rectangle 4488.png',
    },
    {
      title: 'Secure Payments',
      description:
        'Industry-leading, AES-256 encryption keeps all your transactions safe and sound, complying with global security standards.',
      imageSrc: '/Rectangle 4488.png',
    },
    {
      title: 'Seamless Integration',
      description:
        'Easily connect with your existing systems and workflows via our open API, enabling smooth data flow and centralized management.',
      imageSrc: '/Rectangle 4488.png',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-7xl font-semibold text-[#00000033] tracking-wide leading-wide">
          The Palm Pe Advantage <br />
          <span className="font-extrabold text-[#0070F3]">trusted, scalable,</span> and built <br />
          for tomorrow
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          className="relative"
          style={{
            '--swiper-pagination-color': '#0070F3',
            '--swiper-pagination-bullet-inactive-color': '#E5E7EB',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-width': '40px',
            '--swiper-pagination-bullet-height': '8px',
            '--swiper-pagination-bullet-border-radius': '4px',
            '--swiper-pagination-bottom': '0px',
            '--swiper-navigation-size': '24px',
          } as React.CSSProperties}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            {advantages.map((advantage, index) => (
              <SwiperSlide key={index}>
                <div className="pb-12 pt-4 px-2 sm:px-4">
                  <AdvantageCard {...advantage} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 pointer-events-none">
          <button
            onClick={handlePrev}
            className="p-3 bg-[#ffffff] border border-[#00000038] rounded-full shadow-lg transition duration-300 md:-ml-10 pointer-events-auto disabled:opacity-50 hover:border-[#0070F3] hover:shadow-xl"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="md:w-5 w-3 md:h-5 h-3 text-black" />
          </button>

          <button
            onClick={handleNext}
            className="p-3 bg-[#ffffff] border border-[#00000038] rounded-full shadow-lg transition duration-300 md:-mr-10 pointer-events-auto disabled:opacity-50 hover:border-[#0070F3] hover:shadow-xl"
            aria-label="Next slide"
          >
            <FaChevronRight className="md:w-5 w-3 md:h-5 h-3 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
