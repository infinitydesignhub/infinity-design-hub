import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Replace with actual cart count state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* <nav className="bg-gray-800 top-fixed p-2">
         <div className="flex justify-between mx-auto container">
      
          <h4  className="px-4 py-2  font-semibold rounded  transition-all"
            data-aos="fade-right">Envoto market</h4>
      <button
            className="px-4 py-2 bg-green-500 font-semibold rounded hover:bg-orange-600 transition-all"
            data-aos="fade-left"
          >
            Buy Now
          </button>
          </div> 
      </nav> */}
      <nav className=" p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center source-code-pro">
          {/* Logo */}
          <div className="font-bold text-xl" data-aos="fade-right">
            <Link to="/">
              <img
                src="https://www.infinitydesignhub.com/wp-content/uploads/2021/05/Infinity-Logo-Black-Pink-e1621100265589.png"
                className="logo"
              />
            </Link>
          </div>

          {/* Centered Links with Dropdown */}
          <div
          className="hidden md:flex space-x-8 uppercase font-bold text-center"
          data-aos="fade-up"
        >
          {/* Home Dropdown */}
          <div className="dropdown">
            <Link
              className="nav-link  no-underline"
              to="/"
              role="button"
            >
              Home
            </Link>
            {/* <ul className="dropdown-menu bg-black">
              <li>
                <Link className="dropdown-item  to="/">
                  Option 1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/">
                  Option 2
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/">
                  Option 3
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/">
                  Option 4
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Pages Dropdown */}
          <div className="dropdown">
            <Link
              className="nav-link  no-underline"
              to="/pages"
              role="button"
            >
              Pages
            </Link>
            {/* <ul className="dropdown-menu bg-black">
              <li>
                <Link
                  className="dropdown-item 
                  to="/pages/option1"
                >
                  Option 1
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item 
                  to="/pages/option2"
                >
                  Option 2
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item 
                  to="/pages/option3"
                >
                  Option 3
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item 
                  to="/pages/option4"
                >
                  Option 4
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Similar dropdowns for Blog, Portfolio, Shop, and Contacts */}
          <div className="dropdown">
            <Link
              className="nav-link  no-underline"
              to="/blog"
              role="button"
            >
              Blog
            </Link>
            {/* <ul className="dropdown-menu bg-black">
              <li>
                <Link className="dropdown-item  to="/blog/option1">
                  Option 1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/blog/option2">
                  Option 2
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/blog/option3">
                  Option 3
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/blog/option4">
                  Option 4
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Portfolio Dropdown */}
          <div className="dropdown">
            <Link
              className="nav-link  no-underline"
              to="/portfolio"
              role="button"
            >
              Portfolio
            </Link>
            {/* <ul className="dropdown-menu bg-black">
              <li>
                <Link
                  className="dropdown-item 
                  to="/portfolio/option1"
                >
                  Option 1
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item 
                  to="/portfolio/option2"
                >
                  Option 2
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item 
                  to="/portfolio/option3"
                >
                  Option 3
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item 
                  to="/portfolio/option4"
                >
                  Option 4
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Shop Dropdown */}
          <div className="dropdown">
            <Link
              className="nav-link  no-underline"
              to="/shop"
              role="button"
            >
              Shop
            </Link>
            {/* <ul className="dropdown-menu bg-black">
              <li>
                <Link className="dropdown-item  to="/shop/option1">
                  Option 1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/shop/option2">
                  Option 2
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/shop/option3">
                  Option 3
                </Link>
              </li>
              <li>
                <Link className="dropdown-item  to="/shop/option4">
                  Option 4
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Contacts */}
          <div className="dropdown">
            <Link className="nav-link no-underline" to="/contacts">
              Contacts
            </Link>
          </div>
        </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {/* Shopping Cart Icon */}
              <div className="relative">
                <FaShoppingCart className="text-xl cursor-pointer" />
                {cartCount > 0 && (
                  <span className="absolute top-0 left-3 bg-red-500 text-xs rounded-full px-1">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* Search Icon */}
              <div className="relative">
                <FaSearch
                  className="text-xl cursor-pointer "
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
                {isSearchOpen && (
                  <input
                    type="text"
                    className="absolute right-4 top-10 bg-slate-900 p-2 rounded shadow-lg w-64 focus:visually-hidden"
                    placeholder="Search..."
                  />
                )}
              </div>

              {/* Sidebar Toggle Icon */}
              {/* <div className=" bg-gray-800 h-9 w-9 items-center justify-center flex rounded-3xl hover:bg-gray-600">
              <FaBars
                className="text-xl cursor-pointer"
                onClick={() => setIsSidebarOpen(true)}
              />
              </div> */}
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          {/* <div className="md:hidden >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <span className="navbar-toggler-icon">☰</span>
            </button>
          </div> */}
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
              to="/pages"
              onClick={() => setIsOpen(false)}
            >
              Pages
            </Link>
            <Link
              className="hover:text-orange-400 uppercase"
              to="/blog"
              onClick={() => setIsOpen(false)}
            >
              Blog
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
              to="/shop"
              onClick={() => setIsOpen(false)}
            >
              Shop
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

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full bg-black p-6 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto w-64`}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col space-y-4 mt-4">
            {/* Add your sidebar links here */}
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>
              Home
            </Link>
            <Link to="/pages" onClick={() => setIsSidebarOpen(false)}>
              Pages
            </Link>
            <Link to="/blog" onClick={() => setIsSidebarOpen(false)}>
              Blog
            </Link>
            <Link to="/portfolio" onClick={() => setIsSidebarOpen(false)}>
              Portfolio
            </Link>
            <Link to="/shop" onClick={() => setIsSidebarOpen(false)}>
              Shop
            </Link>
            <Link to="/contacts" onClick={() => setIsSidebarOpen(false)}>
              Contacts
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
