import React from 'react';

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
  return (
    <section className="pricing_plan py-[96px] flex flex-col items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-white mb-8">Explore Our Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative shadow-md rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${plan.backgroundImage})`,
                backgroundColor: '#232323',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                padding: '50px 20px',
                color: 'white',
              }}
            >
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold">{plan.title}</h4>
                <div className="text-lg">
                  <span className="text-gray-300">${plan.price}/</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>
              <div className="mb-4">
                <ul className="list-disc list-inside text-left space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-300">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <a
                  className="wgl-button transition duration-200"
                  href="https://wgl-dsites.net/bili/light/contacts/"
                  role="button"
                >
                  <span>
                  CHOOSE PLAN
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
