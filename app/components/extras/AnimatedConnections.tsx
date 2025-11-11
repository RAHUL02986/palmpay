"use client";
import React from "react";
import Image from "next/image";
import {
  Shield,
  Lock,
  Eye,
  Cloud,
  Smartphone,
  Globe,
} from "lucide-react";

export default function AnimatedConnections() {
  const iconsLeft = [<Shield key="1" />, <Lock key="2" />, <Eye key="3" />];
  const iconsRight = [<Cloud key="4" />, <Smartphone key="5" />, <Globe key="6" />];

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0a0b0f] overflow-hidden text-white">
      {/* Center Mobile Image */}
      <div className="relative z-10">
        <div className="relative w-[280px] h-[550px] rounded-[32px] bg-[#0d0e12] shadow-[0_0_100px_rgba(0,255,255,0.3)] overflow-hidden flex justify-center items-center">
          <Image
            src="/mobile.png"
            alt="Mobile"
            width={250}
            height={500}
            className="object-contain opacity-90"
          />
        </div>
      </div>

      {/* LEFT SIDE ICONS */}
      <div className="absolute left-[60px] flex flex-col justify-between h-[60%]">
        {iconsLeft.map((icon, index) => (
          <div key={`left-${index}`} className="relative flex items-center">
            {/* Animated glowing line */}
            <div className="w-[160px] h-[2px] mr-3 bg-gradient-to-l from-transparent via-cyan-400 to-blue-500 animate-drawLineGlow rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
            <div className="w-12 h-12 rounded-xl bg-[#111] backdrop-blur border border-cyan-400/50 flex justify-center items-center text-cyan-400 text-2xl shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              {icon}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="absolute right-[60px] flex flex-col justify-between h-[60%]">
        {iconsRight.map((icon, index) => (
          <div key={`right-${index}`} className="relative flex items-center">
            <div className="w-12 h-12 rounded-xl bg-[#111] backdrop-blur border border-cyan-400/50 flex justify-center items-center text-cyan-400 text-2xl shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              {icon}
            </div>
            {/* Animated glowing line */}
            <div className="w-[160px] h-[2px] ml-3 bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 animate-drawLineGlowReverse rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
