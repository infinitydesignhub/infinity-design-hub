import React, { useEffect } from "react";
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

  return (
    <section className="services py-1">
      <div className="container mx-auto px-4 py-14">
        <div className=" flex justify-between gap-3">
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
              className="wgl-button text-gray-600 no-underline relative px-8 py-3 z-1 font-semibold rounded-full  transition-all duration-300"
            >
              MORE SERVICES
            </a>
          </div>

          {/* Right Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/5">
            {/* Service Box 01 */}
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <span className="hover-line text-4xl font-bold text-gray-400">01</span>
                <span className="hover-line vc-line"></span>
                
              </div>
              <h3 className="text-2xl font-semibold mb-4">UI/UX Experience</h3>
              <p className="text-gray-600">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies. Plus, our experience demonstrates our
                ability.
              </p>
              <img src={infoimg} alt="Service" className="service-image" />
            </div>

            {/* Service Box 02 */}
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <span className="hover-line text-4xl font-bold text-gray-400">02</span>
                <span className="hover-line vc-line"></span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies. Plus, our experience demonstrates our
                ability.
              </p>
              <img src={infoimg2} alt="Service" className="service-image" />
            </div>

            {/* Service Box 03 */}
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <span className=" hover-line text-4xl font-bold text-gray-400">03</span>
                <span className=" hover-line vc-line"></span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies. Plus, our experience demonstrates our
                ability.
              </p>
              <img src={infoimg3} alt="Service" className="service-image" />
            </div>

            {/* Service Box 04 */}
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <span className="hover-line text-4xl font-bold text-gray-400">04</span>
                <span className="hover-line  vc-line"></span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Product Design</h3>
              <p className="text-gray-600">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies. Plus, our experience demonstrates our
                ability.
              </p>
              <img src={infoimg4} alt="Service" className="service-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


