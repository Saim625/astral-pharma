import { FiX } from "react-icons/fi";

const ProductPreviewPopup = ({ product, onClose }) => {
  const imagePath =
    product.category === "poultry"
      ? `/poultry/${product.image}`
      : `/live-stock/${product.image}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-3xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2  bg-black rounded-full text-white hover:text-red-700 z-10"
        >
          <FiX size={28} />
        </button>

        {/* Large Preview Image */}
        <img
          src={imagePath}
          alt={product.name}
          className="w-full max-h-[80vh] object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductPreviewPopup;
