import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesSection = ({ data }) => {
  // Log data to check its structure
  console.log(data);

  // Check if data is defined and has features
  if (!data || !data.features) {
    return <p>No features available.</p>; // Display a message if no data is available
  }

  return (
    <div className="py-16 wgl-double-heading">
      <section className="custom-container mx-auto text-center mb-3 dblh__title-wrapper">
        <h2 className="text-3xl font-semibold text-[50px] md:text-[128px] leading-[50px] md:leading-[36px] dblh__title-2">{data.title}</h2>
      </section>
      <section className="custom-container mx-auto">
        <div className="d-flex justify-content-between flex-wrap"> {/* Flex custom-container to hold items */}
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="flex-grow-0 flex-shrink-0 d-flex justify-content-center"
              style={{
                marginTop: index % 2 === 1 ? '40px' : '0px', // 40px for odd indices
                marginBottom: index % 2 === 0 ? '-40px' : '0px', // -40px for even indices
                width: '70px', // Set fixed width for each box
                height: '200px', // Set fixed height for each box
              }}
            >
              <Link
                to={feature.link}

              >
                <div className="wgl-infobox_wrapper bg-gradient-to-r from-blue-500 to-blue-300 p-12 rounded-lg d-flex flex-column align-items-center h-100 transition-transform duration-300 ease-in-out transform hover:bg-[#ec008c] hover:scale-105 hover:!text-white">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={feature.imgSrc}
                    alt={feature.imgSrc}
                    className="mb-4 object-contain w-[100px] h-[100px]"
                  />
                  <p className="text-center text-gray-800 font-semibold  transition-colors duration-300">
                    {feature.text.split('\n').map((line, i) => (

                      <span key={i}>{line}<br /></span>

                    ))}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
