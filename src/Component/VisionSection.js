import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const VisionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const data = {
    vision: {
      title: "Why Partner with Infinity DesignHub?",
      buttonText: "GET IN TOUCH",
      buttonLink: "/contact",
      imageSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/08/home6-1.jpg",
      features: [
        {
          title: "Expert Professional Team",
          description: "Access top talent with extensive experience in digital innovation and marketing."
        },
        {
          title: "End-to-End Solutions",
          description: "From strategy to execution, we handle every aspect of your digital and print needs."
        },
        {
          title: "Proven Experience",
          description: "Leveraging years of success globally across various industries."
        },
        {
          title: "Economical and Efficient",
          description: "Quality solutions that fit your budget without compromising on excellence."
        },
        {
          title: "Continuous Support",
          description: "Timely and responsive service to ensure your success every step of the way."
        }
      ]
    }
  };

  const [openFeatureIndex, setOpenFeatureIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenFeatureIndex(openFeatureIndex === index ? null : index);
  };

  return (
    <section className="custom-container mx-auto pb-16 pt-20">
      <div className="row flex-wrap">
        <div className="col-md-6" data-aos="fade-right">
          <img
            loading="lazy"
            decoding="async"
            src={data.vision.imageSrc}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="mb-6">
            <h3 className="text-3xl font-semibold mt-2  text-[#232323]">{data.vision.title}</h3>
          </div>
          <div className="mb-6">
            {data.vision.features.map((feature, index) => (
              <div key={index}>
                <h4
                  className={`cursor-pointer text-2xl font-medium py-2 flex items-center hover:text-[#ec008c] transition duration-300 ease-in-out ${
                    openFeatureIndex === index ? "text-[#ec008c]" : "text-gray-800"
                  }`}
                  onClick={() => toggleFeature(index)}
                >
                  <span className="mr-2 text-[#ec008c]">
                    {openFeatureIndex === index ? "-" : "+"}
                  </span>
                  {feature.title}
                </h4>
                {openFeatureIndex === index && (
                  <p className="text-[16px] font-normal leading-7 pt-[3px] px-[35px] py-[15px]">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
          <Link
            to={data.vision.buttonLink}
            className="no-underline text-gray-600 wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 mt-10 flex w-[180px]"
          >
            {data.vision.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
