'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from '../ui/button';
import Image from 'next/image';
interface POSDevice {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  badgeText?: string;
  badgeType: 'blue' | 'white';
}

const devices: POSDevice[] = [
  {
    id: 1,
    name: 'Palm Pico',
    description: 'Compact, versatile, fast.',
    imageSrc: '/images/Rectangle 4509 (1).png',
    badgeText: 'Instant POS',
    badgeType: 'blue',
  },
  {
    id: 2,
    name: 'Terminal X',
    description: 'Flagship all-in-one POS.',
    imageSrc: '/images/Rectangle 4509 (2).png',
    badgeText: undefined,
    badgeType: 'white',
  },
  {
    id: 3,
    name: 'Palm Go',
    description: 'Seamless self-registration.',
    imageSrc: '/images/Rectangle 4509 (3).png',
    badgeText: 'Universities & Corporates',
    badgeType: 'blue',
  },
  {
    id: 4,
    name: 'Palm Pico',
    description: 'Compact, versatile, fast.',
    imageSrc: '/images/Rectangle 4509 (1).png',
    badgeText: 'Instant POS',
    badgeType: 'blue',
  },
  {
    id: 5,
    name: 'Terminal X',
    description: 'Flagship all-in-one POS.',
    imageSrc: '/images/Rectangle 4509 (2).png',
    badgeText: undefined,
    badgeType: 'white',
  },
  {
    id: 6,
    name: 'Palm Go',
    description: 'Seamless self-registration.',
    imageSrc: '/images/Rectangle 4509 (3).png',
    badgeText: 'Universities & Corporates',
    badgeType: 'blue',
  },
];

const Badge: React.FC<{ text: string; type: 'blue' | 'white' }> = ({ text, type }) => {
  const baseClasses = 'text-base font-normal px-3 py-1 rounded-full';
  const colorClasses =
    type === 'blue'
      ? 'bg-[#D7E9FF] text-[#0070F3]'
      : 'bg-[#D7E9FF] text-[#0070F3]';
  return <span className={`${baseClasses} ${colorClasses}`}>{text}</span>;
};

const DeviceCard: React.FC<{ device: POSDevice }> = ({ device }) => {
  return (
    <div className={`flex flex-col h-full rounded-2xl border bg-[#FFFFFF]/10 border-gray-100 gap-7`}>
      <div className="relative flex justify-center items-center h-100">
        {/* <img
          src={device.imageSrc}
          alt={device.name}
          className="object-cover max-h-full w-full"
        /> */}
        <Image
         src={device.imageSrc}
          alt={device.name}
          className="object-cover max-h-full w-full"
          width={461}
          height={573}
        />
      </div>

      <div className="p-4 pt-0 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[30px] font-bold">{device.name}</h3>
          {device.badgeText && <Badge text={device.badgeText} type={device.badgeType} />}
        </div>
        <p className="text-lg mb-4 flex-grow">{device.description}</p>
        <div className=" rounded-full border border-[#0070F3] inline-block mt-3 ">
          <a
            href="#"
            className="group inline-flex justify-center items-center gap-4 text-lg w-full py-4 rounded-full font-medium  transition-all duration-300"
          >
            <Button className="text-[#0070F3]">
              View Now
            </Button>

            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
              <path d="M0.161143 9.12599C-0.0419117 9.31314 -0.0548083 9.62946 0.132337 9.83251C0.319483 10.0356 0.635803 10.0485 0.838857 9.86131L0.5 9.49365L0.161143 9.12599ZM10.5588 0.703733C10.5701 0.42782 10.3555 0.195029 10.0796 0.18378L5.58333 0.000463752C5.30742 -0.0107856 5.07463 0.203767 5.06338 0.47968C5.05213 0.755593 5.26668 0.988384 5.54259 0.999634L9.53927 1.16258L9.37633 5.15926C9.36508 5.43517 9.57963 5.66797 9.85554 5.67921C10.1315 5.69046 10.3642 5.47591 10.3755 5.2L10.5588 0.703733ZM0.5 9.49365L0.838857 9.86131L10.3981 1.05103L10.0592 0.683365L9.72037 0.315702L0.161143 9.12599L0.5 9.49365Z" fill="#0070F3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const AutoSlidingPOSDevices: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FAFDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-16">
          <h2>
            Designed for <span className="text-[#0070F3]">everyday India</span>
            <br />
            Built for tomorrow's economy.
          </h2>
          <p className="mt-4 text-lg max-w-lg">
            One core palm module powers six devices—from metros to malls, from Kiranas to kiosks.
          </p>

          <div className="flex justify-between items-center mt-8">
            <div className="rounded-full border border-[#0070F3] ">
              <a
                href="#"
                className="group inline-flex justify-center items-center gap-4 text-lg w-full px-16 py-4 rounded-full font-medium "
              >
                <span className=" text-[#0070F3]">
                  Explore Devices
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                  <path d="M0.161143 9.12599C-0.0419117 9.31314 -0.0548083 9.62946 0.132337 9.83251C0.319483 10.0356 0.635803 10.0485 0.838857 9.86131L0.5 9.49365L0.161143 9.12599ZM10.5588 0.703733C10.5701 0.42782 10.3555 0.195029 10.0796 0.18378L5.58333 0.000463752C5.30742 -0.0107856 5.07463 0.203767 5.06338 0.47968C5.05213 0.755593 5.26668 0.988384 5.54259 0.999634L9.53927 1.16258L9.37633 5.15926C9.36508 5.43517 9.57963 5.66797 9.85554 5.67921C10.1315 5.69046 10.3642 5.47591 10.3755 5.2L10.5588 0.703733ZM0.5 9.49365L0.838857 9.86131L10.3981 1.05103L10.0592 0.683365L9.72037 0.315702L0.161143 9.12599L0.5 9.49365Z" fill="#0070F3" />
                </svg>
              </a>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:flex space-x-4">
              <div className="swiper-button-prev-custom flex justify-center items-center w-12 h-12 border border-gray-300 rounded-full text-gray-600 hover:border-gray-400 cursor-pointer transition-all duration-300 hover:bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>

              <div className="swiper-button-next-custom flex justify-center items-center w-12 h-12 border border-gray-300 rounded-full text-gray-600 hover:border-gray-400 cursor-pointer transition-all duration-300 hover:bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            direction="horizontal"
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="h-full pb-10"
          >
            {devices.map((device, index) => (
              <SwiperSlide key={device.id + '-' + index} className="h-auto">
                <DeviceCard device={device} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute w-full bottom-0 left-0 flex justify-center">
            <div className="swiper-pagination-custom flex space-x-2"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom {
          position: absolute;
          display: flex;
          justify-content: center;
          bottom: -55px !important;
        }
        .swiper-pagination-bullet-custom {
          width: 37px;
          height: 8px;
          background: #dfe2e3;
          border-radius: 9999px;
          opacity: 1;
          margin: 0 0.25rem;
          transition: background-color 0.3s;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active-custom {
          background: #0070f3;
        }
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default AutoSlidingPOSDevices;
