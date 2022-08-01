import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center">
      <img
        className="lg:max-w-6xl px-20 py-6 self-center"
        src="./images/photo-grid.png"
        alt="photo"
      />

      <div className="ml-12">
        <h1 className="text-3xl md:text-5xl mb-6 ">Online Experiences</h1>
        <p className="text-2xl max-w-md">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
