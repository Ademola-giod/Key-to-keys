import React from "react"

import RoughPath from "../../../assets/roughpath.png"
import SmoothPath from "../../../assets/SmoothRoad.png"
import JourneyBg from "../../../assets/journeyImg.png"

const JourneySection = () => {
    return(
        <section className="relative bg-black overflow-hidden client py-20 px-4 flex flex-col items-center">
             {/* Background gradient circle */}
      {/* /* <div className="absolute inset-0 flex justify-center items-center z-0"> */}
        {/* <div className="w-[600px] h-[600px] bg-gradient-radial from-pink-900 via-black to-black rounded-full opacity-80 blur-3xl" />
      </div> */}
    {/* image section */}
    <img
        src={JourneyBg}
        alt="Journey background"
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 z-0"
      />


      {/* Content */}
      <div className="z-10 max-w-xl space-y-10 text-white">
        <img src={RoughPath} alt="Rough journey path" className="mx-auto w-32 md:w-40" />

        <p className="text-lg md:text-xl font-medium">
          The journey is rough <br />
          when you <br />
          learn on your own.
        </p>

        <img src={SmoothPath} alt="Smooth journey path" className="mx-auto w-48 md:w-64" /> 

        <p className="text-lg md:text-xl font-medium">
          The journey is smoother <br />
          when you learn with the <br />
          keys to keys approach.
        </p>
      </div>
    </section>
  );
};

export default JourneySection;
