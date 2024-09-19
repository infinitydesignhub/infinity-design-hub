import React from 'react';

const GetInTouch = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="flex flex-col items-start">
        <div className="text-center">
          <h3 className="text-3xl font-bold">
            <span className="block">Get in</span>
            <span className="block">Touch</span>
          </h3>
        </div>
        <div className="mt-4">
          <a
            className="w-full lg:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-lg"
            href="https://wgl-dsites.net/bili/light/contacts/"
            role="button"
          >
            SEND US A MESSAGE
          </a>
        </div>
        <div className="my-4"></div> {/* Spacer */}
      </div>
    </section>
  );
};

export default GetInTouch;
