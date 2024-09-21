import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMailBulk, FaPhone } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

      <nav className=" p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center source-code-pro">
          <div className="font-bold text-xl" data-aos="fade-right">
            <Link to="/">
              <img
                src="/images/infinity.png"
                alt="logo"
                className="logo"
              />
            </Link>
          </div>
          <div
            className="hidden md:flex space-x-8 uppercase font-bold text-center"
            data-aos="fade-up"
          >
            <div className="dropdown">
              <Link
                className="nav-link  no-underline"
                to="/"
                role="button"
              >
                Home
              </Link>
            </div>
            <div className="dropdown">
              <Link
                className="nav-link  no-underline"
                to="/about"
                role="button"
              >
                About
              </Link>
            </div>
            <div className="dropdown">
              <Link
                className="nav-link  no-underline"
                to="/services"
                role="button"
              >
                Services
              </Link>
            </div>
            <div className="dropdown">
              <Link
                className="nav-link  no-underline"
                to="/portfolio"
                role="button"
              >
                Portfolio
              </Link>
            </div>
            <div className="dropdown">
              <Link
                className="nav-link  no-underline"
                to="/contact"
                role="button"
              >
                Contact
              </Link>
            </div>
          </div>

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
          <div className="md:hidden flex flex-col items-center space-y-4 pt-4">
            <Link
              className="hover:text-orange-400 uppercase"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-orange-400 uppercase"
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              className="hover:text-orange-400 uppercase"
              to="/services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              className="hover:text-orange-400 uppercase"
              to="/portfolio"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              className="hover:text-orange-400 uppercase"
              to="/contacts"
              onClick={() => setIsOpen(false)}
            >
              Contacts
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
