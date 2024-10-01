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
      desc:"Partnering with Infinity DesignHub means unlocking the full potential of your brand through expert guidance, innovative strategies, and unwavering support—because your success is our mission.",
      buttonText: "GET IN TOUCH",
      buttonLink: "/contact",
      imageSrc: "/images/Home-Page-2.jpg",
      features: [
        {
          title: "Expert Professional Team",
          description: "Access a team of industry experts specializing in digital innovation and marketing, guaranteeing that your brand leverages cutting-edge strategies and creative solutions through our extensive experience."
        },
        {
          title: "End-to-End Solutions",
          description: "We provide comprehensive services, covering every stage of your project—from strategic planning to flawless execution in both digital and print."
        },
        {
          title: "Proven Experience",
          description: "With a track record of delivering successful campaigns across multiple industries, we bring years of global experience to help your brand thrive in competitive markets."
        },
        {
          title: "Economical and Efficient",
          description: "Our solutions are designed to offer maximum value, combining quality and creativity within your budget, so you achieve the best results without overspending."
        },
        {
          title: "Continuous Support",
          description: "Our team offers ongoing, responsive support to ensure your marketing efforts remain on track, with timely solutions at every phase to drive long-term success."
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
          <p className='my-3'>{data.vision.desc}</p>
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
