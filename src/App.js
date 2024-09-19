// App.js
import React, { useEffect } from "react";
import { Route, Routes} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import Home from "./Pages/Home";



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
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
