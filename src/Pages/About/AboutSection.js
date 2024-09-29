import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { Link } from 'react-router-dom';

const AboutSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const data = {
    about: {
      subtitle: "Who We Are",
      // title: "Unique Digital Ideas for Successful Business",
      description: "Welcome to Infinity DesignHub! I’m Kavita, and in 2019, I embarked on a journey to create a space where creativity meets strategy. Based in California, my team and I—spread across the USA and India—are passionate about providing 360-degree branding solutions. From designing eye-catching logos and stunning graphics to crafting dynamic websites and high-quality printing, we pour our hearts into elevating brands and transforming visions into reality. Together, we handle global marketing demands, ensuring every brand we touch shines brightly.",
      buttonText: "GET IN TOUCH",
      buttonLink: "/contact",
      imageSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/about-sl-1.jpg"
    }
  };

  return (
    <section className="custom-container mx-auto py-16">
      <div className="row flex-wrap">
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <div className="mb-6 px-4 mt-4">
            <span className="text-[#ec008c] text-[14px] uppercase font-bold">{data.about.subtitle}</span>
            <h3 className="text-3xl font-semibold mt-2">{data.about.title}</h3>
          </div>
          <p className="mb-6 p-3 text-[17px] leading-[29px]">{data.about.description}</p>
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
