import React from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaBullhorn,
  FaCheckCircle,
  FaUsers,
  FaBolt,
  FaHeart,
  FaComments,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Distribution",
    icon: <FaShippingFast className="text-blue-600 text-3xl" />,
    description:
      "Our strong distribution network covers all cities of Pakistan, ensuring timely delivery across the country.",
  },
  {
    title: "Marketing",
    icon: <FaBullhorn className="text-blue-600 text-3xl" />,
    description:
      "We use innovative marketing strategies to create awareness and trust in our products among veterinarians and farmers.",
  },
  {
    title: "Quality",
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    description:
      "We’re committed to marketing reliable, high-quality poultry and livestock healthcare products.",
  },
  {
    title: "Teamwork",
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    description:
      "We believe in collaboration and respect to deliver the best outcomes for animal health and welfare.",
  },
  {
    title: "Efficiency",
    icon: <FaBolt className="text-blue-600 text-3xl" />,
    description:
      "Our efficient practices ensure customers receive the right products, at the right time, with the right support.",
  },
  {
    title: "Customer Centricity",
    icon: <FaHeart className="text-blue-600 text-3xl" />,
    description:
      "We prioritize our customers’ satisfaction and success in everything we do.",
  },
  {
    title: "Communication",
    icon: <FaComments className="text-blue-600 text-3xl" />,
    description:
      "We practice honest and respectful communication at all levels of the company.",
  },
  {
    title: "Integrity",
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    description:
      "Transparency and honesty are the foundation of every action we take.",
  },
];

const WhyAstralPharma = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6">
      {/* Animated floating SVG blob */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 opacity-30 z-0 animate-pulse"
        viewBox="0 0 200 200"
      >
        <path
          fill="#93c5fd"
          d="M40.5,-58.3C52.1,-52.4,61.6,-40.3,64.1,-27.2C66.7,-14.1,62.4,-0.1,59.3,14.6C56.2,29.2,54.3,44.5,45.3,51.7C36.2,59,20,58.3,5.6,51.7C-8.7,45.1,-17.4,32.6,-27.1,23.4C-36.9,14.3,-47.8,8.6,-53.7,-1.3C-59.7,-11.2,-60.6,-25.3,-52.7,-34.6C-44.8,-44,-28.1,-48.5,-13.1,-54.6C1.9,-60.6,37.2,-67.3,40.5,-58.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-900 mb-6"
        >
          Why Choose Astral Pharma?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Since March 2013, <strong>Astral Pharma</strong> has been dedicated
          to providing high-quality poultry and livestock healthcare solutions
          across Pakistan. With an extensive distribution network, a passionate
          team, and a commitment to excellence, we’ve become a trusted name in
          animal healthcare. Our customer-first approach and focus on innovation
          help us consistently deliver value to farmers, vets, and the
          livestock industry nationwide.
        </motion.p>

        {/* Vision & Mission */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become a leader in poultry and livestock healthcare by
              ensuring quality, reach, and trust across Pakistan through our
              dedicated distributors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver innovative, effective, and reliable animal health
              solutions that improve the lives of animals and the people who
              care for them.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SVG Section Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 fill-white"
        >
          <path d="M0,0V46.29c47.29,22.29,103.3,29.05,158,20.43C294.24,48.07,392.72,6,498,1.64c106.27-4.38,205.94,26.65,307,46.67,60.62,11.86,120.17,8.09,177-7.84V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyAstralPharma;
