import React, { useState } from "react";
import img from "../img/14.jpg";
import Nav from "./Nav";
import Footer from "./Footer";
import img2 from "../img/15.jpg";
import img3 from "../img/16.png";
import img4 from "../img/2.svg";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from "react-intersection-observer"; // Import the hook
const OverviewSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


  const { ref, inView } = useInView({
    triggerOnce: false, // Keep triggering animation each time it comes into view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <>
      <Nav />
      <div className="relative h-[85vh] w-full">
              {/* Background Image */}
              <img src={img2} alt="contact" className="w-full h-[85vh] object-cover" />
              
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
                <h1 className="text-white text-7xl pl-12 pb-12 font-bold">About Us</h1>
              </motion.div>
      </div>

      <div className="flex flex-wrap items-start justify-between bg-white py-10 px-6 lg:px-16">
  {/* Left Section */}
  <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4 lg:pl-12">
    <h1 className="text-3xl lg:text-4xl font-bold text-purple-800 mb-4">Overview</h1>
    <p className="text-gray-700 text-base lg:text-lg mb-6">
      With cutting-edge manufacturing and recycling units for lead metal & lead products,
      aluminium alloys, and plastic granules, Gravita India Ltd. has become a world-renowned
      multinational company.
    </p>
    <div className="bg-gray-100 p-6 shadow rounded-md transition-all duration-300 ease-in-out">
      <p className="text-gray-700">
        Gravita is more than just a material recycling company—we are champions of sustainability
        and progress. As we expand our horizons and add new verticals to our impressive portfolio,
        we are proud to be leading the charge towards a cleaner, more sustainable future. With
        cutting-edge manufacturing and recycling units for Lead Metal & Lead Products, Aluminium
        Alloys, and Plastic Granules, Gravita India Ltd. has become a world-renowned multinational
        company. Our turnkey solutions for Lead Battery Recycling and non-ferrous metals have set
        the industry standard, earning us the reputation of being the world's leading provider.
      </p>
      {isExpanded && (
        <p className="text-gray-700 mt-4">
          Our team is dedicated to delivering innovative and efficient solutions, ensuring that we
          minimize waste and maximize value for our customers. By leveraging state-of-the-art
          technology and fostering partnerships with global leaders in the industry, we aim to set
          new benchmarks in sustainability and efficiency. Join us on our journey towards a
          brighter, greener future.
        </p>
      )}
      <button
        onClick={handleToggle}
        className="text-blue-600 flex items-center mt-4 hover:underline"
      >
        {isExpanded ? "Show less" : "Read more"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-1 text-yellow-500 transform ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] px-4 lg:px-0">
    <img
      src={img}
      alt="Overview"
      className="w-full h-full object-cover rounded-lg shadow-md"
    />
  </div>
</div>


      <div className=" w-[90vw] mx-auto text-white px-8 py-12">
        {/* Mission and Vision Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-start justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Mission */}
          <div className="w-full lg:w-1/2 bg-blue-900 p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold mb-4">Mission</h2>
            <p className="text-lg mb-4">
              To be amongst the top 5 global companies in recycling by 2028.
            </p>
            <p className="mb-4">
              Our company's mission is centred around four core pillars that
              guide our business strategy: diversification, sustainable growth,
              eco-friendly tech innovation, and value creation for all
              stakeholders.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Diversification:</strong> A crucial component of our
                mission.
              </li>
              <li>
                <strong>Sustainable growth:</strong> An enduring value
                safeguarding the environment.
              </li>
              <li>
                <strong>Eco-friendly tech innovations:</strong> Committed to
                harnessing technology.
              </li>
              <li>
                <strong>Value creation:</strong> Crucial for long-term success
                and responsibility.
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="w-full lg:w-1/2 bg-blue-900 p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold mb-4">Vision</h2>
            <p className="text-lg mb-4">
              To be the most valuable company in the recycling space globally.
            </p>
            <p className="mb-4">
              At Gravita, we are quality-conscious and committed to providing
              our customers with the highest service standards.
            </p>
            <img src={img3} alt="contact" className=" h-40 object-cover" />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-blue-700 mx-auto flex flex-col lg:flex-row p-8 mt-12 rounded-lg max-w-7xl">
  {/* Left Section */}
  <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-8 lg:mb-0">
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left text-white">Values</h2>
    <p className="text-base lg:text-lg text-white text-center lg:text-left mb-4">
      Our sense of purpose is driven by a strong focus on fairness, trust, respect, passion, and nurturing relationships.
    </p>
    <img src={img4} alt="contact" className="h-40 w-full lg:w-auto object-cover rounded-md" />
  </div>

  {/* Right Section */}
  <div className="flex flex-col lg:w-1/2 space-y-4">
    <p className="text-base lg:text-lg text-white">
      <span className="font-semibold">Fairness</span> is key to our business practices. We believe in conducting our operations fairly and ethically, ensuring all stakeholders are treated equitably.
    </p>
    <p className="text-base lg:text-lg text-white">
      <span className="font-semibold">Trust</span> is the foundation of our relationships with our stakeholders. We value the trust that our stakeholders have placed in us and work tirelessly to maintain and strengthen it.
    </p>
    <p className="text-base lg:text-lg text-white">
      <span className="font-semibold">Respect</span> is an essential component of our culture. We treat all our stakeholders equally, regardless of their background, position, or status.
    </p>
    <p className="text-base lg:text-lg text-white">
      <span className="font-semibold">Passion</span> is what drives us to succeed. We are passionate about recycling and creating a sustainable future for generations.
    </p>
  </div>
</div>

      </div>

      <Footer />
    </>
  );
};

export default OverviewSection;
