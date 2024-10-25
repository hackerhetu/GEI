"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Intelligence', path: '/intelligence' },
    { label: 'Global Atlas', path: '/global-atlas' },
    { label: 'Join', path: '/#join' },
    { label: 'About Us', path: '/about-us' }
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return pathname === '/' && path.endsWith(pathname);
    }
    return pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer space-x-3"
            >
              <Image
                src="/FINAL 1.svg"
                alt="Global Eye Logo"
                width={60}
                height={60}
                className="w-20 h-20 md:w-20 md:h-20"
                priority
              />
            
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="relative group"
              >
                <motion.div
                  className="text-white hover:text-blue-400 py-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className={`${isActive(item.path) ? 'text-blue-400' : ''}`}>
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(item.path) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Connect Us Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/connect-page">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium"
              >
                Connect Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  className={`block py-2 ${
                    isActive(item.path)
                      ? 'text-blue-400'
                      : 'text-white hover:text-blue-400'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
            <Link href="/connect-page">
              <motion.button
                whileHover={{ x: 10 }}
                className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Connect Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;