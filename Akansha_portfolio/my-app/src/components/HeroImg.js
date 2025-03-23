import React from "react";

import IntroImg from "../assets/herobg.png";
import PcSetup from "../assets/pc3.jpg"; // Add your PC 3D model image

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={IntroImg}
          alt="Hero Background"
        />
      </div>

      {/* 3D PC Setup Image */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img className="w-full h-full object-cover" src={PcSetup} alt="3D PC Setup" />
      </div>

      {/* Content Inside PC Screen */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[70%] md:w-[55%] lg:w-[50%] xl:w-[45%] h-auto px-6 py-6 sm:px-8 sm:py-8 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        Hi, I'm <span className="text-[#915EFF]">Akansha</span>
      </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-2 leading-relaxed">
          I develop Web Design, 3D models, <br className="hidden sm:block" /> and web applications
          </p>
      </div>

    </section>
  );
};

export default Hero;
