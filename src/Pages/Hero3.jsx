import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook
import CountUp from "react-countup";
import img from "../img/5.jpg";

const LegacySection = () => {
  const [inView, setInView] = useState(false);

  // Intersection Observer hook to trigger animation when component is in view
  const { ref, inView: sectionInView } = useInView({
    triggerOnce: false, // Trigger every time it enters the viewport
    threshold: 0.2, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    setInView(sectionInView);
  }, [sectionInView]);

  return (
    <section
      id="legacy-section"
      ref={ref} // Attach the ref for intersection observer
      className="bg-black mb-10 text-white relative overflow-hidden min-h-[600px]"  // Increased the minimum height
    >
      <div className="absolute inset-0">
        {/* Background image */}
        <img
          src={img}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 px-6 py-12 md:px-20 lg:px-32 text-center">
        {/* Title Text Animation */}
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: inView ? 0 : -50,
            opacity: inView ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          Our Legacy
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          className="text-lg mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: inView ? 0 : -50,
            opacity: inView ? 1 : 0,
          }}
          transition={{ duration: 1.2 }}
        >
          Rajat Agrawal, a first-generation entrepreneur, founded Gravita in
          1992 after recognizing the significant potential worldwide for
          recycling lead.
        </motion.p>

        <div className="grid pt-24 grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cards for Metrics */}
          {[{ label: "Orders Booked", value: 60000, suffix: "MT+" },
            { label: "Production Capacity", value: 308000, suffix: "MT+" },
            { label: "Scrap Collected", value: 250000, suffix: "MT+" },
            { label: "Recycled Resources Supplied", value: 169000, suffix: "MT+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6"
              initial={{ x: 200, opacity: 0 }} // Start from right
              animate={{
                x: inView ? 0 : 200, // Move to original position when in view
                opacity: inView ? 1 : 0, // Fade in when in view
              }}
              transition={{ duration: 1, delay: index * 0.3 }} // Stagger the animations
            >
              <CountUp
                start={0}
                end={inView ? stat.value : 0}
                duration={4} // Smoother count
                separator=","
                className="text-3xl font-bold"
                useEasing={true} // Smooth transition
              />
              <span className="text-xl mt-2">{stat.suffix}</span>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
