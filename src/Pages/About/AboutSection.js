import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
import { Link } from "react-router-dom";

const AboutSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const data = {
    about: {
      subtitle: "Who We Are",
      title: "Crafting Brands That Shine",
      description:
        "Infinity DesignHub was founded in 2019 with a vision to create a space where creativity meets strategy. Our California-based agency is dedicated to providing 360-degree branding solutions across the globe. From designing striking logos and impactful graphics to building dynamic websites and delivering high-quality printing, we work closely with clients to bring their brand visions to life. With a team of talented professionals spread across the USA and India, we meet the global marketing demands of businesses across various industries. We believe branding goes beyond visuals—it’s about creating compelling narratives that connect with audiences. At Infinity DesignHub, each project is a unique opportunity to help brands thrive. Our experienced team excels at blending creative excellence with strategic insights, ensuring every business we touch stands out and leaves a lasting impression in the competitive marketplace.",
      buttonText: "GET IN TOUCH",
      buttonLink: "/contact",
      imageSrc: "/images/newImages/About-Page-1.jpg",
    },
  };

  return (
    <section className="custom-container  mx-auto py-16">
      <div className="row flex-wrap">
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <div className="mb-6 pr-4 mt-4">
            <span className="text-[#ec008c] text-[14px] uppercase font-bold">
              {data.about.subtitle}
            </span>
            <h3 className="text-4xl font-bold mt-3 mb-3 text-[#232323]">
              {data.about.title}
            </h3>
          </div>
          <p className="mb-6  text-[17px] leading-[29px]">
            {data.about.description}
          </p>
          <Link
            href={data.about.buttonLink}
            className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 mt-6"
          >
            {data.about.buttonText}
          </Link>
        </div>
        <div className="col-md-6 mb-4" data-aos="fade-left">
          <img
            loading="lazy"
            decoding="async"
            src={data.about.imageSrc}
            alt="About Us"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
