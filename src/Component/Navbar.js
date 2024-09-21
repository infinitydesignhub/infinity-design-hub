import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <nav className="p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center source-code-pro">
          <div className="font-bold text-xl" data-aos="fade-right">
            <Link to="/">
              <img src="/images/infinity.png" alt="logo" className="logo" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 uppercase font-bold text-center" data-aos="fade-up">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <div className="dropdown" key={item}>
                <Link className="nav-link no-underline" to={`/${item.toLowerCase()}`} role="button">
                  {item}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Contact Icons (Desktop) */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <i className="fa-solid fa-envelope text-xl cursor-pointer"></i>
              </div>
              <div className="relative">
                <i className="fa-solid fa-phone text-xl cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)}></i>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pt-4 bg-black text-white">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link
                className="hover:text-orange-400 uppercase"
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                key={item}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
