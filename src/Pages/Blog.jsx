import React from "react";
import img from "../img/1.jpg";
import img1 from "../img/21.jpg";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from "react-intersection-observer"; // Import the hook
import Footer from "./Footer";
import Nav from "./Nav";

const blogs = [
  {
    title: "How Battery Recycling Companies in India Contribute to a Circular Economy",
    image: img,
    link: "/blogd", // Unique redirect link
  },
  {
    title: "Circular Economy: The Key to Achieving Net Zero Emissions with Gravita India’s Vision",
    image: img,
    link: "/blogd", // Unique redirect link
  },
  {
    title: "Sustainable Development: Building a Greener, Inclusive Future with Gravita India",
    image: img,
    link: "/blogd", // Unique redirect link
  },
  {
    title: "The Environmental Benefits of Choosing Recycled Aluminium for Die Casting Parts",
    image: img,
    link: "/blogd", // Unique redirect link
  },
  {
    title: "The Role of PPCP Scrap in Circular Economy Initiatives",
    image: img,
    link: "/blogd", // Unique redirect link
  },
  {
    title: "Benefits of Using Aluminium Alloys in Modern Manufacturing",
    image: img,
    link: "/blogd", // Unique redirect link
  },
];

const BlogCard = ({ image, title, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {/* Wrap the card in an anchor tag */}
    <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  </a>
);

const BlogSection = () => {
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
          src={img1}
          alt="contact"
          className="w-full h-[85vh] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Heading with Framer Motion for animation triggered by Intersection Observer */}
        <motion.div
          ref={ref} // Ref to trigger intersection observer
          className="absolute bottom-5 left-5"
          initial={{ y: -100, opacity: 0 }} // Start above the screen and invisible
          animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }} // Animate when in view
          transition={{ duration: 1, ease: "easeInOut" }} // Customize duration and easing
        >
          <h1 className="text-white text-7xl pl-12 pb-12 font-bold">Blogs</h1>
        </motion.div>
      </div>

      <div className="px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogSection;
