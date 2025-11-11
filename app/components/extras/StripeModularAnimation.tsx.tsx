
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StripeModularAnimation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full flex justify-center items-center py-20 bg-gradient-to-b from-[#f9fafc] to-[#f0f4f8] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:120px_120px]" />

      {/* SVG Connection lines */}
      <svg
        className="absolute w-[600px] h-[400px]"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Capital → Treasury */}
        <motion.path
          d="M400 160 C450 200, 500 200, 520 230"
          stroke="url(#gradLine1)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: mounted ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Capital → Issuing */}
        <motion.path
          d="M400 160 C430 260, 480 300, 520 310"
          stroke="url(#gradLine2)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: mounted ? 1 : 0 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Gradient defs */}
        <defs>
          <linearGradient id="gradLine1" x1="400" y1="160" x2="520" y2="230" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7B61FF" />
            <stop offset="1" stopColor="#00C2FF" />
          </linearGradient>
          <linearGradient id="gradLine2" x1="400" y1="160" x2="520" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4D8D" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Cards */}
      <div className="relative flex flex-col gap-12">
        {/* Capital */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-[100px] left-[300px]"
        >
          <Card title="Capital" color="from-[#00C2FF] to-[#1B6BFF]" />
        </motion.div>

        {/* Treasury */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute top-[200px] right-[50px]"
        >
          <Card title="Treasury" color="from-[#00FFB2] to-[#009BFF]" />
        </motion.div>

        {/* Issuing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-[60px] right-[50px]"
        >
          <Card title="Issuing" color="from-[#7B61FF] to-[#FF4D8D]" />
        </motion.div>
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  color: string;
}

function Card({ title, color }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center w-[120px] h-[80px] rounded-2xl shadow-lg bg-white border border-gray-200 relative"
    >
      <div
        className={`absolute inset-0 rounded-2xl opacity-40 blur-lg bg-gradient-to-br ${color}`}
      ></div>
      <span className="relative text-gray-900 font-semibold">{title}</span>
    </motion.div>
  );
}

