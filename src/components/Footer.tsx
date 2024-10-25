import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Global Atlas', path: '/global-atlas' },
        { label: 'Intelligence', path: '/intelligence' },
        { label: 'Custom Solutions', path: '/custom-solutions' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Intelligence', path: '/intelligence' },
        { label: 'Privacy-Policy', path: '/privacy-policy' },
        { label: 'Terms of Service', path: '/terms-service' }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4">
              Global-Eye Intelligence
            </h2>
            <p className="text-gray-400 mb-6">
              India's premier geopolitical intelligence platform, providing strategic insights for informed decision-making.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors"
                  >
                    <Link href={link.path} className="block">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Intelligence Hub @ Ahmedabad, Gujarat, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>connect@globaleyeintelligence.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+91-9601417689</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} GEI Advisory Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;