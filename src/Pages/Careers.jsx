import React from "react";
import Nav from "./Nav";
import img2 from "../img/15.jpg";
import img from "../img/17.png";
import img1 from "../img/18.png";
import img3 from "../img/19.png";
import img4 from "../img/20.png";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from "react-intersection-observer"; // Import the hook
import Footer from "./Footer";

const Career = () => {
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
          <h1 className="text-white text-7xl pl-12 pb-12 font-bold">
            Work With Us
          </h1>
        </motion.div>
      </div>

      <h1 className="text-6xl pt-7 pb-4 text-center">
        Why Choose a Career with Gravita?{" "}
      </h1>
      <div className="relative flex flex-col lg:flex-row items-center bg-gray-50 p-8 overflow-hidden">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src={img2}
            alt="Workers in factory"
            className="rounded-lg shadow-md h-[500px] object-cover"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:-ml-16 bg-white p-6 rounded-lg shadow-md z-10 relative">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Diversity, Inclusion and Equity
          </h1>
          <p className="text-gray-700 mb-6">
            We embrace diversity and believe that an inclusive workforce leads
            to stronger innovation and success. We foster an environment where
            everyone feels valued, respected, and empowered to contribute their
            unique perspectives. We are committed to promoting equity and
            creating opportunities for all.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center bg-gray-50 p-8 overflow-hidden">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 mb-7 lg:-mr-16 lg:mt-0  bg-white p-6 rounded-lg shadow-md z-10 relative">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Talent Development
          </h1>
          <p className="text-gray-700 mb-6">
            We believe in investing in our employees' growth and development.
            Gravita employees gain access to comprehensive training programmes,
            workshops, and mentoring opportunities that enable them to expand
            their knowledge and skills. We encourage continuous learning,
            ensuring that our team stays at the forefront of sustainable
            practices and technologies.{" "}
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src={img2}
            alt="Workers in factory"
            className="rounded-lg shadow-md h-[500px] object-cover"
          />
        </div>
      </div>

      <div className="bg-white w-full mx-auto py-16 px-8">
  {/* Title Section */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-600">
      We Live By Our Values
    </h2>
    <p className="text-gray-600 mt-4">
      When you join Gravity, you join a global Community. We ensure our
      team members have as many unforgettable moments as our wanderers.
    </p>
  </div>

  {/* Values Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    {/* Card 1: Left Aligned */}
    <div className="flex flex-col md:flex-row items-center bg-blue-50 border-2 border-blue-500 rounded-lg p-6 justify-self-start">
  {/* Image Section */}
  <div className="flex-shrink-0">
    <img src={img} alt="Innovation" className="w-16 h-16" />
  </div>

  {/* Text Section */}
  <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
    <h3 className="text-xl font-bold text-blue-600">Innovation</h3>
    <p className="text-gray-700 mt-2">
      We encourage creativity, innovation and continuous improvements.
      We are open to experimenting and creating things from scratch.
    </p>
  </div>
</div>


    {/* Card 2: Right Aligned */}
    <div className="flex flex-col md:flex-row items-center bg-blue-50 border-2 border-blue-500 rounded-lg p-6 justify-self-end">
      <div className="flex-shrink-0">
        <img src={img1} alt="Expressivity" className="w-16 h-16" />
      </div>
      <div className="ml-4 md:mt-0 md:ml-4 text-center md:text-left">
        <h3 className="text-xl font-bold text-blue-600">
          Embrace Expressivity
        </h3>
        <p className="text-gray-700">
          We give you a platform where you can express yourself, and we
          are open to ideas and suggestions, even from new employees.
        </p>
      </div>
    </div>

    {/* Card 3: Left Aligned */}
    <div className="flex flex-col md:flex-row items-center bg-blue-50 border-2 border-blue-500 rounded-lg p-6 justify-self-start">
      <div className="flex-shrink-0">
        <img src={img3} alt="Diversity" className="w-16 h-16" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
        <h3 className="text-xl font-bold text-blue-600">Diversity & Inclusions</h3>
        <p className="text-gray-700">
          We have people from different backgrounds and communities, all
          coming together to make Gravity what it is today. We celebrate
          efforts, and everyone’s contributions are valued.
        </p>
      </div>
    </div>

    {/* Card 4: Right Aligned */}
    <div className="flex flex-col md:flex-row items-center bg-blue-50 border-2 border-blue-500 rounded-lg p-6 justify-self-end">
      <div className="flex-shrink-0">
        <img src={img4} alt="Empowerment" className="w-16 h-16" />
      </div>
      <div className="ml-4 md:mt-0 md:ml-4 text-center md:text-left">
        <h3 className="text-xl font-bold text-blue-600">Empowerment</h3>
        <p className="text-gray-700">
          We at Gravity empower our employees by giving them a platform
          to represent themselves and their work while rewarding them with
          regular acknowledgement and appreciation.
        </p>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </>
  );
};

export default Career;
