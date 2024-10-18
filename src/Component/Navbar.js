import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import footerData from "../Data/footerData.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const services = footerData.services;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <nav className="py-4 pl-[1rem] md:pl-[2.5rem] px-10 relative z-10">
        <div className="mx-auto flex justify-between items-center source-code-pro">
          <div className="font-bold text-xl" data-aos="fade-right">
            <Link to="/">
              <img src="/images/infinity.png" alt="logo" className="logo" />
            </Link>
          </div>

          {/* Desktop Navigation (unchanged) */}
          <div className="hidden md:flex space-x-8 gap-4 uppercase items-center font-bold text-center" data-aos="fade-up">
            {["Home", "About", "Services", "Portfolio", "Blog"].map((item, index) => (
              <div key={index} className={item === "Services" ? "dropdown relative" : "relative arimo-bold text-[14px] tracking-[2px]"}>
                {item === "Home" ? (
                  <Link className="nav-link no-underline arimo-bold text-[14px] tracking-[2px]" to="/">
                    Home
                    <span className="menu-item_dots"></span>
                  </Link>
                ) : item === "Services" ? (
                  <>
                    <Link className="nav-link relative dropdown-toggle no-underline arimo-bold !text-[14px] tracking-[2px]" to="#!" role="button" data-toggle="dropdown" aria-expanded="false">
                      Services
                      <span className="menu-item_dots"></span>
                      <div className="dropdown-menu absolute transition-[0.4s] bg-transparent">
                        <div className="capitalize !p-7 bg-white mt-4">
                          {services.map((service, index) => (
                            <Link key={index} className="dropdown-item text-[#232323] bg-white my-1 relative text-[16px] font-medium tracking-[1px] hover:!text-[#ec008c]" to={`/${service.link}`}>
                              {service.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </>
                ) : (
                  <Link className="nav-link no-underline arimo-bold text-[14px] tracking-[2px]" to={`/${item.toLowerCase()}`}>
                    {item}
                    <span className="menu-item_dots"></span>
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="inline-block px-8 sm:px-10 lg:px-[20px] hover:bg-custom-btn text-[16px] text-center font-[400] bg-[#393939] text-white py-1 rounded-full tracking-wide transition duration-200">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300" onClick={() => setIsOpen(false)}></div>
            <div className="absolute top-0 left-0 w-full bg-white p-5">
              <div className="flex justify-between items-center mb-4">
                {/* <h2 className="text-xl font-bold">Menu</h2> */}
                <button onClick={() => setIsOpen(false)} className="text-xl">
                  <i className="fa-solid fa-times"></i> {/* Close button */}
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                {["Home", "About", "Services", "Portfolio", "Blog"].map((item, index) => (
                  <div key={index}>
                    {item === "Services" ? (
                      <>
                        <Link className="nav-link relative dropdown-toggle no-underline arimo-bold text-[16px]" to="#!" onClick={(e) => {
                          e.preventDefault();
                          setIsOpen((prev) => !prev); // Toggle services menu
                        }}>
                          Services
                          <span className="menu-item_dots"></span>
                        </Link>
                        <div className="dropdown-menu absolute bg-white mt-2">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              className="dropdown-item text-[#232323] my-1 block text-[16px] font-medium tracking-[1px] hover:!text-[#ec008c] px-4 py-2"
                              to={`/${service.link}`}
                              onClick={() => setIsOpen(false)} // Close menu on click
                            >
                              {service.text}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        className="nav-link no-underline arimo-bold text-[16px]"
                        to={`/${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)} // Close the menu on link click
                      >
                        {item}
                      </Link>
                    )}
                  </div>
                ))}
                <Link to="/contact" className="inline-block bg-[#393939] text-white py-2 px-4 rounded text-center font-bold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
