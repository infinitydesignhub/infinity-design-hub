import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import infoimg from '../image/infobox_cursor.png'; 
import infoimg2 from '../image/infobox_cursor_3.png'; 
import infoimg3 from '../image/infobox_cursor_4.png'; 
import infoimg4 from '../image/infobox_cursor_6.png'; 

const ServicesSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleMouseMove = (e, index) => {
    const box = e.currentTarget;
    const image = box.querySelector('.service-image');

    const { left, top, width, height } = box.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    image.style.transform = `translate(-${50 - xPercent}%, -${50 - yPercent}%) scale(1.1)`;
  };

  const handleMouseLeave = (e) => {
    const image = e.currentTarget.querySelector('.service-image');
    image.style.transform = 'translate(-50%, -50%) scale(1)'; // Reset position
  };

  return (
    <section className="services py-1">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between gap-3">
          {/* Left Content Section */}
          <div
            className="btn-w w-1/3 flex flex-col px-6 w-80"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-orange-600 font-semibold text-lg mb-2">
              WHAT WE OFFER
            </h2>
            <h3 className="dblh__title-wrapper text-4xl font-bold mb-7">
              Giving Your Business Some Great Ideas
            </h3>
            <a
              href="#contact"
              className="wgl-button text-gray-600 no-underline relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300"
            >
              MORE SERVICES
            </a>
          </div>

          {/* Right Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/5">
            {/* Service Boxes */}
            {[infoimg, infoimg2, infoimg3, infoimg4].map((img, index) => (
              <div
                key={index}
                className="service-box"
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
                data-aos-duration="1000"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mb-4">
                  <span className="hover-line text-4xl font-bold text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                  <span className="hover-line vc-line"></span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Service {index + 1}</h3>
                <p className="text-gray-600">
                  Our expertise, as well as our passion for web design, sets us apart from other agencies. Plus, our experience demonstrates our ability.
                </p>
                <img src={img} alt="Service" className="service-image" style={{ transition: 'transform 0.2s ease', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
