import React from 'react';
import { Link } from 'react-router-dom';

const WhyUs = ({ wData }) => {
  // Handle case where wData is not provided
  if (!wData) {
    return <p>No data available.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <img
            loading="lazy"
            decoding="async"
            src={wData.imageSrc}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-6 px-2 mt-4">
            <span className="text-gray-600 text-xl font-bold">{wData.subtitle}</span>
            <h3 className="text-3xl font-semibold mt-2">{wData.title}</h3>
          </div>
          <p className="mb-6 p-3 text-[18px] leading-[29px]">{wData.description}</p>
          {/* <Link
            to={wData.buttonLink}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {wData.buttonText}
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
