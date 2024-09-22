import React, { useState } from "react";

const BenefitsSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Log data to check its structure
  console.log(data);

  // Check if data is defined and has benefits
  if (!data || !data.benefits) {
    return <p>No benefits available.</p>; // Display a message if no data is available
  }

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 px-10">
          <div className="mb-4 w-[450px]">
            {/* Use dynamic section title and subtitle */}
            <span className="text-orange-500 font-bold mb-4">{data.sectionTitle}</span>
            <h3 className="text-4xl font-bold mt-3 mb-3">
              {data.sectionSubtitle}
            </h3>
          </div>

          <div className="space-y-2">
            {data.benefits.map((benefit, index) => (
              <div key={index}>
                <h4
                  className={`cursor-pointer text-2xl font-semibold py-2 flex items-center hover:text-orange-500 transition duration-300 ease-in-out ${
                    activeIndex === index ? "text-orange-600" : "text-gray-800"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <span className="mr-2 text-orange-600">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                  {benefit.title}
                </h4>

                <div
                  className={`overflow-hidden transition-max-height duration-300 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-600 mt-2">
                    {activeIndex === index && (
                      <p className="text-[16px] font-normal leading-7 pt-[3px] px-[35px] py-[15px]">
                        {benefit.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 flex justify-center">
          <img
            src="https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/home1_arrow_bg.png"
            alt="Business Growth"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
