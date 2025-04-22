import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    type: "custom",
    title: "Welcome to Astral Pharma",
    description:
      "Providing high-quality veterinary medicines to ensure \nthe health and well-being of your livestock and poultry.",
    values: [
      { title: "Trusted Quality", desc: "Premium veterinary solutions." },
      {
        title: "Expert Formulations",
        desc: "Scientifically proven compositions.",
      },
      { title: "Reliable Support", desc: "Dedicated to farmers and vets." },
    ],
  },
  {
    id: 2,
    image: "/slide2.webp",
    title: "Advanced Poultry Care",
    description:
      "Enhance the productivity and health of your poultry with our effective veterinary solutions.",
  },
  {
    id: 3,
    image: "/slide3.webp",
    title: "Livestock Health Solutions",
    description:
      "Ensure the well-being of your livestock with our trusted range of medicines and supplements.",
  },
];


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Preload image slides (excluding the custom slide)
    const imageSlides = slides.filter((slide) => slide.image);
    imageSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  
    // Auto-slide every 5 seconds
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full min-w-full flex items-center justify-center relative"
          >
            {/* First Slide (Custom Layout) */}
            {slide.type === "custom" ? (
              <div
                className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[100vh] flex flex-col justify-center items-center px-6"
                style={{
                  background: "linear-gradient(to bottom, #f9fafb, #e3f2fd)", // Subtle gradient background
                }}
              >
                <div className="max-w-6xl px-6 lg:px-12 flex flex-col lg:flex-row items-center">
                  {/* Left Content */}
                  <div className="text-center lg:text-left lg:w-1/2 space-y-4">
                    <h1 className="mt-14 text-2xl sm:text-3xl lg:text-5xl font-bold text-blue-700">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg mb-6 whitespace-pre-wrap">
                      {slide.description}
                    </p>
                  </div>

                  {/* Right Side - Values Cards */}
                  <div className="hidden lg:grid grid-cols-3 gap-6 w-1/2">
                    {slide.values.map((value, idx) => (
                      <div
                        key={idx}
                        className="bg-white shadow-lg p-4 rounded-lg text-center"
                      >
                        <h3 className="font-semibold text-lg text-blue-600">
                          {value.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Other Slides (Image Background) */
              <div
                className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[100vh] bg-contain bg-center flex flex-col justify-center items-center text-white text-center px-6"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover", // Cover full area without repeating
                  backgroundRepeat: "no-repeat", // Prevent repetition
                  backgroundPosition: "center", // Keep centered/ Ensures images aren't cropped
                  backgroundBlendMode: "darken",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Add overlay for text visibility
                }}
              >
                <div className="max-w-2xl px-4">
                  <h1 className="mt-14 text-2xl sm:text-3xl lg:text-4xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-base lg:text-lg">{slide.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-400"
            } hover:bg-blue-700`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
