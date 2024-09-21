import React from 'react';

const WhyUs = () => {
  const data = {
    about: {
      subtitle: "Who We Are",
      // title: "Unique Digital Ideas for Successful Business",
      description: "Welcome to Infinity DesignHub! I’m Kavita, and in 2019, I embarked on a journey to create a space where creativity meets strategy. Based in California, my team and I—spread across the USA and India—are passionate about providing 360-degree branding solutions. From designing eye-catching logos and stunning graphics to crafting dynamic websites and high-quality printing, we pour our hearts into elevating brands and transforming visions into reality. Together, we handle global marketing demands, ensuring every brand we touch shines brightly.",
      buttonText: "GET IN TOUCH",
      buttonLink: "/contact",
      imageSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/about-sl-1.jpg"
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
          <img
            loading="lazy"
            decoding="async"
            src={data.about.imageSrc}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-6 px-2 mt-4">
            <span className="text-gray-600 text-xl font-bold">{data.about.subtitle}</span>
            <h3 className="text-3xl font-semibold mt-2">{data.about.title}</h3>
          </div>
          <p className="mb-6 p-3 text-[18px] leading-[29px]">{data.about.description}</p>
          {/* <a
            href={data.about.buttonLink}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {data.about.buttonText}
          </a> */}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
