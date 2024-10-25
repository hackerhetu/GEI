"use client"
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

interface Product {
  title: string;
  description: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    title: "Geoatlas Platform",
    description: "Advanced geopolitical mapping and analysis platform providing real-time insights into global events. Featuring AI-powered analytics, customizable dashboards, and comprehensive reporting tools.",
    imageUrl: "/geoatlas.jpg"
  },
  {
    title: "Intelligence Reports",
    description: "Detailed analysis and forecasting of geopolitical trends, risks, and opportunities. Our expert analysts provide actionable insights for strategic decision-making.",
    imageUrl: "/reports.jpg"
  }
];

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      if (!(e.target instanceof HTMLAnchorElement)) return;
      
      const target = e.target;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleLinkClick as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleLinkClick as EventListener);
      });
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative bg-black text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      <main className="relative">
        <Navbar />

        <section id="home">
          <HeroSection />
        </section>

        <section id="products" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Solutions
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto px-4">
              Empowering decisions with comprehensive geopolitical intelligence
            </p>
          </motion.div>
          <div className="space-y-20">
            {products.map((product, index) => (
              <ProductSection
                key={product.title}
                reversed={index % 2 === 1}
                product={product}
              />
            ))}
          </div>
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Intelligence Capabilities?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join leading organizations worldwide who trust Global-Eye Intelligence
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.section>

        <Footer />
      </main>

      {isMounted && (
        <motion.button
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default Page;