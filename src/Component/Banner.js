import React, { useState, useEffect } from "react";
import bannerData from "../Data/bannerData.json"; // Adjust the path if necessary
import { Link } from "react-router-dom";

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
    <section className="banner relative">
      <div className="social side-social">
        <a className="text">Follow Us</a>
        <div className="line"></div>
        <a href="https://twitter.com/Infinity_DH" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/infinitydesignhub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/infinitydesignhub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com/channel/UChLbMTr9BghON2RxeaX3MIA" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube" aria-hidden="true"></i>
        </a>
        <a href="https://www.behance.net/Infinity_Designhub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-behance" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/company/31553220/admin/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a href="https://in.pinterest.com/Infinity_DH/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest" aria-hidden="true"></i>
        </a>
      </div>
      <div className="container container-lg mx-auto d-flex flex-md-row align-items-start text-start py-10 md:py-28">
        <div className="flex-1">
          <div
            className={`space-y-6 transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"
              }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase">
              {currentData.mainText[0]}
            </h1>
            <div className="d-flex align-items-center">
              <img
                src="../images/fast-forward.gif"
                alt="arrow"
                className="w-8 h-12 md:w-10 md:h-16 lg:w-15 lg:h-20 mr-3"
              />
              <h2 className="heading-title text-3xl md:text-5xl lg:text-7xl font-bold text-gray-600 uppercase">
                {currentData.mainText[1]}
              </h2>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase">
              {currentData.mainText[2]}
            </h1>
          </div>
          <div
            className={`d-flex  md:flex-row align-items-start md:align-items-center space-y-4 md:space-x-4 mt-6 md:mt-10 transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"
              }`}
          >
            <p className="w-full md:w-[400px] text-base md:text-lg lg:text-[20px] leading-[28px] md:leading-[36px] text-gray-600 dm-sans">
              {currentData.subheading}
            </p>
            <Link
              to="/contact"
              className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 px-4 py-2 rounded-lg"
            >
              {currentData.buttonText}
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BannerSection;
