import React, { useState } from "react";
import img from "../img/14.jpg";
import Nav from "./Nav";
import Footer from "./Footer";
import img2 from "../img/15.jpg";
import img3 from "../img/16.png";
import img4 from "../img/2.svg"

const OverviewSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Nav />
      <div className="relative h-[85vh] w-full">
        {/* Background Image */}
        <img
          src={img2}
          alt="contact"
          className="w-full h-[80vh] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Heading */}
        <div className="absolute bottom-5 left-5">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-between bg-white py-10 px-8 relative">
  {/* Left Section */}
  <div className="w-full pl-32 pt-4 lg:w-2/5 mb-6 lg:mb-0">
    <h1 className="text-4xl font-bold text-purple-800 mb-4">Overview</h1>
    <p className="text-gray-700 pr-8 text-lg mb-6">
      With cutting-edge manufacturing and recycling units for lead metal & lead products, aluminium alloys, and plastic granules, Gravita India Ltd. has become a world-renowned multinational company.
    </p>

    {/* The content that moves above the image */}
    <div
      className={` text-base bg-gray-100 p-3 shadow rounded-md transition-all duration-300 ease-in-out z-10`}
    >
      <p className="text-gray-700">
        Gravita is more than just a material recycling company—we are champions of sustainability and progress. As we expand our horizons and add new verticals to our impressive portfolio, we are proud to be leading the charge towards a cleaner, more sustainable future. With cutting-edge manufacturing and recycling units for Lead Metal & Lead Products, Aluminium Alloys, and Plastic Granules, Gravita India Ltd. has become a world-renowned multinational company. Our turnkey solutions for Lead Battery Recycling and non-ferrous metals have set the industry standard, earning us the reputation of being the world's leading provider.
      </p>
      {isExpanded && (
        <p className="text-gray-700 mt-4">
          Our team is dedicated to delivering innovative and efficient solutions, ensuring that we minimize waste and maximize value for our customers. By leveraging state-of-the-art technology and fostering partnerships with global leaders in the industry, we aim to set new benchmarks in sustainability and efficiency. Join us on our journey towards a brighter, greener future.
        </p>
      )}
      <button
        onClick={handleToggle}
        className="text-blue-600 flex items-center mt-4 hover:underline"
      >
        {isExpanded ? "Show less" : "Read more"}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-1 text-yellow-500 transform ${isExpanded ? "rotate-180" : "rotate-0"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="w-full lg:w-3/5 h-[400px] lg:h-[550px] relative">
    <img
      src={img}
      alt="Overview"
      className="w-full h-full object-cover rounded-lg shadow-md"
    />
  </div>
</div>

<div className="w-[90vw] mx-auto text-white px-8 py-12">
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
          <strong>Diversification:</strong> A crucial component of our mission.
        </li>
        <li>
          <strong>Sustainable growth:</strong> An enduring value safeguarding the environment.
        </li>
        <li>
          <strong>Eco-friendly tech innovations:</strong> Committed to harnessing technology.
        </li>
        <li>
          <strong>Value creation:</strong> Crucial for long-term success and responsibility.
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
      <img src={img3} alt="contact" className="h-40 object-cover" />
    </div>
  </div>

  {/* Values Section */}
  <div className="bg-blue-700 w-[86vw] mx-auto flex flex-col lg:flex-row p-8 mt-12 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
    <div className="lg:w-1/2 pr-8">
      <h2 className="text-4xl font-bold mb-4">Values</h2>
      <p className="mb-8 text-xl">
        Our sense of purpose is driven by a strong focus on fairness,
        trust, respect, passion, and nurturing relationships.
      </p>
      <img src={img4} alt="contact" className="h-40 object-cover" />
    </div>
    <div className="lg:w-1/2">
      <p className="mb-8 text-xl">
        <strong>Fairness</strong> is key to our business practices. We believe in
        conducting our operations fairly and ethically, ensuring all
        stakeholders are treated equitably.
      </p>
      <p className="mb-8 text-xl">
        <strong>Trust</strong> is the foundation of our relationships with our
        stakeholders. We value the trust that our stakeholders have placed
        in us and work tirelessly to maintain and strengthen it.
      </p>
      <p className="mb-8 text-xl">
        <strong>Respect</strong> is an essential component of our culture. We treat all our
        stakeholders equally, regardless of their background, position, or
        status.
      </p>
      <p className="mb-8 text-xl">
        <strong>Passion</strong> is what drives us to succeed. We are passionate about
        recycling and creating a sustainable future for generations.
      </p>
    </div>
  </div>
</div>
      <Footer />
    </>
  );
};

export default OverviewSection;
