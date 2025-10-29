import React from "react";
import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Start Building{" "}
        <p className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          With Us
        </p>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Providing your need in assistance or any that required human resource to
        complete you work
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className=" bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white font-bold"
        >
          Join with us
        </a>
        <a href="#" className="font-bold py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-amber-400 mx-2 my-4"
        >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
