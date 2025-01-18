import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook
import img1 from "../img/6.jpg";
import img2 from "../img/7.jpg";
import img3 from "../img/8.jpg";
import img4 from "../img/9.jpg";

const ESGSection = () => {
  const [inView, setInView] = useState(false);

  // Intersection Observer hook to trigger animation when component is in view
  const { ref, inView: sectionInView } = useInView({
    triggerOnce: false, // Trigger every time it enters the viewport
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    setInView(sectionInView);
  }, [sectionInView]);

  const categories = [
    {
      title: "Environmental",
      image: img2,
      description: "Focused on reducing environmental impacts through sustainable practices.",
    },
    {
      title: "Social",
      image: img3,
      description: "Empowering communities and ensuring social responsibility.",
    },
    {
      title: "Governance",
      image: img4,
      description: "Committed to transparent and effective governance systems.",
    },
  ];

  return (
    <section
      id="esg-section"
      ref={ref}
      className="relative pb-16 bg-gray-900 text-white py-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img1}
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        {/* Title Animation */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: inView ? 0 : -50,
            opacity: inView ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          ESG
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          className="text-lg mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: inView ? 0 : -50,
            opacity: inView ? 1 : 0,
          }}
          transition={{ duration: 1.2 }}
        >
          Our holistic approach to sustainability comprises a determined effort
          to put us at the forefront of generating positive impacts in the three
          spheres of People, Planet, and Prosperity.
        </motion.p>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group bg-white bg-opacity-10 rounded-lg overflow-hidden"
              initial={{ y: 100, opacity: 0 }} // Start from below
              animate={{
                y: inView ? 0 : 100, // Move up when in view
                opacity: inView ? 1 : 0, // Fade in when in view
              }}
              transition={{
                duration: 1,
                delay: index * 0.2, // Stagger animation for each card
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Text over the image */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 py-6">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="mt-2 text-lg">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGSection;
