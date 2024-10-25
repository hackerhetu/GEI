"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronRight, ArrowUpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const StrategicReportsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { id: 'all', name: 'All Reports' },
    { id: 'geopolitical', name: 'Geopolitical Analysis' },
    { id: 'regional', name: 'Regional Studies' },
    { id: 'security', name: 'Security Assessment' }
  ];

  const reports = [
    {
      id: 1,
      title: "Beijing Declaration Analysis",
      category: "geopolitical",
      date: "2024-03-15",
      summary: "Comprehensive analysis of the strategic implications of the Beijing Declaration and its impact on regional dynamics.",
      image: "/api/placeholder/800/400",
      readTime: "15 min read"
    },
    {
      id: 2,
      title: "JCPOA Strategic Review",
      category: "security",
      date: "2024-03-10",
      summary: "In-depth examination of the Joint Comprehensive Plan of Action and its implications for global security.",
      image: "/api/placeholder/800/400",
      readTime: "20 min read"
    },
    {
      id: 3,
      title: "Moscow Talks: Strategic Outcomes",
      category: "regional",
      date: "2024-03-05",
      summary: "Analysis of the Putin-Assad meeting and its implications for regional power dynamics.",
      image: "/api/placeholder/800/400",
      readTime: "12 min read"
    }
  ];

  const filteredReports = reports.filter(report => 
    (selectedCategory === 'all' || report.category === selectedCategory) &&
    (searchQuery === '' || report.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-24 pb-12 px-4 overflow-hidden"
        style={{ minHeight: '60vh' }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0] 
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full opacity-30"
          >
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div 
                  key={i}
                  className="w-full h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg"
                  style={{ transform: `rotate(${i * 45}deg)` }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Strategic Intelligence Reports
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            In-depth analysis and insights on global strategic developments, security assessments, and geopolitical trends.
          </motion.p>
        </div>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reports..."
              className="w-full bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-lg py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-900/50 backdrop-blur-md text-gray-300 hover:bg-gray-800'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Reports Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredReports.map(report => (
              <motion.div
                key={report.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                      {report.category}
                    </span>
                    <span className="text-gray-400 text-sm">{report.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{report.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{report.summary}</p>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    Read Report
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-2 rounded-full shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition-colors z-50"
          >
            <ArrowUpCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default StrategicReportsPage;