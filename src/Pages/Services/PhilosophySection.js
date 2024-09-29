import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PhilosophySection = ({ data }) => {
  // Accessing the fields from the data prop
  const {
    subtitle,
    title,
    description,
    buttonText,
    boxs = [], // Change 'flipBoxes' to 'boxs' to match your structure
  } = data;

  return (
    <section className="custom-container mx-auto py-16">
      <div className="row flex-wrap">
        <div className="col-md-6 mb-6">
          <div className="mb-6">
            <span className="text-gray-600">{subtitle}</span>
            <h3 className="text-3xl font-semibold">{title}</h3>
          </div>
          <div className="mb-6 text-[18px] leading-[36px]">
            {description && typeof description === 'object'
              ? documentToReactComponents(description)
              : description}
          </div>
          {buttonText && (
            <a
              href='/'
              className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300"
            >
              {buttonText}
            </a>
          )}
        </div>
        <div className="col-md-6">
          <div className="row">
            {boxs.map((box, index) => {
              const { boxTitle, hoverImage, des, number } = box.fields; // Access fields within each box
              return (
                <div key={index} className="col-md-6 mb-4">
                  <div className="wgl-flipbox type_flip_right">
                    <div className="wgl-flipbox_wrap">
                      <div className="wgl-flipbox_front p-4 border rounded">
                        <div class="wgl-flipbox_media-wrap">
                          <div class="media-wrapper number-wrapper">
                            <span className="wgl-number elementor-icon">
                              <span className="number">0{number}</span>
                            </span>
                          </div>
                        </div>
                        <h3 className="wgl-flipbox_title">
                          <span>{boxTitle}</span>
                        </h3>
                      </div>
                      <div className="wgl-flipbox_back p-4 border rounded shadow-lg bg-[#ec008c]">
                        <p className='text-white'>
                          {des}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
