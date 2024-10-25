"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Shield, FileText, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const sections = [
    { title: "1. Acceptance of Terms", icon: <Scroll className="w-6 h-6" /> },
    { title: "2. Eligibility", icon: <Shield className="w-6 h-6" /> },
    { title: "3. Services Provided", icon: <FileText className="w-6 h-6" /> },
    { title: "4. User Account and Security", icon: <AlertCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar /> {/* Add Navbar component at the top */}

      <main className="flex-grow py-16 px-4">
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  className="max-w-4xl mx-auto mb-12 text-center mt-12" // Added margin-top (mt-12) to increase spacing
>
  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    Terms of Service
  </h1>
  <p className="text-gray-400 text-base md:text-lg">
    Welcome to Global Eye Intelligence. Please read these terms carefully.
  </p>
</motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Introduction */}
          <motion.div
            variants={item}
            className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800"
          >
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              These Terms of Service ("Terms") govern your access to and use of our services, 
              including our website, reports, intelligence products, data, content, and any 
              other related services provided by Global Eye Intelligence (collectively, the "Services").
            </p>
          </motion.div>

          {/* Main sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={item}
              className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-blue-500">
                  {section.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">{section.title}</h2>
              </div>
              {index === 0 && (
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  By accessing or using any part of our Services, you agree to comply with and be bound by these Terms. 
                  If you do not agree with these Terms, you may not access or use our Services. 
                  Your continued use of the Services constitutes your acceptance of any updates to the Terms.
                </p>
              )}
              {index === 1 && (
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  You must be at least 18 years of age to use our Services. By accessing or using the Services, 
                  you represent and warrant that you are eligible to form a legally binding contract under 
                  applicable law and are not barred from using the Services under any laws.
                </p>
              )}
              {index === 2 && (
                <div className="text-gray-300 leading-relaxed text-sm md:text-base">
                  <p className="mb-4">Global Eye Intelligence offers various subscription plans for access to reports, 
                  intelligence data, and related content. The Services include, but are not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Tactical Intelligence</li>
                    <li>Strategic Intelligence</li>
                    <li>Risk Intelligence</li>
                    <li>Defense Intelligence</li>
                    <li>Imagery and Situational Reports</li>
                    <li>Custom Reports</li>
                  </ul>
                </div>
              )}
              {index === 3 && (
                <div className="text-gray-300 leading-relaxed text-sm md:text-base">
                  <p className="mb-4">To access some parts of our Services, you may be required to create an account. You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Be responsible for all activities that occur under your account</li>
                  </ul>
                </div>
              )}
            </motion.div>
          ))}

          {/* Call to action */}
          <motion.div
            variants={item}
            className="text-center mt-12"
          >
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Accept Terms
            </motion.button> */}
          </motion.div>
        </motion.div>

        {/* Floating scroll progress indicator */}
        <motion.div
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Scroll className="w-6 h-6" />
        </motion.div>
      </main>

      <Footer /> {/* Add Footer component at the bottom */}
    </div>
  );
};

export default TermsOfService;
