import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsappButton = () => {
  return (
    <a
      href="https://wa.me/923067311786" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
};

export default FloatingWhatsappButton;
