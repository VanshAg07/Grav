import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../img/4.jpg";

const GravitaAbout = () => {
  const controlsImage = useAnimation();
  const controlsText = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controlsImage.start({ x: 0, opacity: 1 });
      controlsText.start({ x: 0, opacity: 1 });
    } else {
      controlsImage.start({ x: "-50vw", opacity: 0 });
      controlsText.start({ x: "50vw", opacity: 0 });
    }
  }, [controlsImage, controlsText, inView]);

  return (
    <div ref={ref} className="relative flex flex-col lg:flex-row items-center bg-gray-50 p-8 overflow-hidden">
      {/* Left Section: Image */}
      <motion.div
        initial={{ x: "-50vw", opacity: 0 }}
        animate={controlsImage}
        transition={{ duration: 1.5 }}
        className="w-full lg:w-1/2 flex justify-center relative"
      >
        <img
          src={img}
          alt="Workers in factory"
          className="rounded-lg shadow-md h-[500px] object-cover"
        />
      </motion.div>

      {/* Right Section: Text Content */}
      <motion.div
        initial={{ x: "50vw", opacity: 0 }}
        animate={controlsText}
        transition={{ duration: 1.5 }}
        className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:-ml-32 bg-white p-6 rounded-lg shadow-md z-10 relative"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Gravita</h1>
        <p className="text-lg font-semibold text-gray-600 mb-4">
          Enterprising Craftsmen, Innovative Solutions - We Make a Difference
        </p>
        <p className="text-gray-700 mb-6">
          Gravita has always been a value-driven organisation. These cherished
          values continue to direct our business and growth. The company is
          dedicated to recycling lead & lead products, plastic, and aluminium
          using environmentally friendly processes, as well as providing
          turnkey solutions.
        </p>
        <a
          href="/read-more"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Read more
        </a>
      </motion.div>
    </div>
  );
};

export default GravitaAbout;
