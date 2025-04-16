import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi2";
import data from "../data/products.json";
import ProductPreviewPopup from "./ProductPreviewPopup";

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const searchInputRef = useRef(null);
  const inputRef = useRef(null);
  const filteredProductsRef = useRef(null);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts([]);
    } else {
      const searchResults = [
        ...data.poultry.map((product) => ({ ...product, category: "poultry" })),
        ...data.livestock.map((product) => ({
          ...product,
          category: "live-stock",
        })),
      ].filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(searchResults);
    }
  }, [searchQuery]);

  const toggleProductsDropdown = () => setIsProductsOpen((prev) => !prev);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleSearchClickOutside = (event) => {
      const clickedOutsideSearchBox =
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target);
      const clickedOutsideInput =
        inputRef.current && !inputRef.current.contains(event.target);
      const clickedOutsideFilteredList =
        !filteredProductsRef.current ||
        !filteredProductsRef.current.contains(event.target);

      if (
        clickedOutsideSearchBox &&
        clickedOutsideInput &&
        clickedOutsideFilteredList
      ) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setShowSearchInput(false);
      }
    };

    document.addEventListener("mousedown", handleSearchClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleSearchClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/logo5.jpg"
              alt="Astral Pharma Logo"
              className="h-8 w-auto"
            />
            <div className="text-center text-xs font-semibold mt-1 font-playfair-display">
              <span className="text-blue-800">Astral</span>{" "}
              <span className="text-red-600">Pharma</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 text-[17px] font-semibold text-blue-600  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link
              to="/"
              className="relative py-2 hover:text-blue-800 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-800 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="relative py-2 hover:text-blue-800 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-800 hover:after:w-full after:transition-all after:duration-300"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="relative py-2 hover:text-blue-800 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-800 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact Us
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleProductsDropdown}
                className="relative flex items-center gap-1 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-800 hover:after:w-full after:transition-all after:duration-300"
              >
                <span className="leading-tight">Products</span>
                <HiChevronDown
                  className={`w-4 h-4 mt-0.5 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div className="absolute left-0 z-10 mt-2 w-52 rounded-lg border bg-white shadow-lg animate-fadeIn">
                  <Link
                    to="/poultry-products"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 "
                    onClick={toggleProductsDropdown}
                  >
                    Poultry
                  </Link>
                  <Link
                    to="/livestock-products"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                    onClick={toggleProductsDropdown}
                  >
                    Livestock
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex justify-end w-56 relative" ref={searchInputRef}>
            {!showSearchInput ? (
              <button
                onClick={() => setShowSearchInput(true)}
                className="text-blue-700 hover:text-blue-900"
              >
                <FiSearch size={22} />
              </button>
            ) : (
              <div className="w-full relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for products"
                  className="w-full px-4 py-2 border border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={() => {
                    setShowSearchInput(false);
                    setSearchQuery(""); // optional: reset on close
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  <FiX size={18} />
                </button>
              </div>
            )}
          </div>

          <div className="flex lg:hidden space-x-4">
            <button
              onClick={() => setIsSearchOpen((prevState) => !prevState)}
              ref={searchInputRef}
            >
              <FiSearch size={24} />
            </button>
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="lg:hidden bg-white p-3 border-b transition-all duration-300">
            <div className="relative">
              <input
                type="text"
                ref={inputRef}
                placeholder="Search for products"
                className="w-full px-4 py-2 border border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                >
                  <FiX size={18} />
                </button>
              )}
            </div>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div
            className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-full max-h-80 overflow-y-auto z-20"
            ref={filteredProductsRef}
          >
            {filteredProducts.map((product) => {
              const imagePath =
                product.category === "poultry"
                  ? `/poultry/${product.image}`
                  : `/live-stock/${product.image}`;

              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="flex items-center px-4 py-3 hover:bg-gray-100 w-full transition gap-4 border-b last:border-b-0"
                >
                  <img
                    src={imagePath}
                    alt={product.name}
                    className="w-12 h-12 object-contain rounded-md border"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-800">
                      {product.name}
                    </span>
                    <span className="text-xs text-gray-500 capitalize">
                      {product.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          searchQuery && (
            <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-full max-h-80 overflow-y-auto z-20">
            <div className="flex flex-col items-center justify-center py-6">
              <span className="text-sm font-medium text-gray-800">
                Result not found
              </span>
            </div>
            </div>
          )
        )}

        {isMobileMenuOpen && (
          <div
            className="md:hidden px-4 pb-4 space-y-4 text-center text-blue-600 text-xl font-semibold"
            ref={mobileMenuRef}
          >
            <Link to="/" className="block" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/about" className="block" onClick={toggleMobileMenu}>
              About Us
            </Link>
            <Link to="/contact" className="block" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
            <Link
              to="/poultry-products"
              className="block"
              onClick={toggleMobileMenu}
            >
              Poultry Products
            </Link>
            <Link
              to="/livestock-products"
              className="block"
              onClick={toggleMobileMenu}
            >
              Livestock Products
            </Link>
          </div>
        )}
      </header>
      {selectedProduct && (
        <ProductPreviewPopup
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Header;
