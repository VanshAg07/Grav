import React from "react";
import { Globe2, Recycle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import WorldMapImage from "../img/1.webp";
import { useInView } from "react-intersection-observer"; // Import the Intersection Observer hook

function StatCard({ icon: Icon, number, label }) {
  // Parse the number string to get numeric value and suffix
  const parseNumber = (numStr) => {
    const match = numStr.match(/(\d+)(\+?)/);
    return {
      value: parseInt(match[1]),
      suffix: match[2] || '',
    };
  };

  const { value, suffix } = parseNumber(number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-2 p-4 hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
    >
      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-600" />
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800"
      >
        <CountUp
          end={value}
          duration={2.5}
          suffix={suffix}
          enableScrollSpy
          scrollSpyOnce
        />
      </motion.h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">{label}</p>
    </motion.div>
  );
}

function Map() {
  // Intersection Observer hook
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // Trigger the animation once when the section is in view
    threshold: 0.3, // Trigger when 50% of the section is visible
  });

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 pt-8 sm:pt-12 lg:pt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} // Animation triggers when section comes into view
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4 sm:mb-6">
            Our Presence
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Our network is spread across 70+ countries and we have a customer
            network in 38+ countries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animation triggers when section comes into view
            transition={{ duration: 1 }}
            className="relative w-full"
          >
            <img
              src={WorldMapImage}
              alt="World Map"
              className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] object-contain"
            />

            {/* Stats Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} // Animate the grid of stats when in view
                transition={{ duration: 1 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              >
                <StatCard icon={Globe2} number="70+" label="Countries" />
                <StatCard icon={Recycle} number="11" label="Recycling Plants" />
                <StatCard icon={MapPin} number="1700+" label="Global Touchpoints" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Map;
