'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Hardware', href: '#' },
    { label: 'Product', href: '/products' },
    { label: 'How It Work', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Investors', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  // Mobile menu animation variants
  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-0  right-0 sm:top-10 bg-white  z-50 sm:max-w-[1340px] max-w-[100vw] md:w-[99%] w-full mx-auto px-5 py-4 sm:rounded-full transition-all duration-300 shadow-[0px_4px_154px_-10px_#2F29E61A] ${
        isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <div>
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative ">
              <Image
                src="/icons/logo-icon.svg"
                alt="PalmPe"
                width={165}
                height={57}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-[#010214] hover:text-[#2F29E6] font-medium transition-colors text-lg relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2F29E6] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button size="lg">Request Demo →</Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="relative w-8 h-8 flex items-center justify-center lg:hidden z-[80]"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              // Cross (X)
              <motion.div
                className="relative w-6 h-6"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-gray-700 rotate-45"></span>
                <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-gray-700 -rotate-45"></span>
              </motion.div>
            ) : (
              // Hamburger
              <motion.div
                className="flex flex-col space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="block w-7 h-[2px] bg-gray-700"></span>
                <span className="block w-7 h-[2px] bg-gray-700"></span>
              </motion.div>
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden min-h-[calc(100vh-96px)] absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 px-4 text-lg py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-[#010214] hover:text-[#2F29E6] font-medium py-2 border-b border-gray-100 block transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#2F29E6] rounded-full px-6 py-2 text-white hover:bg-blue-700 focus-visible:ring-blue-500 ring-offset-white"
                  >
                    Request Demo →
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
