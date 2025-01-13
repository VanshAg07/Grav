import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Import framer-motion
import img from "../img/10.jpg";
import img2 from "../img/11.jpg";
import img3 from "../img/12.jpg";
import img4 from "../img/9.jpg"; // Add another image for demonstration

const BusinessVerticals = () => {
  const slides = [
    {
      title: "Manufacturing",
      image: img,
      overlayTitle: "Manufacturing Excellence",
      overlayText: "We specialize in high-quality manufacturing processes.",
    },
    {
      title: "Turnkey Solutions",
      image: img2,
      overlayTitle: "Comprehensive Solutions",
      overlayText: "Providing complete solutions from start to finish.",
    },
    {
      title: "Consultancy",
      image: img3,
      overlayTitle: "Expert Consultancy",
      overlayText: "Guiding businesses with our strategic consultancy services.",
    },
    {
      title: "Innovation",
      image: img4,
      overlayTitle: "Innovation at Core",
      overlayText: "Transforming ideas into groundbreaking solutions.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start space-x-8">
        {/* Left Section with Heading and Paragraph */}
        <motion.div
          className="lg:w-1/4 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Slide to the original position
          transition={{ duration: 1.5, ease: "easeInOut" }} // Slower animation
        >
          <h1 className="text-4xl font-bold text-purple-700">Business Verticals</h1>
          <p className="text-lg text-gray-600 mt-4">
            Our expertise lies in the secure and conscientious production of
            value-enhancing goods that serve various purposes across multiple
            industries.
          </p>
        </motion.div>

        {/* Image Slider Section */}
        <motion.div
          className="lg:w-3/4 relative"
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Slide to the original position
          transition={{ duration: 1.5, ease: "easeInOut" }} // Slower animation
        >
          <div className="flex items-center justify-between space-x-6">
            {/* Left Arrow */}
            <div
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md cursor-pointer hover:bg-gray-200"
              onClick={handlePrev}
            >
              <span className="text-gray-700 text-xl font-bold">{"<"}</span>
            </div>

            {/* Image Slider */}
            <div className="w-full flex justify-between space-x-4">
              {slides.slice(currentIndex, currentIndex + 3).map((slide, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-1/3 relative group"
                  initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
                  animate={{ opacity: 1, x: 0 }} // Slide in
                  transition={{ duration: 1.5, ease: "easeInOut" }} // Slower animation
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-96 object-cover rounded-lg shadow-md"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white px-4">
                        <h3 className="text-2xl text-left font-bold">{slide.overlayTitle}</h3>
                        <p className="mt-2 text-left">{slide.overlayText}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-center text-xl font-bold text-gray-800 mt-4">
                    {slide.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <div
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md cursor-pointer hover:bg-gray-200"
              onClick={handleNext}
            >
              <span className="text-gray-700 text-xl font-bold">{">"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessVerticals;
