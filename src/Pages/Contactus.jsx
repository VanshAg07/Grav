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
    <h1 className="text-white text-7xl pl-12 pb-12 font-bold">Contact Us</h1>
  </div>
</div>

    <div className="flex flex-wrap bg-gray-100 p-10">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 bg-white p-8 md:shadow-lg md:rounded-lg md:border border-gray-200">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in touch</h2>
  <form>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm p-3"
          placeholder="Full name"
        />
      </div>
      <div>
        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
          Contact number *
        </label>
        <input
          type="text"
          id="contactNumber"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm p-3"
          placeholder="Contact number"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email ID *
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm p-3"
          placeholder="E-mail Id"
        />
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
          Country *
        </label>
        <select
          id="country"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm p-3"
        >
          <option>Select country</option>
          {/* Add country options here */}
        </select>
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
          Organization *
        </label>
        <input
          type="text"
          id="organization"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm p-3"
          placeholder="Organization"
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
          Select Type *
        </label>
        <select
          id="type"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm p-3"
        >
          <option>Select type</option>
          {/* Add type options here */}
        </select>
      </div>
    </div>

    <div className="mt-6">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
        Message
      </label>
      <textarea
        id="message"
        rows="4"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm p-3"
        placeholder="Type your query here..."
      ></textarea>
    </div>

    <div className="mt-4 flex items-start">
      <input
        type="checkbox"
        id="agreement"
        className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
      />
      <label htmlFor="agreement" className="ml-2 text-sm text-gray-600">
        By using this form you agree with the storage and handling of your data by this website in accordance with our Privacy Policy.
      </label>
    </div>

    <div className="mt-6">
      <div className="g-recaptcha" data-sitekey="your-site-key"></div>
    </div>

    <button
      type="submit"
      className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md shadow-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>


      {/* Right Section - Business Verticals */}
      <div className="w-full h-[70vh] md:pt-20 md:w-1/2 bg-indigo-700 text-white p-8 rounded-lg shadow-lg">
  <h2 className="text-3xl font-semibold mb-6">Business Verticals</h2>
  <p className="text-sm mb-6">
    *Select your business to find the address and contact details of the concerned person
  </p>
  <div className="mb-6">
    <label htmlFor="business" className="block text-sm font-medium text-gray-200 mb-2">
      Select Business
    </label>
    <select
      id="business"
      value={selectedBusiness}
      onChange={(e) => setSelectedBusiness(e.target.value)}
      className="mt-1 block w-full bg-indigo-600 border-indigo-500 text-white rounded-md shadow-md focus:ring-2 focus:ring-white focus:border-white sm:text-sm p-3"
    >
      {Object.keys(businessDetails).map((business) => (
        <option key={business} value={business}>
          {business}
        </option>
      ))}
    </select>
  </div>

  <div className="mt-6">
    <h3 className="text-xl font-bold mb-4">{selectedBusiness}</h3>
    <p className="text-sm">
      <span className="block pb-4">
        <strong className="text-indigo-200">Phone:</strong> {businessDetails[selectedBusiness].phone}
      </span>
      <span className="block ">
        <strong className="text-indigo-200">Email:</strong> {businessDetails[selectedBusiness].email}
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
