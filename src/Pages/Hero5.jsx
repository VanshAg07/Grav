import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img from "../img/10.jpg";
import img2 from "../img/11.jpg";
import img3 from "../img/12.jpg";
import img4 from "../img/9.jpg";

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
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row lg:items-start lg:space-x-8">
        {/* Left Section with Heading and Paragraph */}
        <motion.div
          className="lg:w-1/4 mb-8 lg:mb-0"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h1 className="text-4xl text-blue-900 font-bold">Business Verticals</h1>
          <p className="text-lg text-black mt-4">
            Our expertise lies in the secure and conscientious production of
            value-enhancing goods that serve various purposes across multiple
            industries.
          </p>
        </motion.div>

        {/* Image Slider Section */}
        <motion.div
          className="lg:w-3/4 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="relative">
            {/* Left Arrow - Absolutely positioned */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md cursor-pointer hover:bg-gray-200"
              onClick={handlePrev}
            >
              <FiChevronLeft className="text-black text-2xl" />
            </div>

            {/* Image Slider */}
            <div className="flex justify-between space-x-4 w-full overflow-hidden px-8">
              {slides
                .slice(currentIndex, currentIndex + (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3))
                .map((slide, index) => (
                  <motion.div
                    key={index}
                    className="w-full md:w-1/3 relative group"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <div className="relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-96 object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                          <h3 className="text-2xl text-left font-bold">
                            {slide.overlayTitle}
                          </h3>
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

            {/* Right Arrow - Absolutely positioned */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md cursor-pointer hover:bg-gray-200"
              onClick={handleNext}
            >
              <FiChevronRight className="text-black text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessVerticals;