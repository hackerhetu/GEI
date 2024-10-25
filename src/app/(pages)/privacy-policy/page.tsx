"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, UserCheck, Globe, Lock, Trash2, Cookie } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const sections = [
    { title: '1. Information We Collect', icon: <FileText className="w-6 h-6" /> },
    { title: '2. How We Use Your Information', icon: <Shield className="w-6 h-6" /> },
    { title: '3. Sharing Your Information', icon: <UserCheck className="w-6 h-6" /> },
    { title: '4. Data Security', icon: <Lock className="w-6 h-6" /> },
    { title: '5. Data Retention', icon: <Trash2 className="w-6 h-6" /> },
    { title: '6. Your Rights and Choices', icon: <Globe className="w-6 h-6" /> },
    { title: '7. Cookies and Tracking Technologies', icon: <Cookie className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      {/* Navbar */}
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mb-12 text-center mt-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-lg">
          At Global Eye Intelligence, we prioritize your privacy. Please read our policy carefully.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Main sections */}
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            variants={item}
            className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-blue-500">{section.icon}</div>
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            </div>

            {index === 0 && (
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  We collect different types of information based on your interactions with our services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact information (e.g., name, email, phone)</li>
                  <li>Account information (e.g., username, password)</li>
                  <li>Billing information (e.g., payment method details)</li>
                  <li>Device information (e.g., IP address, browser type)</li>
                  <li>Location data (e.g., IP-based location)</li>
                </ul>
              </div>
            )}

            {index === 1 && (
              <p className="text-gray-300 leading-relaxed">
                We use the collected information to provide, personalize, and improve our services, including:
                account management, payment processing, communication, and legal compliance.
              </p>
            )}

            {index === 2 && (
              <p className="text-gray-300 leading-relaxed">
                We may share your information with third-party service providers, business partners, or in response to
                legal obligations, but never for commercial sale.
              </p>
            )}

            {index === 3 && (
              <p className="text-gray-300 leading-relaxed">
                We take data security seriously, using encryption, access controls, and other safeguards to protect
                your personal information.
              </p>
            )}

            {index === 4 && (
              <p className="text-gray-300 leading-relaxed">
                We retain your data for as long as necessary for service provision and legal obligations. Once no
                longer needed, we will securely delete or anonymize your data.
              </p>
            )}

            {index === 5 && (
              <p className="text-gray-300 leading-relaxed">
                You have the right to access, correct, or delete your information. You can also opt out of marketing
                communications or adjust your cookie preferences.
              </p>
            )}

            {index === 6 && (
              <p className="text-gray-300 leading-relaxed">
                We use cookies to improve user experience and analyze site usage. You can control cookie preferences
                through your browser settings.
              </p>
            )}
          </motion.div>
        ))}

        {/* Call to action */}
        <motion.div variants={item} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Accept Privacy Policy
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
