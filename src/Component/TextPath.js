/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './Component.css'; // Optional: for custom styles
import data from '../Data/TextPathData.json'; // Import the JSON data

const TextPath = () => {
  const services = data.services; // Use imported data

  if (!services.length) return null; // Handle loading state

  return (
    <section className="w-full h-full py-16">
      <div className="mx-auto">
        <div className="relative overflow-hidden marquee-container">
          {/* Start blur shadow */}
          <div className="marquee-start" />
          {/* End blur shadow */}
          <div className="marquee-end" />

          <marquee>
            {services.map((service, index) => {
              const textColor = index % 2 === 0 ? '#232323' : 'transparent';

              return (
                <span
                  key={index}
                  className="text-[80px] font-bold uppercase"
                  style={{
                    color: textColor,
                    ...(textColor === 'transparent'
                      ? { WebkitTextStroke: '1px #232323', WebkitTextFillColor: 'transparent' }
                      : {})
                  }}
                >
                  {service.title}
                  {/* <span className='inline-block'>
                  <img src='../images/connection.gif' alt='fast-forward' className='w-20 flex items-center'/>
                  </span> */}
                  <span className="inline-block mx-4 text-[#232323]">_</span>
                </span>
              );
            })}
          </marquee>
        </div>
      </div>
    </section>
  );
};

export default TextPath;
