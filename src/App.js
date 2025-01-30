// src/App.js
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import '../src/dist/aos.css'
import './custom-bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import WhatsAppIcon from "./Component/WhatsAppIcon";
import PhoneIcon from "./Component/PhoneIcon";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import PortfolioDetails from "./Pages/PortfolioDeatils/PortfolioDetails";
import BlogSection from "./Pages/Blog/BlogSection";
import BlogDetails from "./Pages/Blog/BlogDetails";
import NotFound from './Pages/NotFound'; // Import your NotFound component

function getBodyClass(pathname) {
  // Remove leading/trailing slashes and convert to kebab-case
  const formattedPath = pathname.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '-');
  return formattedPath ? `${formattedPath}-class` : 'default-class';
}

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200, // Adjust this value as needed
    });

    // Generate the body class based on the current path
    const bodyClass = getBodyClass(location.pathname);

    // Add the class to the body
    document.body.classList.add(bodyClass);

    // Cleanup function to remove the class when the component unmounts or when the path changes
    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [location.pathname]);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        img.setAttribute('loading', 'lazy');
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/services/:slug" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:title" element={<PortfolioDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 page */}
      </Routes>
      <Footer />
      <ScrollToTop />
      <PhoneIcon/>
      <WhatsAppIcon />
    </div>
  );
}

export default App;
