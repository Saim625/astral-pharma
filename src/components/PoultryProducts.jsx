import React, { useState } from "react";
import data from "../data/products.json";
import { FiX } from "react-icons/fi";

const PoultryProducts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const poultryProducts = data.poultry;

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 mt-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-blue-800 mb-12">
          Our Poultry Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {poultryProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-lg shadow-md bg-white border border-gray-200 p-4"
            >
              <img
                src={`/poultry/${product.image}`}
                alt={product.name}
                className="w-full h-auto max-h-60 object-contain mx-auto mb-4 cursor-pointer"
                onClick={() => handleImageClick(product.image)}
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-transparent p-0 w-full max-w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/poultry/${selectedImage}`}
              alt="Enlarged"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black rounded-full text-white hover:text-red-700 z-10"
            >
              <FiX size={40} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PoultryProducts;
