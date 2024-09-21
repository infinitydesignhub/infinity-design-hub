import React, { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import WhatsAppIcon from "./Component/WhatsAppIcon";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import PortfolioDetails from "./Pages/PortfolioDeatils/PortfolioDetails";
// import BasicPage from "./Pages/BasicPage";

function getBodyClass(pathname) {
  // Remove leading/trailing slashes and convert to kebab-case
  const formattedPath = pathname.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '-');
  return formattedPath ? `${formattedPath}-class` : 'default-class';
}

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Generate the body class based on the current path
    const bodyClass = getBodyClass(location.pathname);

    // Add the class to the body
    document.body.classList.add(bodyClass);

    // Cleanup function to remove the class when the component unmounts or when the path changes
    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [location.pathname]);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:title" element={<PortfolioDetails />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/services/:slug" element={<BasicPage />} /> */}
        {/* Add more routes here */}
      </Routes>
      <Footer />
      <ScrollToTop />
      <WhatsAppIcon />
    </div>
  );
}

export default App;
