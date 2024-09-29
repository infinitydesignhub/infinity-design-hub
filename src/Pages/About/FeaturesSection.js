import React from 'react';

const FeaturesSection = () => {
  const data = {
    title: "Tons of Features",
    features: [
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-40.png",
        text: "5 Stars\nSupport"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-41.png",
        text: "SEO\nOptimized"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-42.png",
        text: "Extensive\nDocumentation"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-43.png",
        text: "Lifetime\nUpdates"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-44.png",
        text: "Fully\nResponsive"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-45.png",
        text: "UI/UX\nDesign"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-46.png",
        text: "No Coding\nNeeded"
      },
    ]
  };

  return (
    <div className="py-16 wgl-double-heading">
      <section className="custom-container mx-auto text-center mb-3 dblh__title-wrapper">
        <h2 className="text-3xl font-semibold text-[50px] md:text-[128px] leading-[50px] md:leading-[36px] dblh__title-2">{data.title}</h2>
      </section>

      <section className="custom-container mx-auto flex flex-wrap justify-center gap-4">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="wgl-infobox_wrapper bg-gradient-to-r from-blue-500 to-blue-300 p-4 rounded-lg flex flex-col items-center"
            style={{
              marginTop: index % 2 === 1 ? '40px' : '0px', // 40px for odd indices
              marginBottom: index % 2 === 0 ? '-40px' : '0px' // -40px for even indices
            }}
          >
            <img
              loading="lazy"
              decoding="async"
              width="100"
              height="100"
              src={feature.imgSrc}
              alt=""
              className="mb-4 object-contain"
            />
            <p className="text-center">
              {feature.text.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeaturesSection;
