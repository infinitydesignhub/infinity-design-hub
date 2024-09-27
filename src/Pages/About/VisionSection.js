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
            "We envision a world where every brand possesses a distinctive identity that stands out and leaves a lasting impression."
          ]
        },
        {
          title: "Mission",
          content: [
            "Our mission is driven by teamwork and expertise. By combining our diverse skills, we create tailored solutions to meet the unique needs of businesses, helping them thrive in a competitive landscape."
          ]
        }
      ],
      buttonText: "GET IN TOUCH",
      buttonLink: "https://wgl-dsites.net/bili/light/services/",
      imageSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/08/home6-1.jpg"
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
    <section className="max-w-6xl mx-auto py-16">
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
            <h3 className="text-[38px] font-semibold mt-2 text-[#232323]">{data.vision.title}</h3>
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
