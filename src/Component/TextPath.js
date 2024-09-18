
import React from 'react';
import './Component.css'

const data = {
  "text": "LATEST CASES",
  "svgPath": "M18.6742 30.3182L13.2701 30.2776L13.1406 13.0492L13.1316 11.8549L12.287 12.6994L5.30318 19.6833L1.44794 15.828L15.7504 1.52543L30.2803 16.0555L26.4931 19.8426L19.3983 12.7477L18.5355 11.8849L18.5447 13.105L18.6742 30.3182Z"
};

const TextPath = () => {
  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          {/* Looping Text */}
          <div className="animate-loop whitespace-nowrap text-center flex items-center justify-center text-4xl">
            <span className="text-[40px] font-bold mx-4 text-orange-600">
              {data.text}
            </span>
            <span className="inline-block mx-4 text-orange-600">
              <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-600 ">
                <path d={data.svgPath}  />
              </svg>
            </span>
            <span className="text-4xl font-bold mx-4 text-black">
              {data.text}
            </span>
            <span className="inline-block mx-4">
              <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d={data.svgPath} />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextPath;
