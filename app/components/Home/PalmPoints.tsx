// components/PalmPoints.tsx
"use client";
 
import { useState } from "react";
import Image from "next/image";
 
type Partner = {
  name: string;
  logo: string;
  bgColor?: string;
  colSpan?: string;
  rowSpan?: string;
};
 
const partners: Partner[] = [
  { name: "Ensa", logo: "/images/first.webp", bgColor: "bg-[#FFF98A]", colSpan: "md:col-span-2" },
  { name: "Butterfly", logo: "/images/second.webp" },
  { name: "CableOnda", logo: "/images/third.webp" },
  { name: "KrediYA", logo: "/images/krediya.webp" },
  { name: "Panapass", logo: "/images/pana.webp" },
  { name: "Zinli", logo: "/images/zinli.webp" },
  { name: "Check", logo: "/images/check.webp" },
  { name: "MetroBus", logo: "/images/metro.webp", bgColor: "bg-[#E0CDFF]", colSpan: "md:col-span-2" },
  { name: "Tigo", logo: "/images/tigo.webp", bgColor: "bg-[#C0E3D3]", rowSpan: "md:row-span-2" },
  { name: "Credicorp", logo: "/images/movil.webp", rowSpan: "md:row-span-2" },
  { name: "Bank", logo: "/images/credi.webp" },
  { name: "Adelantos", logo: "/images/tri.webp", rowSpan: "md:col-span-2", bgColor: "bg-[#22222D]" },
  { name: "Movil", logo: "/images/adel.webp" },
];
 
export default function PalmPoints() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
 
  return (
    <section className="w-full md:py-20 py-10 px-4 bg-white overflow-hidden">
      {/* Your existing JSX remains exactly the same */}
      <div className="text-center md:mb-20 mb-10 px-4 space-y-5">
        <h2>
          Palm Points <span className="text-[#5462E6]">Trust & Rewards</span>
        </h2>
        <p className="max-w-2xl mx-auto">
          Electricity, water, mobile recharge, or internet — Palmpe makes bill payments simple.
          Just a palm scan confirms your identity and completes the transaction instantly.
        </p>
      </div>
 
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 auto-rows-[140px] md:auto-rows-[220px] gap-x-3 gap-y-6 px-4">
        {partners.map((p: Partner, i: number) => (
          <div
            key={i}
            className={`partner-card relative overflow-hidden rounded-3xl flex items-center justify-center cursor-pointer
              ${p.bgColor || "bg-[#F7F7F7]"} ${p.colSpan || ""} ${p.rowSpan || ""}`}
            onMouseEnter={() => setActiveIndex(i)}
          >
            <div className={`partner-overlay ${activeIndex === i ? "active" : ""}`} />
 
            <Image
              src={p.logo}
              alt={p.name}
              width={140}
              height={60}
              sizes="140px"
              loading="lazy"
              className="object-contain max-w-full max-h-[60px] z-10 relative"
            />
          </div>
        ))}
      </div>
    </section>
  );
}