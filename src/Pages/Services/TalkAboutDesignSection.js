import React from 'react'; 
import { Link } from 'react-router-dom';

const TalkAboutDesignSection = ({ data }) => {
  console.log("TalkAboutDesignSection data:", data);

  if (!data) return null; // Early return if no data

  const leftImage = data.leftImage?.fields?.file?.url; // Safe access
  const rightImage = data.rightImage?.fields?.file?.url; // Safe access

  if (!leftImage || !rightImage) {
    return <div>Images not available</div>; // Check if images are valid
  }

  return (
    <section className="custom-container mx-auto py-16 flex flex-wrap talk">
      <div className="w-full md:w-1/2 py-4">
        <div className="mb-6">
          <h2 className="service-title text-2xl font-semibold">{data.leftTitle}</h2>
        </div>
        <div className="mb-4 flex">
          <div>
          <img
            loading="lazy"
            decoding="async"
            src={leftImage}
            alt={data.leftTitle}
            className="w-full h-auto round-img"
          />
          </div>
        <p className="mb-6 text-[18px] leading-[36px] w-[360px] ml-[3px]">{data.leftSubTitle}</p>
        </div>
        <div className="flex  space-x-4 gap[15px]">
          <Link
            to="/contact"
            className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full  transition-all duration-300  px-4 py-2 rounded-lg"
          >
            {data.getInTouchButton}
          </Link>
          <Link
            to="/about"
            className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full  transition-all duration-300  px-4 py-2 rounded-lg"
          >
            {data.ourAgencyButton}
          </Link>
        </div>
        <p className="mb-6 text-[18px] leading-[36px]">{data.description}</p>
      </div>
      <div className="w-full md:w-1/2 py-4">
        <div className="mb-6">
          <img
            loading="lazy"
            decoding="async"
            src={rightImage}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TalkAboutDesignSection;
