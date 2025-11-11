'use client';
 
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
 
const BillSection = () => {
  const features = [
    {
      title: 'Pay electricity, water, gas, internet, and mobile bills.',
      buttonText: 'Get Started',
      bgColor: 'bg-[#C0E3D3]',
      image: '/images/electrcity.webp',
      layout: 'row', // first block: horizontal layout
    },
    {
      title: 'One biometric tap replaces multiple logins and OTPs.',
      buttonText: 'Get Started',
      bgColor: 'bg-[#8877FF59]',
      image: '/images/PHONE.webp',
      layout: 'column',
    },
    {
      title: 'Auto-reminders for due bills inside the Palmpe app.',
      buttonText: 'Get Started',
      bgColor: 'bg-[#F8C601]',
      image: '/images/reminder.webp',
      layout: 'column',
      backgroundImage: '/images/reminder-bg.webp',
    },
  ];
 
  return (
    <section className="w-full md:py-20 py-12 px-4 bg-white">
      <div className='space-y-4 mb-10 m-auto max-w-2xl'>
        <h2 className='text-center'>
          Utility Payments <br className='md:block hidden' /> Everyday <span className='text-[#5462E6]'>Bills, One Tap</span>
        </h2>
        <p className='text-center'>Electricity, water, mobile recharge, or internet — Palmpe makes bill payments simple. Just a palm scan confirms your identity and completes the transaction instantly.</p>
      </div>
      <div className="container mx-auto space-y-6">
        {/* Top Section: Full Width with horizontal layout */}
        <div className={`rounded-4xl md:p-10 p-5 flex flex-col md:flex-row justify-between items-start gap-6 ${features[0].bgColor}`}>
          <div className="w-full md:w-1/2 space-y-8">
            <h3 className="text-2xl md:text-4xl">{features[0].title}</h3>
            <Button 
              variant="secondary"
              size="lg"
            >
              {features[0].buttonText} →
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={features[0].image}
              alt={features[0].title}
              width={680}
              height={565}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
 
        {/* Bottom Section: Two side-by-side blocks */}
        <div className="grid md:grid-cols-2 gap-5">
          {features.slice(1).map((feature, index) => (
            <div key={index} className={`rounded-4xl md:p-10 p-5 md:pb-0 flex flex-col justify-between ${feature.bgColor}`}>
              <div className="space-y-8">
                <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                <Button 
                  variant="secondary"
                  size="lg"
                >
                  {feature.buttonText} →
                </Button>
              </div>
              <div className="mt-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default BillSection;