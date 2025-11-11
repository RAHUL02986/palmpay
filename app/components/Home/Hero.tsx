// app/components/Hero.tsx
"use client"

import { Button } from "../ui/button"
import { motion, Variants } from "framer-motion"

export default function Hero() {
  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative md:h-[100vh] h-[650px] flex items-end justify-start overflow-hidden">
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-cover  bg-center"
        style={{ backgroundImage: "url('/images/herobg.jpg')" }}
      />
      
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 px-5 max-w-[1440px] w-full mx-auto pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-white sm:mb-6 mb-4"
        >
          Your Palm Your Wallet..
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-white sm:mb-8 mb-4 max-w-3xl  leadig-4"
        >
          Palmpe transforms your palm&apos;s unique vein structure into secure
          cryptographic codes processed entirely on-device. No raw biometrics
          stored No compromise.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="secondary"
              size="lg"
            >
              Get Started →
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
            >
              Request Demo →
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}