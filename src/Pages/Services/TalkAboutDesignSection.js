import React from 'react';

const TalkAboutDesignSection = ({ data }) => {
  console.log("TalkAboutDesignSection data:", data);

  if (!data) return null;

  const leftImage = data.leftImage?.fields?.file?.url; // Safe access
  const rightImage = data.rightImage?.fields?.file?.url; // Safe access

  if (!leftImage || !rightImage) {
    return <div>Images not available</div>; // Check if images are valid
  }

  return (
    <section className="max-w-7xl mx-auto py-12 flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{data.leftTitle}</h2>
        </div>
        <div className="mb-4">
          <img
            loading="lazy"
            decoding="async"
            src={leftImage}
            alt={data.leftTitle}
            className="w-full h-auto"
          />
        </div>
        <p className="mb-6">{data.leftSubTitle}</p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="wgl-button btn-size-lg inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {data.getInTouchButton}
          </a>
          <a
            href="#"
            className="wgl-button btn-size-lg inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {data.ourAgencyButton}
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
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
