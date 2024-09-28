import React from 'react';

const GetInTouch = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-[60px] md:gap-[0px] justify-between items-center md:items-start">
        <div className="text-center">
          <h3 className="font-bold dblh__title">
            <span className="dblh__title-1">Get in</span>
            <span className="dblh__title-2">Touch</span>
          </h3>
        </div>
        <div className="btn-circle">
          <a
            className="btn-size-lg  w-full lg:w-auto bg-blue-500 text-white  text-lg"
            href="https://wgl-dsites.net/bili/light/contacts/"
            role="button"
          >
            SEND US A MESSAGE
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default GetInTouch;
