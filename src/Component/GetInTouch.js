import React from 'react';

const GetInTouch = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="flex justify-between items-start">
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
