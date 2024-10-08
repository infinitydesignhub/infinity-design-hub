import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DynamicSection = ({ data }) => {
  // Fallbacks for data properties
  const { 
    title = "Default Title", 
    subTitle = "Default Subtitle", 
    button = "Default Button", 
    image 
  } = data || {};

  // Extract image URL from Contentful structure
  const imageSrc = image?.fields?.file?.url;

  return (
    <section className="py-16">
      <div className="container container-lg mx-auto">
        <hr />
        <div className='my-16'>
          <div className="flex flex-col">
            <div className="mb-6 flex flex-wrap justify-between">
              {imageSrc && (
                <img
                  loading="lazy"
                  decoding="async"
                  src={imageSrc}
                  alt=""
                  style={{
                    width: '265px',
                    height: '86px',
                    margin: 'auto 10px auto 0',
                    borderRadius: '0px 100px 100px 0px',
                  }}
                />
              )}
              <h2 className="text-[#232323] text-[80px] font-semibold mb-2 text-center">{title}</h2>
            </div>
            <div className='flex justify-between'>
              <p className="text-[20px] text-[#5B5B5B] md:text-xl max-w-2xl mb-6">
                {subTitle}
              </p>
              <div>
                <Link
                  className="inline-block text-[#5B5B5B] wgl-button relative px-8 py-3 z-1 font-semibold rounded-full !transition-all !duration-300 px-4 py-2 rounded-lg"
                  to="/contact"
                  role="button"
                  data-aos="zoom-in"
                >
                  {button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DynamicSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    button: PropTypes.string,
    image: PropTypes.object, // Add image prop type
  }),
};

export default DynamicSection;
