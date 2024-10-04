import React from 'react';

const pricingData = {
  subtitle: "PRICING PLANS",
  title: "Explore Our Digital Pricing Plans"
};

const TitleSubTitle = () => {
  return (
    <section className="container container-lg mx-auto pt-16">
      <div className=" pl-[1rem] md:pl-[4.5rem] py-3">
        <div className="w-full">
          <div className="title-text">
            <div className="text-lg text-[#ec008c] mb-2 font-bold">
              <span>{pricingData.subtitle}</span>
            </div>
            <h3 className="text-[38px] text-[#232323] font-bold">
              <span>{pricingData.title}</span>
            </h3>
          </div>
          {/* <div className="h-8"></div> Spacer equivalent */}
        </div>
      </div>
    </section>
  );
};

export default TitleSubTitle;
