import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
  const counters = [
    { value: 10, title: "Years of Experience" },
    { value: 18, title: "Skilled Professionals" },
    { value: 32, title: "Visited Conferences" },
    { value: 1000, title: "Projects Worldwide", isK: true }, // Added "isK" for handling 'K'
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Spacer */}
              <div className="mb-4">
                <div className="h-4"></div>
              </div>
              
              {/* Counter */}
              <div className="text-4xl font-bold text-gray-800">
                {hasAnimated ? (
                  <CountUp
                    start={0}
                    end={counter.value}
                    duration={2} // Animation duration in seconds
                    suffix={counter.isK ? 'K' : ''}
                  />
                ) : (
                  0 // Show "0" before the animation starts
                )}
              </div>
              <h3 className="mt-2 text-xl text-gray-600">
                {counter.title}
              </h3>

              {/* Spacer */}
              <div className="mt-4">
                <div className="h-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
