import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // React Icons for social media
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Section 1: Company Name */}
          <div>
            <h2 className="text-3xl text-[#002379] font-bold mb-4">Gravita</h2>
            <h2 className="text-base font-bold text-[#131313] mb-4">CIN: L29308RJ1992PLC006870</h2>
            <p className="text-lg">
              We are a company dedicated to delivering high-quality products and
              services to our customers.
            </p>
            <div className="flex items-center space-x-2">
              <IoCall className="text-2xl" />
              <p className="text-lg">Tel: +91 1234567890</p>
            </div>
            <div className="flex items-center space-x-2">
            <IoIosMail className="text-2xl" />
            <p className="text-lg">Mail: @gmail.com</p>
            </div>
          </div>

          {/* Section 2: Products */}
          <div>
            <h3 className="text-xl text-[#131313] font-semibold mb-4">Products</h3>
            <ul>
              <li>
                <a href="#product1" className="text-lg text-[#323232]">
                  Lead Sheet
                </a>
              </li>
              <li>
                <a href="#product2" className="text-lg ">
                  Lead Powder
                </a>
              </li>
              <li>
                <a href="#product3" className="text-lg ">
                  Pure Lead
                </a>
              </li>
              <li>
                <a href="#product4" className="text-lg ">
                  Lead Alloys
                </a>
              </li>
              <li>
                <a href="#product5" className="text-lg ">
                  Remelted Lead Ingots
                </a>
              </li>
              <li>
                <a href="#product6" className="text-lg ">
                  Polypropylene Granules
                </a>
              </li>
              <li>
                <a href="#product7" className="text-lg text-[#323232] ">
                  Aluminium Alloys
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul>
              <li>
                <a href="#service1" className="text-lg text-[#323232]">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#service2" className="text-lg text-[#323232]">
                  Turnkey Solutions
                </a>
              </li>
              <li>
                <a href="#service3" className="text-lg text-[#323232]">
                  Consultancy
                </a>
              </li>
              <li>
                <a href="#service4" className="text-lg text-[#323232]">
                  Raw Material Procurement
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#about" className="text-lg text-[#323232]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lg text-[#323232]">
                  Business Verticals
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lg text-[#323232]">
                  Geographies
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lg text-[#323232]">
                  ESG
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lg text-[#323232]">
                  Investors
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lg text-[#323232]">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          {/* Section 5: Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-x-4 flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#002379] text-center py-4 mt-12">
        <p className="text-sm text-white">© 2025 CompanyName. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
