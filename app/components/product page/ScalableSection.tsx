'use client';
import React from 'react';

const ScalableSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-end bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{ backgroundImage: "url('/Group 1000005197.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="max-w-7xl mx-auto space-y-6 z-20 relative">
        <div className="px-4 py-4 bg-[#0070F3] rounded inline-block mb-6 text-xl text-white">
          The backbone for the biometric payment revolution.
        </div>
        <h2 className="text-4xl lg:text-7xl font-semibold text-white tracking-wide leading-wide">
          Scalable. Secure. Ready for the real world.
        </h2>
        <p className="text-white">
          PalmPe isn’t an idea — it’s a network built for real-world adoption. With over 1.3 crore retail touchpoints,
          10 lakh+ daily metro users, and 30 crore monthly UPI transactions, PalmPe is ready to serve the next billion.
        </p>
      </div>
    </section>
  );
};

export default ScalableSection;
