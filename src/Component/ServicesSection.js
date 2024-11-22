import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = ({ approach, services }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="services py-1">
      <div className="container container-lg mx-auto px-4 py-16">
        <div className="row">
          {/* Left Content Section */}
          <div className="btn-w col-md-4 d-flex flex-column mb-5 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-[#ec008c] font-semibold text-lg mb-2">{approach.title}</h2>
            <h3 className="dblh__title-wrapper text-4xl text-[#232323] font-bold mb-7">{approach.subtitle}</h3>
            <p>{approach.dec}</p>
            <a
              href="#services"
              className="wgl-button text-gray-600 no-underline relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 w-[290px]"
            >
              MORE SERVICES
            </a>
          </div>

          {/* Right Cards Section */}
          <div className="col-md-8">
            <div className="row">
              {/* Service Boxes */}
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-box col-12 col-sm-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                  data-aos-duration="1000"
                >
                  <div className="mb-4 position-relative">
                    <img   src={service.image}  alt="CreativeExecution" width={50} className=" object-contain h-10"/>
                    <span className="hover-line vc-line"></span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#232323]">{service.title}</h3>
                  <h4 className="text-xl font-medium text-gray-500 mb-4">{service.subtitle}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
