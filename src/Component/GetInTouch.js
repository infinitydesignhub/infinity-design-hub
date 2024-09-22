import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section className="container mx-auto py-16">
      <div className="flex justify-between items-start" data-aos="fade-up"> {/* Add animation attribute */}
        <div className="text-center">
          <h3 className="font-bold dblh__title">
            <span className="dblh__title-1">Get in</span>
            <span className="dblh__title-2">Touch</span>
          </h3>
        </div>
        <div className="btn-circle">
          <Link
            className="btn-size-lg w-full lg:w-auto bg-blue-500 text-white text-lg"
            to="/contact"
            role="button"
            data-aos="zoom-in" // Add animation attribute for button
          >
            SEND US A MESSAGE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
