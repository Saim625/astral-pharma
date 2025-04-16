import React from "react";
import { MdVerified, MdScience, MdOutlineManageAccounts } from "react-icons/md";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">About Us</h2>
  
          <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-2xl shadow-md">
            <motion.img
              src="/ceo.jpeg"
              alt="CEO"
              className="rounded-xl shadow-md object-cover w-full h-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
  
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mr. Sultan Saleem</h3>
              <p className="text-gray-600 mb-4">
                With over 23 years of marketing experience, including 11 years in the poultry and livestock segments, our CEO leads Astral Pharma with vision and dedication.
              </p>
              <p className="text-gray-700">
                Astral Pharma has been serving the veterinary pharmaceutical industry since March 2013. With a vast distribution network all across Pakistan, we specialize in providing high-quality products for poultry and livestock. Our dedication to quality, productivity, and effective field results makes us a trusted name in the industry.
              </p>
            </div>
          </div>
  
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <motion.div className="bg-white p-6 rounded-xl shadow-md text-center" whileHover={{ scale: 1.05 }}>
              <MdVerified className="text-blue-600 text-4xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">We ensure every product meets high quality and safety standards before reaching our customers.</p>
            </motion.div>
  
            <motion.div className="bg-white p-6 rounded-xl shadow-md text-center" whileHover={{ scale: 1.05 }}>
              <MdOutlineManageAccounts className="text-blue-600 text-4xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold">Productivity - A Top Priority</h4>
              <p className="text-gray-600 text-sm">Focused on delivering effective solutions that enhance productivity in both poultry and livestock.</p>
            </motion.div>
  
            <motion.div className="bg-white p-6 rounded-xl shadow-md text-center" whileHover={{ scale: 1.05 }}>
              <MdScience className="text-blue-600 text-4xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold">Field Trials & Clinical Tests</h4>
              <p className="text-gray-600 text-sm">Our products undergo rigorous testing to ensure proven results and reliability.</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  export default AboutUs;