'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Note: Pagination and Autoplay are required modules for this setup
const { Pagination, Autoplay } = require('swiper/modules');

import 'swiper/css';
import 'swiper/css/pagination';

// --- CardData Interface and Icon Definitions (Unchanged) ---
interface CardData {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; 
}

const MerchantIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5m0 0v-7.5m0 7.5h7.5m-7.5 0h-7.5M12 18H5.5A2.5 2.5 0 0 1 3 15.5V6a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 6v9.5a2.5 2.5 0 0 1-2.5 2.5H12Z" />
  </svg>
);

const DeveloperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5M10.5 6h7.5M10.5 6v7.5M3.375 7.5h5.25m5.25 0h.008v.008h-.008zM3.375 12h5.25m5.25 0h.008v.008h-.008zM3.375 16.5h5.25m5.25 0h.008v.008h-.008z" />
  </svg>
);

const EnterpriseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-10.5m-5.25 15l10.5-10.5M10.5 13.5h.008v.008h-.008z" />
  </svg>
);

const cardData: CardData[] = [
  {
    title: 'For Merchants',
    description: 'Accept palm, QR, and NFC payments instantly.',
    Icon: MerchantIcon,
  },
  {
    title: 'For Developers',
    description: 'Integrate our SDK or hardware module.',
    Icon: DeveloperIcon,
  },
  {
    title: 'For Enterprises',
    description: 'Partner with PalmPe to scale across India.',
    Icon: EnterpriseIcon,
  },
];


const Card: React.FC<{ data: CardData }> = ({ data }) => (
  <div className="flex flex-col md:p-10 p-5 h-full bg-white rounded-xl border-t-7 border-blue-500 text-left ">
    <div className="flex-shrink-0 mb-4 flex justify-end">
      <div className="p-3 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
        <data.Icon className="w-6 h-6 text-blue-500" />
      </div>
    </div>
    <h3 className="md:text-4xl text-xl font-semibold text-gray-800 mb-2">
      {data.title}
    </h3>
    <p className="text-gray-600 text-lg">
      {data.description}
    </p>
  </div>
);
// --- End Card/Icon Definitions ---


const PalmPeSlider: React.FC = () => {
  return (
    <div className="w-full lg:py-40 py-10 px-2 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="md:text-5xl text-3xl font-bold text-center text-gray-900 md:mb-16 mb-7">
         Start the palm-powered revolution today
        </h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          dir="rtl"
          loop={true}           
          autoplay={{ 
            delay: 3000, 
            disableOnInteraction: false 
          }}         

          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
          }}
          
          slidesPerView={1}
          spaceBetween={20}
          pagination={false} 
          
          className="mySwiper pb-12" 
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="h-auto">
              <Card data={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PalmPeSlider;