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

interface IconData {
  Icon: React.ElementType;
  yOffset: number;
}

export default function PalmPeConnections() {
  const leftIcons: IconData[] = [
    { Icon: Shield, yOffset: -120 },
    { Icon: Lock, yOffset: 0 },
    { Icon: Eye, yOffset: 120 },
  ];
  const rightIcons: IconData[] = [
    { Icon: Cloud, yOffset: -120 },
    { Icon: Smartphone, yOffset: 0 },
    { Icon: Globe, yOffset: 120 },
  ];

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0b0c10] overflow-hidden">
      {/* Center phone */}
      <div className="relative z-10 w-[280px] h-[550px] rounded-[32px] bg-[#0d0e12] shadow-[0_0_60px_rgba(0,255,255,0.3)] flex items-center justify-center">
        <Image
          src="/mobile.png"
          alt="Mobile"
          width={250}
          height={500}
          className="object-contain opacity-90"
        />
      </div>

      {/* Left lines + icons */}
      {leftIcons.map(({ Icon, yOffset }, idx) => (
        <div key={`left-${idx}`} className="absolute flex items-center left-0" style={{ top: `calc(50% + ${yOffset}px)` }}>
          {/* SVG curved line */}
          <svg width="200" height="80" viewBox="0 0 200 80" className="mr-4">
            <path
              d="M200 40 C140 40, 100 40, 0 40"
              fill="none"
              stroke="url(#gradLeft)"
              strokeWidth="2"
              strokeDasharray="6 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;18"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <defs>
              <linearGradient id="gradLeft" x1="200" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#111] backdrop-blur-md border border-cyan-500/30 flex justify-center items-center text-cyan-400 text-2xl shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            <Icon className="w-6 h-6" />
          </div>
        </div>
      ))}

      {/* Right lines + icons */}
      {rightIcons.map(({ Icon, yOffset }, idx) => (
        <div key={`right-${idx}`} className="absolute flex items-center right-0" style={{ top: `calc(50% + ${yOffset}px)` }}>
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#111] backdrop-blur-md border border-cyan-500/30 flex justify-center items-center text-cyan-400 text-2xl shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            <Icon className="w-6 h-6" />
          </div>
          {/* SVG curved line */}
          <svg width="200" height="80" viewBox="0 0 200 80" className="ml-4">
            <path
              d="M0 40 C60 40, 100 40, 200 40"
              fill="none"
              stroke="url(#gradRight)"
              strokeWidth="2"
              strokeDasharray="6 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;18"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <defs>
              <linearGradient id="gradRight" x1="0" y1="0" x2="200" y2="0">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#00ffff" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
