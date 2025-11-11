import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function PalmpeHero() {
  return (
    <>

      <div className=" relative md:h-[950px] flex items-center pt-30 md:pb-16 pb-10 mx-4 bg-[linear-gradient(258.39deg,#F9FAFC_6.87%,#FFFFFF_114.8%)]">
        <div className="container">
          <div className="rounded-3xl md:h-[791px] flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="w-full md:max-w-[582px]">
              <h1 className="sm:mb-4 mb-2.5">PalmPe isn’t just a <span className="text-[#0070F3]">payment method</span></h1>
              <p className="md:mb-12 mb-5">Every service connects through the PalmPe app — India’s first palm-powered SuperApp where you can recharge, insure, pay, and earn, all without pulling out a phone.</p>
              <p className="max-w-[490px]"><span className="text-[#0070F3] font-semibold">• Works even offline</span> transactions sync automatically when reconnected.</p>
            </div>
            <div className="w-full md:w-1/2 md:flex justify-end">
              <Image
                src="/Mask group.png"
                alt="Privacy-first"
                height={696}
                width={672}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}