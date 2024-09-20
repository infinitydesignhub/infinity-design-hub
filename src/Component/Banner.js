import React, { useState, useEffect } from "react";
import bannerData from "../Data/bannerData.json"; // Adjust the path if necessary

const BannerSection = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
        setTransitioning(false);
      }, 500); // Duration of the transition
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentData = bannerData[index];

  return (
    <section
      className="banner relative"
    >
      {/* Main content container */}
      <div className="container flex items-center  text-start py-28 ">
        <div className="">
          {/* Main Text */}
          <div
            className={`space-y-6 transition-opacity duration-500 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="text-7xl font-bold">
              {currentData.mainText[0]}
            </h1>
            <div className="flex items-center justify-center">
              <img
                src="https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/arrow_orange.png"
                alt="arrow"
                className="w-15 h-20 mr-3"
              />
              <h2 className="heading-title text-7xl font-bold text-gray-600">
                {currentData.mainText[1]}
              </h2>
            </div>
            <h1 className="text-7xl font-bold">
              {currentData.mainText[2]}
            </h1>
          </div>

          {/* Subheading */}
          <div
            className={`flex items-center space-x-4 mt-10 transition-opacity duration-500 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Subheading */}
            <p className="w-[400px] text-[20px] leading-[36px] text-gray-600 dm-sans">{currentData.subheading}</p>

            {/* Button */}
            <a
              href="#contact"
              className="no-underline text-gray-600 wgl-button relative px-8 py-3 z-1 font-semibold rounded-full  transition-all duration-300"
            >
              {currentData.buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Social Media (Sidebar-like styling) */}
      {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-16 text-gray-600 text-sm">
        <div className="rotate-90 transform-origin-left">FACEBOOK</div>
        <div className="rotate-90 transform-origin-left">TWITTER</div>
        <div className="rotate-90 transform-origin-left">INSTAGRAM</div>
      </div> */}
    </section>
  );
};

export default BannerSection;
