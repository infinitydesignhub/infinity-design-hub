import React from 'react';

const FeaturesSection = ({ data }) => {
  // Log data to check its structure
  console.log(data);

  // Check if data is defined and has features
  if (!data || !data.features) {
    return <p>No features available.</p>; // Display a message if no data is available
  }

  return (
    <div className="py-16 wgl-double-heading">
      <section className="container mx-auto text-center mb-3 dblh__title-wrapper">
        <h2 className="text-3xl font-semibold text-[128px] leading-[36px] dblh__title-2">{data.title}</h2>
      </section>

      <section className="container mx-auto row justify-between">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-1 d-flex justify-content-center"
            style={{
              marginTop: index % 2 === 1 ? '40px' : '0px', // 40px for odd indices
              marginBottom: index % 2 === 0 ? '-40px' : '0px' // -40px for even indices
            }}
          >
            <div className="wgl-infobox_wrapper bg-gradient-to-r from-blue-500 to-blue-300 p-4 rounded-lg d-flex flex-column align-items-center">
              <img
                loading="lazy"
                decoding="async"
                width="80"
                height="80"
                src={feature.imgSrc}
                alt=""
                className="mb-4"
              />
              <p className="text-center">
                {feature.text.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeaturesSection;
