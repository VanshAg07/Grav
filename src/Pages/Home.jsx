import React from "react";
import Nav from "./Nav";
import Hero1 from "./hero1";
import GravitaAbout from "./Hero2";
import LegacySection from "./Hero3";
import ESGSection from "./Hero4";
import BusinessVerticals from "./Hero5";
import Map from "./Hero6";
import Footer from "./Footer";

function Home() {
  return (  
    <div>
    <Nav/>
    <Hero1/>
    <GravitaAbout/>
    {/* <BusinessVerticals/> */}
    <LegacySection/>
    <Map/>
    <ESGSection/>
    <Footer/>
    </div>
  );

}

export default Home;
