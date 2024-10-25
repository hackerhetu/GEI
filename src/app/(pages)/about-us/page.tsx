"use client"
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe2, Target, Shield, Brain, Users, ChartBar } from 'lucide-react';

const AboutPage = () => {
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

  const products = [
    { name: 'Tactical Intelligence', icon: Target, description: 'Real-time insights for immediate decision-making' },
    { name: 'Strategic Intelligence', icon: Brain, description: 'Long-term analysis for future planning' },
    { name: 'Conflict Escalation', icon: ChartBar, description: 'Early warning systems and risk assessment' },
    { name: 'Military Intelligence', icon: Shield, description: 'Defense and security analysis' },
    { name: 'Imagery Intelligence', icon: Globe2, description: 'Geospatial analysis and mapping' },
    { name: 'Situational Analysis', icon: Users, description: 'Comprehensive contextual understanding' },
  ];

  const regions = [
    { 
      name: 'West Asia Tracker', 
      color: 'from-blue-500 to-cyan-500',
      gradient: 'hover:from-blue-600 hover:to-cyan-600',
      description: 'Strategic monitoring of West Asian geopolitics'
    },
    { 
      name: 'Africa Watch', 
      color: 'from-purple-500 to-pink-500',
      gradient: 'hover:from-purple-600 hover:to-pink-600',
      description: 'Comprehensive coverage of African dynamics'
    },
    { 
      name: 'Ukraine Monitor', 
      color: 'from-amber-500 to-orange-500',
      gradient: 'hover:from-amber-600 hover:to-orange-600',
      description: 'Real-time updates on Eastern European affairs'
    },
  ];

  if (!isMounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Hero Section with Particle Effect Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 text-center"
          >
            Global Eye Intelligence
          </motion.h1>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto space-y-6"
          >
            <p className="leading-relaxed text-center">
              Pioneering the future of intelligence analysis with cutting-edge 
              solutions for a complex world.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Grid with Hover Effects */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12 text-center">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <product.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Regional Coverage with Interactive Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12 text-center">
            Regional Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-r ${region.color} ${region.gradient} p-8 rounded-xl text-center group cursor-pointer transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{region.name}</h3>
                <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {region.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Glassmorphism */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Shape the future of intelligence and build a deeper understanding of the world's most critical issues with us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Connect With Us
          </motion.button>
        </div>
      </motion.section>

      <Footer />

      {/* Enhanced Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl z-40 transition-all duration-300"
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

export default AboutPage;