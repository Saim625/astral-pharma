import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Poultry Products",
    description:
      "Explore our range of products designed to enhance the health and productivity of poultry.",
    image: "/poultry_category.webp",
    link: "/poultry-products",
  },
  {
    id: 2,
    title: "Livestock Products",
    description:
      "Browse our trusted solutions to maintain the well-being of your livestock.",
    image: "/live_stock_category.webp",
    link: "/livestock-products",
  },
];

const CategorySection = () => {
  return (
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-blue-800 mb-16">Our Products</h2>

        {/* Category Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transition-all duration-500"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="p-6 text-center absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center group-hover:bg-opacity-70 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-white mb-6">
                  {category.description}
                </p>
                <Link
                  to={category.link}
                  className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-blue-700"
                >
                  Explore {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
