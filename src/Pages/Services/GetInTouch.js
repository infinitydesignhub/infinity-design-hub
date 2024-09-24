import React from 'react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="flex justify-between items-start">
        <div className="text-center">
          <h3 className="font-bold dblh__title">
            <span className="dblh__title-1">We craft branding </span>
            <span className="dblh__title-2">strategies that resonate!</span>
          </h3>
        </div>
        <div className="btn-circle">
          <Link
            className="btn-size-lg  w-full lg:w-auto bg-blue-500 text-white  text-lg"
            to="/contact"
            role="button"
          >
            Get Quote
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default GetInTouch;
