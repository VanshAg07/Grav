import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky h-16 top-0 z-50 text-white">
      <div className="bg-purple-500 h-full container mx-auto px-4">
        <div className="h-full flex justify-around items-center">
          {/* Logo or Branding */}
          <div className="text-xl font-bold">MyWebsite</div>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <button
            className="lg:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <IoMdClose /> : <RiMenu3Line />}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex space-x-12 items-center">
            <Link to="/aboutus" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/contactus" className="hover:text-gray-300">
              Contact Us
            </Link>
            <a href="#blog" className="hover:text-gray-300">
              Blog
            </a>
            <a href="#career" className="hover:text-gray-300">
              Career
            </a>
            <div className="flex items-center">
              <IoIosSearch className="text-xl" />
              <a href="#search" className="hover:text-gray-300 pl-2">
                Search
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slides from right */}
        <div
          className={`lg:hidden fixed top-16 right-0 h-screen bg-purple-500 w-full transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-lg`}
        >
          <div className="flex flex-col space-y-6 px-6 py-6">
            <Link 
              to="/aboutus" 
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contactus" 
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <a 
              href="#blog" 
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#career" 
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Career
            </a>
            <div className="flex items-center">
              <IoIosSearch className="text-xl" />
              <a 
                href="#search" 
                className="hover:text-gray-300 pl-2"
                onClick={() => setIsOpen(false)}
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;