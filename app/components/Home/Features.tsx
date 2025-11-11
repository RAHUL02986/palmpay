// components/Features.tsx
import Image from 'next/image';

interface Feature {
  icon: string;
  title: string;
}

export default function Features() {
  return (
    <section className="sm:py-17 pt-10 md:pt-16  px-3 xl:mx-0 sm:mx-5 bg-[#FAFDFF]">
      <div className="container">
        <div className="flex flex-col items-center justify-center w-full bg-[#FFFFFF] sm:py-7.5 py-5 rounded-full border border-[#0070F3]">
          <h2 className="md:mb-3 mb-2 text-center md:text-4xl text-2xl">
            Palmpe™ — Palmpay™
          </h2>
          <p className='text-center'>
            Patent-pending palm biometrics & liveness detection.
          </p>
        </div>
      </div>
    </section>
  );
}