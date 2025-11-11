// components/ui/StaggerAnimationWrapper.tsx
'use client';
import { motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useInView } from 'framer-motion';

interface StaggerAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

// Define variants outside the component so they can be shared
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export default function StaggerAnimationWrapper({ 
  children, 
  className = '' 
}: StaggerAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: false
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// StaggerItem component
export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div variants={itemVariants} className={className}>
    {children}
  </motion.div>
);