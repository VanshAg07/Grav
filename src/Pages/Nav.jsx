import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-purple-700 sticky top-0 z-50 text-white">
      <div className="container w-[60%] mx-auto flex justify-end items-center p-2">
  {/* Navigation Links */}
  <div className="flex space-x-6 items-center">
    <a href="#blog" className="hover:text-gray-300">
      Blog
    </a>
    <a href="#career" className="hover:text-gray-300">
      Career
    </a>
    <Link to="/contactus"><a className="hover:text-gray-300">
      Contact Us
    </a>
    </Link>
    <IoIosSearch className="text-xl hover:text-gray-300" />
    <a href="#language" className="hover:text-gray-300">
      Search
    </a>
  </div>
</div>


      {/* Nav2 */}
      <div className=" bg-white container text-black mx-auto flex justify-evenly p-2">
        {/* Logo or Branding */}
        <div className="text-xl font-bold">MyWebsite</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
        <Link to="/aboutus"> <a className="hover:text-gray-300">
            About Us
          </a>
          </Link>
          <a href="#career" className="hover:text-gray-300">
            Business Verticals
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Geographics
          </a>
          <a href="#language" className="hover:text-gray-300">
           ESG
          </a>
          <a href="#language" className="hover:text-gray-300">
           Investors
          </a>
          <a href="#language" className="hover:text-gray-300">
           Newsroom
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
