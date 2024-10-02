import React, { useState, useEffect, useRef } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { Link } from 'react-router-dom';

const VisionSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const data = {
    vision: {
      title: "Empowering Brands, Together",
      tabs: [
        {
          title: "Vision",
          content: [
            " We envision a world where every brand has a unique identity that not only stands out but also resonates deeply with its audience. We believe that a powerful brand can inspire change, evoke emotions, and foster connections, allowing businesses to make their mark in the ever-evolving marketplace."
          ]
        },
        {
          title: "Mission",
          content: [
            "Our mission is fueled by our passion for creativity and our commitment to excellence. By harnessing the diverse talents within our team, we craft tailored branding solutions that address the specific challenges faced by businesses today. We prioritize collaboration and open communication, ensuring that each project reflects the true essence of our clients’ visions. We strive to empower brands to thrive in a competitive landscape by transforming their ideas into compelling narratives and stunning visuals that capture attention and drive engagement. Together, we are not just creating brands; we are building legacies that inspire and connect."
          ]
        }
      ],
      buttonText: "GET IN TOUCH",
      buttonLink: "/contact",
      imageSrc: "images/newImages/About-Page-2.jpg"
   }
  };

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const lavaLampRef = useRef(null);

  // Move lavalamp-object based on active tab
  useEffect(() => {
    const activeTabElement = document.querySelector(`.wgl-tabs_header:nth-child(${activeTabIndex + 2})`);
    if (activeTabElement && lavaLampRef.current) {
      const tabRect = activeTabElement.getBoundingClientRect();
      const containerRect = activeTabElement.parentElement.getBoundingClientRect();
      lavaLampRef.current.style.width = `${tabRect.width}px`;
      lavaLampRef.current.style.left = `${tabRect.left - containerRect.left}px`;
    }
  }, [activeTabIndex]);

  return (
    <section className="custom-container mx-auto py-16">
      <div className="row flex-wrap flex-row-reverse">
        <div className="col-md-6" data-aos="fade-right">
          <img
            loading="lazy"
            decoding="async"
            src={data.vision.imageSrc}
            alt="Vision and Mission"
            className="w-full h-auto"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="mb-6">
            <h3 className="text-4xl font-bold mt-3 mb-3 text-[#232323]">{data.vision.title}</h3>
          </div>

          <div className="wgl-tabs">
            <div className="flex wgl-tabs_headings-wrap relative">
              <div ref={lavaLampRef} className="lavalamp-object easeInOutCubic"></div>
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

            {/* Content Wrapper */}
            <div className="wgl-tabs_content-wrap mt-4 mb-4">
              {data.vision.tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`wgl-tabs_content ${index === activeTabIndex ? 'active' : ''}`}
                >
                  {tab.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Link
            href={data.vision.buttonLink}
            className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 mt-6"
          >
            {data.vision.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
