import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CounterSection = () => {
  const counters = [
    { value: 10, title: 'Years of Experience' },
    { value: 18, title: 'Skilled Professionals' },
    { value: 32, title: 'Visited Conferences' },
    { value: 10, title: 'Projects Worldwide', isK: true },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
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
      <div className="container container-lg mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center items-center">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center text-start col-md-4 text=[18px]"
              data-aos="fade-up" // Add AOS fade-up animation
            >
              {/* Number */}
              <div className="text-[130px] font-bold text-gray-800 text-webkit border-custom-gray ">
                {hasAnimated ? (
                  <CountUp
                    start={0}
                    end={counter.value}
                    duration={2}
                    suffix={counter.isK ? 'K' : ''}
                  />
                ) : (
                  0
                )}
              </div>
              {/* Title */}
              <h3 className="mt-4 text-[18px] font-medium text-[#232323] DM Sans leading-6 my-4 ml-[-10px] ">
                {counter.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
