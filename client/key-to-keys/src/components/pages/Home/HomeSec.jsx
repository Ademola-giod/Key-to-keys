import React from "react";
import NavBar from "./NavBar";
import BgImage from "../../../assets/hero-bg.jpg";

import HeroSection from "./HeroSection";

const HomeSec = () => {
 
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute  bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
};


export default HomeSec;
