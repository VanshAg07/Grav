import React, { useState } from "react";
import img from "../img/13.jpg";
import Nav from "./Nav";
import Footer from "./Footer";
const ContactForm = () => {
  // State for selected business and details
  const [selectedBusiness, setSelectedBusiness] = useState("Lead & Lead Products");

  // Business details data
  const businessDetails = {
    "Lead & Lead Products": {
      phone: "+91-141-4057700",
      email: "sales@gravitaindia.com",
    },
    "Aluminium Alloys": {
      phone: "+91-141-4057701",
      email: "aluminium@gravitaindia.com",
    },
    "Turnkey Solutions": {
      phone: "+91-141-4057702",
      email: "turnkey@gravitaindia.com",
    },
    "EPR Solutions": {
      phone: "+91-141-4057703",
      email: "epr@gravitaindia.com",
    },
    "Media & Press": {
      phone: "+91-141-4057704",
      email: "media@gravitaindia.com",
    },
    "Investor Relations": {
      phone: "+91-141-4057705",
      email: "investors@gravitaindia.com",
    },
  };

  return (
    <>
    <Nav/>
    <div className="relative h-[85vh] w-full">
  {/* Background Image */}
  <img src={img} alt="contact" className="w-full h-[80vh] object-cover" />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
  
  {/* Heading */}
  <div className="absolute bottom-5 left-5">
    <h1 className="text-white text-4xl font-bold">Contact Us</h1>
  </div>
</div>

    <div className="flex flex-wrap bg-gray-100 p-10">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in touch</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Contact number *
              </label>
              <input
                type="text"
                id="contactNumber"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Contact number"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email ID *
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="E-mail Id"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country *
              </label>
              <select
                id="country"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Select country</option>
                {/* Add country options here */}
              </select>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization *
              </label>
              <input
                type="text"
                id="organization"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Organization"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Select Type *
              </label>
              <select
                id="type"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Select type</option>
                {/* Add type options here */}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Type your query here..."
            ></textarea>
          </div>
          <div className="mt-4 flex items-start">
            <input
              type="checkbox"
              id="agreement"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="agreement" className="ml-2 text-sm text-gray-600">
              By using this form you agree with the storage and handling of your data by this
              website in accordance with our Privacy Policy.
            </label>
          </div>
          <div className="mt-4">
            <div className="g-recaptcha" data-sitekey="your-site-key"></div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section - Business Verticals */}
      <div className="w-full md:w-1/2 bg-indigo-700 text-white p-8">
        <h2 className="text-2xl font-semibold mb-4">Business Verticals</h2>
        <p className="text-sm mb-4">
          *Select your businesses to find the address and contact details of the concerned person
        </p>
        <div className="mb-4">
          <label htmlFor="business" className="block text-sm font-medium text-gray-200">
            Select Business
          </label>
          <select
            id="business"
            value={selectedBusiness}
            onChange={(e) => setSelectedBusiness(e.target.value)}
            className="mt-1 block w-full bg-indigo-600 border-indigo-500 text-white rounded-md shadow-sm focus:ring-2 focus:ring-white focus:border-white sm:text-sm"
          >
            {Object.keys(businessDetails).map((business) => (
              <option key={business} value={business}>
                {business}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold">{selectedBusiness}</h3>
          <p className="mt-2">
            <span className="block">
              <strong>Phone:</strong> {businessDetails[selectedBusiness].phone}
            </span>
            <span className="block">
              <strong>Email:</strong> {businessDetails[selectedBusiness].email}
            </span>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactForm;
