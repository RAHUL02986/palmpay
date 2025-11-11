"use client";
 
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
 
export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState<"left" | "right">("left");
 
  useEffect(() => {
    let lastScrollY = window.scrollY;
 
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDir("left"); // Scrolling down → move left
      } else {
        setScrollDir("right"); // Scrolling up → move right
      }
      lastScrollY = window.scrollY;
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <footer className="relative overflow-hidden bg-[#0A0F1A] text-white md:pt-12 pt-5 pb-5">
      {/* Scrolling Marquee Text */}
      <div
        ref={marqueeRef}
        className={`whitespace-nowrap md:text-[168px] text-[42px] font-semibold text-white flex gap-8 ${
          scrollDir === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        <span className="text-white">Palmpay. Palmpay. Palmpay.</span>
        <span className="text-white">Palmpay. Palmpay. Palmpay.</span>
      </div>
 
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto mt-16 grid md:grid-cols-2 gap-5 px-6 items-center">
        {/* Left Side */}
        <div className="md:order-1 order-2 md:p-2 p-4 ">
          <Image
            src="/images/qr.webp"
            alt="QR Code"  
            width={100}
            height={100}
            sizes="100px"
            loading="lazy"
            className="mb-6 "
          />
 
          <h3 className="md:text-[66px] text-3xl font-medium mb-4 leading-snug">
            Secure. Seamless.
            <br /> Palm-first.
          </h3>
 
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              variant="outline"
              size="lg"
              className="bg-#FFFFFF26 text-[#FFFFFF] border border-white/30 px-12 py-4 rounded-full"
            >
              Get Started →
            </Button>
            <Button 
              variant="outline"
              size="lg"
               className="bg-#FFFFFF26 text-[#FFFFFF] border border-white/30 px-12 py-4 rounded-full"
            >
              Request Demo →
            </Button>
          </div>
        </div>
 
        {/* Right Side Images */}
        <div className=" flex justify-center md:justify-end md:order-2 order-1 py-6">
          <Image
            src="/Group 1000005153.png"
            alt="Palm App"
            width={250}
            height={450}
            sizes="(max-width: 768px) 100vw, 250px"
            loading="lazy"
            className="  z-0 md:w-full w-[200px]"
          />
        </div>
      </div>
      <hr className="text-[#FFFFFF3B]"/>
      <p className="text-white text-center pt-4 text-sm">
        © Copyright reserved by Palm pay.com
      </p>
    </footer>
  );
}
 
 