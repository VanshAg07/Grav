import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // React Icons for social media
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#F1F1F1] text-black pt-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Section 1: Company Name */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Gravita</h2>
            <h2 className="text-base mb-4">CIN: L29308RJ1992PLC006870</h2>
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
            <p className="text-lg">Mail:- @gmail.com</p>
            </div>
          </div>

          {/* Section 2: Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul>
              <li>
                <a href="#product1" className="text-lg hover:text-gray-400">
                  Lead Sheet
                </a>
              </li>
              <li>
                <a href="#product2" className="text-lg hover:text-gray-400">
                  Lead Powder
                </a>
              </li>
              <li>
                <a href="#product3" className="text-lg hover:text-gray-400">
                  Pure Lead
                </a>
              </li>
              <li>
                <a href="#product4" className="text-lg hover:text-gray-400">
                  Lead Alloys
                </a>
              </li>
              <li>
                <a href="#product5" className="text-lg hover:text-gray-400">
                  Remelted Lead Ingots
                </a>
              </li>
              <li>
                <a href="#product6" className="text-lg hover:text-gray-400">
                  Polypropylene Granules
                </a>
              </li>
              <li>
                <a href="#product7" className="text-lg hover:text-gray-400">
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
                <a href="#service1" className="text-lg hover:text-gray-400">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#service2" className="text-lg hover:text-gray-400">
                  Turnkey Solutions
                </a>
              </li>
              <li>
                <a href="#service3" className="text-lg hover:text-gray-400">
                  Consultancy
                </a>
              </li>
              <li>
                <a href="#service4" className="text-lg hover:text-gray-400">
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
                <a href="#about" className="text-lg hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lg hover:text-gray-400">
                  Business Verticals
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lg hover:text-gray-400">
                  Geographies
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lg hover:text-gray-400">
                  ESG
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lg hover:text-gray-400">
                  Investors
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lg hover:text-gray-400">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          {/* Section 5: Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-purple-700 text-center py-4 mt-12">
        <p className="text-sm">© 2025 CompanyName. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
