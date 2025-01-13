import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpeg";

const images = [image1, image2, image3];
const texts = [
  { title: "Recycle. Renew. Reclaim.", url: "/" },
  { title: "Go Green, Live Clean.", url: "/" },
  { title: "Make Earth Beautiful Again.", url: "/" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Intersection Observer hook to trigger animation when component is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once when in view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] bg-blue-200 overflow-hidden">
      {/* Rotating Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Text Section with animation */}
      <motion.div
        ref={ref} // Attach the ref for intersection observer
        className="absolute top-1/3 right-10 text-right text-white"
        initial={{ y: 50, opacity: 0 }} // Start below and invisible
        animate={{
          y: inView ? 0 : 50, // Move up when in view
          opacity: inView ? 1 : 0, // Fade in when in view
        }}
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
      >
        <h1 className="text-5xl font-bold mb-4">{texts[currentIndex].title}</h1>
        <a href={texts[currentIndex].url}>
          <motion.button
            type="submit"
            className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-blue-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            initial={{ y: 50, opacity: 0 }} // Start below and invisible
            animate={{
              y: inView ? 0 : 50, // Move up when in view
              opacity: inView ? 1 : 0, // Fade in when in view
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <span className="mr-2">Read More</span>
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </motion.button>
        </a>
      </motion.div>

      {/* Counter Indicator */}
      <div className="absolute bottom-10 right-10 text-white">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default HeroSection;
