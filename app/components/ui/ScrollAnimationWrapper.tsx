// components/ui/ScrollAnimationWrapper.tsx
'use client';
import { motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useInView } from 'framer-motion';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
}

export default function ScrollAnimationWrapper({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px"
  });

  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
    fade: { y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : { 
        opacity: 0, 
        ...directions[direction] 
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}