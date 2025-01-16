import React from "react";
import Nav from "./Nav";
import img2 from "../img/15.jpg";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from "react-intersection-observer"; // Import the hook
import Footer from "./Footer";
import { FaChevronRight } from "react-icons/fa";
const Esg = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Keep triggering animation each time it comes into view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });
  return (
    <>
      <Nav />
      <div className="relative h-[85vh] w-full">
        {/* Background Image */}
        <img
          src={img2}
          alt="contact"
          className="w-full h-[85vh] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Heading with Framer Motion for animation triggered by Intersection Observer */}
        <motion.div
          ref={ref} // Ref to trigger intersection observer
          className="absolute bottom-5 left-5"
          initial={{ y: -100 }} // Start above the screen
          animate={{ y: inView ? 0 : -100 }} // Trigger animation when in view
          transition={{ duration: 1, ease: "easeInOut" }} // Customize duration and easing
        >
          <h1 className="text-white text-7xl pl-12 pb-12 font-bold">ESG</h1>
        </motion.div>
      </div>

      <div className="bg-white min-h-screen mx-auto w-[90vw] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mt-8 md:mt-0 md:mr-10 text-center md:text-left w-[80%] md:w-[50%]">
            <h1 className="text-4xl font-bold text-gray-800">
              Moving Towards a{" "}
              <span className="text-green-500 bg-green-200 px-1">
                Sustainable
              </span>{" "}
              Future
            </h1>

            <p className="mt-4 text-gray-600">
              Gravita India Limited firmly believes that the pressing issues of
              climate change, resource scarcity, waste disposal, pollution, and
              threats to diversity demand a complete re-evaluation of our
              relationship with resources. We have developed economic and social
              models that are more efficient, balanced, and sustainable to
              tackle these complex challenges.
            </p>
          </div>
          <div className="relative ">
            <img
              src={img2} // Replace with the path to your image file
              alt="Sustainability Approach"
              className="w-[70vw] h-[75vh] object-cover rounded-lg shadow-md mb-10 mt-7"
            />
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen mx-auto w-[90vw] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative ">
            <img
              src={img2} // Replace with the path to your image file
              alt="Sustainability Approach"
              className="w-[70vw] h-[75vh] object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="mt-8 md:mt-0 md:ml-10 text-center md:text-left w-[80%] md:w-[50%]">
            <h1 className="text-4xl font-bold text-gray-800">
              Integrating{" "}
              <span className="text-green-500 bg-green-200 px-1">
                Sustainability
              </span>{" "}
              into
            </h1>
            <h1 className="text-4xl font-bold text-gray-800">Our Approach</h1>

            <p className="mt-4 text-gray-600">
              Our company prioritises ESG (environment, social, governance)
              issues in our resource recycling endeavours. We believe this is
              not only a wise business approach, but also imperative in our
              efforts to preserve the planet through sustainable recycling
              practices.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen mx-auto w-[90vw] py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Environmental
            </h2>
            <img
              src={img2} // Replace with the path to your environmental image
              alt="Environmental"
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600 mb-4">
              Our dedication to environmental sustainability isn't just good for
              the planet – it's great for business. Discover how we're reducing
              our footprint, boosting recycling efforts, and embracing
              alternative energy sources. Explore our commitment to a greener
              future for both the world and our thriving enterprise.
            </p>
            <FaChevronRight className="bg-yellow-500 ml-80 p-2 text-4xl rounded-full" />
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Social</h2>
            <img
              src={img2} // Replace with the path to your social image
              alt="Social"
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600 mb-4">
              Our social responsibilities are integral to our business success,
              extending far beyond our business operations into the communities
              in which we operate. We have introduced various initiatives to
              ensure that we uphold the highest standards of integrity and
              accountability.
            </p>
            <FaChevronRight className="bg-yellow-500 ml-80 p-2 text-4xl rounded-full" />
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Governance
            </h2>
            <img
              src={img2} // Replace with the path to your governance image
              alt="Governance"
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600 mb-4">
              We believe good governance is achieved through transparency,
              integrity, and accountability. Discover our robust
              multi-stakeholder strategy, the financial acumen of our adept
              Audit Committee, and our commitment to ethical governance for a
              resilient future.
            </p>
            <FaChevronRight className="bg-yellow-500 ml-80 p-2 text-4xl rounded-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Esg;
