"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
const statsData = [
  { id: 1, value: 13_000_000, label: "Stores Nationwide.", img: "/Mask group (2).png" },
  { id: 2, value: 10_000_000, label: "Daily Commuters", img: "/Mask group (3).png" },
  { id: 3, value: 66_000, label: "Outlets", img: "/Mask group (4).png" },
  { id: 4, value: 1338, label: "Institutions", img: "/Mask group (5).png" },
  { id: 5, value: 138_000, label: "Offices", img: "/Mask group (6).png" },
];

// Format number: commas for normal, K+, M+ for large values
const formatNumber = (num: number): string => {
  if (num >= 1_000_000) return `${Math.floor(num / 1_000_000)}M+`;
  if (num >= 1_000) return `${num.toLocaleString()}+`;
  return num.toString();
};

const Million = () => {
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Start counting when section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  // Animate numbers
  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCounts(
        statsData.map((stat) => Math.floor(stat.value * progress))
      );

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [started]);

  return (
    <section className="bg-[#FAFDFF] md:py-25 py-12 px-4 text-center" ref={sectionRef}>
      {/* Heading */}
      <div className="max-w-3xl mx-auto space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          237 Million Daily Transactions.
          <br />
          <span className="text-[#0070F3] font-bold">1.4 Billion Hands Ready.</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          PalmPe is building the world’s first biometric UPI rail, ready to scale
          across India’s fastest-growing payment sectors.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-[#0070F3] text-white font-medium px-14 py-4 rounded-full hover:opacity-90 transition text-lg hover:bg-white hover:text-[#0070F3] border border-[#0070f3] shadow-[0px_4px_11px_0px_#1701AD1A] hover:shadow-[0px_8px_24px_0px_#1701AD1A]">
            See Expansion Plan →
          </button>
          
        </div>
      </div>

      {/* Stats */}
      <div
        className="max-w-7xl mx-auto bg-white shadow-[0px_4px_174px_0px_#0000001A]
      rounded-lg px-10 py-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {statsData.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex items-center justify-center space-x-3 md:border-r border-b md:border-b-0 md:py-0 py-10 border-dashed border-[#0070F3] pr-5 last:border-none`}
          >
            <Image
              src={stat.img}
              alt={stat.label}
              width={43}
              height={43}
              className="object-contain"
            />
            <div className="text-left">
              <span className="text-[#0070F3] text-3xl md:text-4xl font-bold">
                {formatNumber(counts[index])}
              </span>
              <p className="text-[#050505] text-sm md:text-lg">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Million;
