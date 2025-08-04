import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PianoImage from "../../../assets/Piano.png";

const HeroSection = () => {
  const [hasPaid, setHasPaid] = useState(false);

    useEffect(() => {
      const paid = localStorage.getItem("hasPaid");
      if (paid === "true") {
        setHasPaid(true);
      }
    }, 
 []);


  return (
    <section 
    
      // className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-6"
      // style={{ backgroundImage: `url(${BgImage})
      
      className="h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6">
    
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Become a <span className="text-primary">master</span> at <br />
          playing the <span className="text-primary inline-flex items-center gap-2">piano <img src={PianoImage} alt="piano" className="w-8 h-8 inline-block" /></span>
        </h1>

       

        <p className="mt-4 max-w-md md:max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white">
          My lessons take you from being an absolute beginner to being a skilled
          professional piano player.
        </p>

         {/* // if user has paid my-course page will be accessed else refer back to  courses for payment */}
        <Link to={hasPaid ? "/my-course" : "/courses"}> 

        <button className="mt-8 px-10 py-3 bg-primary hover:bg-[#651b2e]  rounded-md text-white text-base sm:text-lg">
          {hasPaid ? "MY COURSE" : "GET STARTED"}
        </button>
        </Link>
      </div>
    </section> 
  );
};

export default HeroSection;
