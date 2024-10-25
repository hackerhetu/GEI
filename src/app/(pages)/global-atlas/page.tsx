"use client"
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const GeoatlasPage = () => {
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

  const features = [
    {
      title: "Advanced Mapping Solutions",
      description: "Discover a range of high-quality, custom maps designed to meet the needs of diverse clients. Our maps cover everything from geopolitical boundaries to detailed conflict zones and strategic areas.",
      icon: "🗺️"
    },
    {
      title: "Innovative Cartographic Tools",
      description: "We utilize cutting-edge technology to create accurate and visually compelling maps. Our tools and techniques ensure precise representation and analysis of geographic data.",
      icon: "🔧"
    },
    {
      title: "Comprehensive Geographic Analysis",
      description: "Our division delivers in-depth geographic and spatial analysis, providing critical insights into regional dynamics, infrastructure, and environmental features.",
      icon: "📊"
    },
    {
      title: "Real-Time Mapping Updates",
      description: "Stay informed with our real-time updates on key locations and developments. We provide current information to support operational and strategic planning.",
      icon: "⚡"
    },
    {
      title: "Custom Cartographic Services",
      description: "Whether you need specialized maps for a specific project or detailed geographic reports, The Geo Atlas offers tailored cartographic solutions to fit your requirements.",
      icon: "✨"
    },
    {
      title: "Educational Resources",
      description: "Enhance your understanding of geographic and geopolitical issues through our informative maps and visual content. We aim to educate and inform with clear, accessible cartographic materials.",
      icon: "📚"
    }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative bg-black min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-4 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 text-center"
          >
            Welcome to The GeoAtlas
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12"
          >
            The official cartographic division of Global Eye Intelligence, providing sophisticated and detailed cartographic solutions that support strategic insights and decision-making.
          </motion.p>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Global Coverage
          </h2>
          <div className="relative h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/api/placeholder/1200/600"
              alt="Global Coverage Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Our Cartographic Solutions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join leading organizations worldwide who trust GeoAtlas for their mapping needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      <Footer />

      {/* Floating Action Button */}
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
    </div>
  );
};

export default GeoatlasPage;