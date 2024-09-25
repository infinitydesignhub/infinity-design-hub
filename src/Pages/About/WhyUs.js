import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

const WhyUs = ({ wData }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  // Handle case where wData is not provided
  if (!wData) {
    return <p>No data available.</p>;
  }

  return (
    <section className="container mx-auto py-16">
      <div className="row flex-wrap">
        <div className="col-md-6" data-aos="fade-right">
          <img
            loading="lazy"
            decoding="async"
            src={wData.imageSrc}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="mb-6 px-2 mt-4">
            <span className="text-gray-600 text-xl font-bold">{wData.subtitle}</span>
            {/* <h3 className="text-3xl font-semibold mt-2">{wData.title}</h3> */}
          </div>
          <p className="mb-6 p-3 text-[18px] leading-[29px]">{wData.description}</p>
          <Link
            to={wData.buttonLink}
            className="no-underline text-gray-600 wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 mt-10 flex w-[180px]"
          >
            {wData.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
