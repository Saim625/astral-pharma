import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white pt-28 pb-10 relative">
      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and AstralPharma Text side by side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6"
          >
            <img
              src="/logo.jpeg" // Replace with your logo path
              alt="Astral Pharma Logo"
              className="h-16"
            />
            <div className="flex flex-col items-start">
              <p className="text-4xl font-extrabold text-white">Astral Pharma</p>
              {/* Tagline under Logo & Name */}
              <p className="text-gray-300 text-sm mt-2">
                Providing top-tier poultry and livestock health solutions across
                Pakistan since 2013.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +92 306 7311786
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +92 321 7311786
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> astralpharma786@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Office no 66, Street 8, Block V, New Multan
                Colony, Multan
              </li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/poultry-products"
                  className="block hover:text-white transition duration-300"
                >
                  Poultry Products
                </Link>
              </li>
              <li>
                <Link
                  to="/livestock-products"
                  className="block hover:text-white transition duration-300"
                >
                  Livestock Products
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer bottom text */}
        <div className="mt-16 text-center text-sm text-gray-400 border-t border-white border-opacity-20 pt-4">
          © {new Date().getFullYear()} Astral Pharma. All rights reserved.
        </div>
      </div>

      {/* Wave divider at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
      >
        <path
          fill="#fff"
          d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </footer>
  );
};

export default Footer;
