import React, { useState } from 'react';

const VisionSection = () => {
  const data = {
    vision: {
    //   subtitle: "OUR VISION",
      title: "Empowering Brands, Together",
      tabs: [
        {
          title: "Vision",
          content: [
            "We envision a world where every brand possesses a distinctive identity that stands out and leaves a lasting impression."
          ]
        },
        {
          title: "Mission",
          content: [
            "Our mission is driven by teamwork and expertise. By combining our diverse skills, we create tailored solutions to meet the unique needs of businesses, helping them thrive in a competitive landscape.",
          ]
        }
      ],
      buttonText: "READ MORE",
      buttonLink: "https://wgl-dsites.net/bili/light/services/",
      imageSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/08/home6-1.jpg"
    }
  };

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto py-12 flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <img
          loading="lazy"
          decoding="async"
          src={data.vision.imageSrc}
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-6">
          <span className="text-gray-600">{data.vision.subtitle}</span>
          <h3 className="text-3xl font-semibold mt-2">{data.vision.title}</h3>
        </div>

        <div className="wgl-tabs">
          <div className="flex space-x-4">
            {data.vision.tabs.map((tab, index) => (
              <h4
                key={index}
                onClick={() => setActiveTabIndex(index)} // Update active tab on click
                className={`wgl-tabs_header cursor-pointer ${index === activeTabIndex ? 'active' : ''}`}
              >
                <span className="wgl-tabs_title">{tab.title}</span>
              </h4>
            ))}
          </div>
          <div className="wgl-tabs_content-wrap">
            {data.vision.tabs.map((tab, index) => (
              <div
                key={index}
                className={`wgl-tabs_content ${index === activeTabIndex ? 'active' : ''}`}
                style={{ display: index === activeTabIndex ? 'block' : 'none' }}
              >
                {tab.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <a
          href={data.vision.buttonLink}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg mt-6"
        >
          {data.vision.buttonText}
        </a>
      </div>
    </section>
  );
};

export default VisionSection;
