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
  const { mainText, subheading, buttonText } = currentData;

  const transitionClass = transitioning ? "opacity-0" : "opacity-100";

  return (
    <section className="banner relative">
      <div className="social side-social">
        <a className="text">Follow Us</a>
        <div className="line"></div>
        {[
          { href: "https://twitter.com/Infinity_DH", icon: "fab fa-x-twitter" },
          { href: "https://www.facebook.com/infinitydesignhub", icon: "fab fa-facebook" },
          { href: "https://www.instagram.com/infinitydesignhub", icon: "fab fa-instagram" },
          { href: "https://www.youtube.com/channel/UChLbMTr9BghON2RxeaX3MIA", icon: "fab fa-youtube" },
          { href: "https://www.behance.net/Infinity_Designhub", icon: "fab fa-behance" },
          { href: "https://www.linkedin.com/company/31553220/admin/", icon: "fab fa-linkedin-in" },
          { href: "https://in.pinterest.com/Infinity_DH/", icon: "fab fa-pinterest" },
          { href: "https://www.google.com/search?hl=en-IN&gl=in&q=Infinity+Design+Hub&ludocid=4054609671248797353&lsig=AB86z5WLDoIJ8MvpIasm2-6njHds&hl=en&gl=IN#lrd=0x395e83bec735c467:0x3844de0385a5dea9,1", icon: "fab fa-google" },
          { href: "https://www.yelp.com/biz/infinity-designhub-dublin", icon: "fab fa-yelp" },
        ].map(({ href, icon }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <i className={icon} aria-hidden="true"></i>
          </a>
        ))}
      </div>
      <div className="container container-lg mx-auto d-flex flex-md-row align-items-start text-start py-10 md:py-28">
        <div className="flex-1">
          <div className={`space-y-6 transition-opacity duration-500 ${transitionClass}`}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase">{mainText[0]}</h1>
            <div className="d-flex align-items-center">
              <img src="../images/output.gif" alt="arrow" className="w-8 h-12 md:w-10 md:h-16 lg:w-15 lg:h-20 mr-3" />
              <h2 className="heading-title text-3xl md:text-5xl lg:text-7xl font-bold text-gray-600 uppercase">{mainText[1]}</h2>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase">{mainText[2]}</h1>
          </div>
          <div className={`d-flex flex-col md:flex-row align-items-start md:align-items-center space-y-4 md:space-x-4 mt-6 md:mt-10 transition-opacity duration-500 ${transitionClass}`}>
            <p className="w-[300px] md:w-[600px] text-base md:text-lg lg:text-[20px] leading-[28px] md:leading-[36px] text-gray-600 dm-sans">{subheading}</p>
            <Link to="/contact" className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
