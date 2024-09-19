// App.js
import React, { useEffect } from "react";
import { Route, Routes} from 'react-router-dom';
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
// import RatingSidebar from "./Component/RatingSidebar";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      {/* <RatingSidebar/> */}
     <WhatsAppIcon/>
    </div>
  );
}

export default App;
