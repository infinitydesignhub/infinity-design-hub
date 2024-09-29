import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const pricingPlans = [
  {
    id: "standard",
    title: "STANDARD",
    price: 150,
    period: "per month",
    features: [
      "Up to 100 keyphrases optimized",
      "Custom dashboards: 4",
      "Content, and link monitoring",
      "Digital marketing expert",
      "Content marketing assets: 4",
    ],
    backgroundImage: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/pricing_table_1.jpg',
  },
  {
    id: "ultra",
    title: "ULTRA",
    price: 170,
    period: "per month",
    features: [
      "Up to 100 keyphrases optimized",
      "Custom dashboards: 4",
      "Content, and link monitoring",
      "Digital marketing expert",
      "Content marketing assets: 4",
    ],
    backgroundImage: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/pricing_table_2.jpg',
  },
  {
    id: "premium",
    title: "PREMIUM",
    price: 190,
    period: "per month",
    features: [
      "Up to 100 keyphrases optimized",
      "Custom dashboards: 4",
      "Content, and link monitoring",
      "Digital marketing expert",
      "Content marketing assets: 4",
    ],
    backgroundImage: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/pricing_table_3.jpg',
  },
];

const PricingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200, // Adjust this value as needed
    });
  }, []);

  return (
    <section className="py-16 text-white">
      {/* Uncomment if you want the heading */}
      {/* <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-[#ec008c] font-bold text-sm tracking-wide">PRICING PLANS</h2>
        <h3 className="text-3xl font-extrabold text-white">Explore Our Digital Pricing Plans</h3>
      </div> */}

      <div className="custom-container mx-auto">
        <div className="row justify-content-center">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up" // Add animation attribute
            >
              <div className="relative bg-black rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center">
                  <img src={plan.backgroundImage} alt={plan.title} className="w-full h-full object-cover" />
                </div>
                <div className="relative p-6 sm:p-8 mt-10 Dm Sans bg-[#232323]">
                  <h4 className="text-[14px] Dm Sans text-[#888888] mb-4">{plan.title}</h4>
                  <div className="flex items-center justify-center text-white mb-4">
                    <span className="text-4xl font-[400] text-white text-[64px] tracking-[2px]">${plan.price}/</span>
                    <span className="ml-2 text-[16px] font-[500] leading-6 max-w-[70px] inline-block">{plan.period}</span>
                  </div>
                  <ul className="text-[16px] p-3 text-white mb-6 space-y-2 ml-[-10px] leading-[30px] Dm Sans">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 text-[#ec008c] text-[30px]">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block px-8 sm:px-10 lg:px-[48px] hover:bg-custom-btn text-[16px] leading-[32px] text-center font-[400] bg-[#393939] ml-[35px] text-white py-2 rounded-full tracking-wide transition duration-200"
                  >
                    CHOOSE PLAN
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
