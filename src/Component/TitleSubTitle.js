import React from 'react';

const pricingData = {
  subtitle: "PRICING PLANS",
  title: "Explore Our Digital Pricing Plans"
};

const TitleSubTitle = () => {
  return (
    <section className="max-w-7xl mx-auto py-8">
      <div className="px-4">
        <div className="w-full">
          <div className="text-center mb-8">
            <div className="text-lg text-gray-600 mb-2">
              <span>{pricingData.subtitle}</span>
            </div>
            <h3 className="text-2xl font-bold">
              <span>{pricingData.title}</span>
            </h3>
          </div>
          <div className="h-8"></div> {/* Spacer equivalent */}
        </div>
      </div>
    </section>
  );
};

export default TitleSubTitle;
