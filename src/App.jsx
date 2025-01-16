import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/Contactus";
import Aboutus from './Pages/Aboutus'
import Esg from './Pages/Esg'
import Career from './Pages/Careers'
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/Blogdetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/esg" element={<Esg />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogd" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
