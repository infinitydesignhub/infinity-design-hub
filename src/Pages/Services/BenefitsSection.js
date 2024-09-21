import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from '../../client'; // Adjust the path to your Contentful client

const BenefitsSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Handle accordion toggle
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const {
    title,
    image,
    subTitle,
    collapsibleSection= [],
  } = data;

  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-wrap">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 px-4 flex justify-center">
          {image && image.fields && (
            <img
              src={image.fields.file.url}
              alt={title}
              className="max-w-full h-auto"
            />
          )}
        </div>

        {/* Right Column - Text */}
        <div className="w-full md:w-1/2 px-10">
          <div className="mb-4 w-[450px]">
            <span className="text-orange-500 font-bold mb-4">{subTitle}</span>
            <h3 className="text-4xl font-bold mt-3 mb-3">
              {title}
            </h3>
          </div>

          {/* Accordion */}
          <div className="space-y-2">
            {collapsibleSection.map((item, index) => (
              <div key={index}>
                <h4
                  className={`cursor-pointer text-2xl font-semibold py-2 flex items-center hover:text-orange-500 ${activeIndex === index ? "text-orange-600" : "text-gray-800"}`}
                  onClick={() => handleToggle(index)}
                >
                  <span className="mr-2 text-orange-600">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                  {item.fields.Collapsibletitle}
                </h4>
                <div className={`overflow-hidden transition-max-height duration-300 ${activeIndex === index ? "max-h-screen" : "max-h-0"}`}>
                  <div className="text-gray-600 mt-2">
                    {activeIndex === index && item.fields.collapsibleDescription && (
                      <div className="text-[16px] font-normal leading-7 pt-[3px] px-[35px] py-[15px}">
                        {documentToReactComponents(item.fields.collapsibleDescription)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
