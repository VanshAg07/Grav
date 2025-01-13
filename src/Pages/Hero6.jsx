import React from "react";
import { Globe2, Recycle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import WorldMapImage from "../img/1.webp"; // Update the path to match your image location

function StatCard({ icon: Icon, number, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-2 p-4 hover:scale-105 transition-transform duration-300"
    >
      <Icon className="w-8 h-8 text-indigo-600" />
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold text-gray-800"
      >
        {number}
      </motion.h3>
      <p className="text-gray-600 text-center">{label}</p>
    </motion.div>
  );
}

function WorldMap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[600px] bg-contain bg-center bg-no-repeat"
    >
      <img
        src={WorldMapImage}
        alt="World Map"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

function Map() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">
            Our Presence
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our network is spread across 70+ countries and we have a customer
            network in 38+ countries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Stats Section */}
          <div className="grid items-center justify-center absolute top-32 left-1/2 transform -translate-x-1/2 grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-16 p-6">
            <StatCard icon={Globe2} number="70+" label="Countries" />
            <StatCard icon={Recycle} number="11" label="Recycling Plants" />
            <StatCard
              icon={MapPin}
              number="1,700+"
              label="Global Touchpoints"
            />
          </div>

          {/* World Map */}
          <WorldMap />
        </div>
      </div>
    </div>
  );
}

export default Map;
