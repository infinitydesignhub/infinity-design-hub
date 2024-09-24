import React, { useEffect, useState, useRef } from 'react';
import './Component.css'; // Optional: for custom styles
import data from '../Data/TextPathData.json'; // Import the JSON data

const TextPath = () => {
  const [services, setServices] = useState(data.services); // Use imported data
  const textRef = useRef(null);

  useEffect(() => {
    // Add animation class on mount
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('animate-loop');
    }
  }, []);

  if (!services.length) return null; // Handle loading state

  return (
    <section className="w-full h-full py-16">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div ref={textRef} className="whitespace-nowrap text-center flex items-center justify-center">
            {services.map((service, index) => {
              // Alternate colors: black for even index, transparent for odd
              const textColor = index % 2 === 0 ? '#232323' : ''; // Adjust as needed

              return (
                <span key={index} className="">
                  <span
                    className="text text-[130px] font-bold uppercase"
                    style={{
                      color: textColor,
                      ...(textColor === '#232323'
                        ? {}
                        : { WebkitTextStroke: '1px currentColor', WebkitTextFillColor: 'transparent' })
                    }}
                  >
                    {service.title}
                    <span className="inline-block mx-4 text-orange-600">_</span>
                  </span>
                  &nbsp;
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextPath;
