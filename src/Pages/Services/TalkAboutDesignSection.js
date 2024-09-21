import React from 'react';

const TalkAboutDesignSection = () => {
  const data = {
    title: "Let’s Talk About Design",
    imageSrc1: "https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-9_2.jpg",
    description: "Our agency specializes in a variety of areas such as graphic design, web design, branding, advertising, product design, and user experience design.",
    imageSrc2: "https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-9_1.jpg",
    buttons: [
      {
        text: "about agency",
        link: "https://wgl-dsites.net/bili/light/contacts/"
      },
      {
        text: "get in touch",
        link: "https://wgl-dsites.net/bili/light/contacts/"
      }
    ]
  };

  return (
    <section className="max-w-7xl mx-auto py-12 flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{data.title}</h2>
        </div>
        <div className="mb-4">
          <img
            loading="lazy"
            decoding="async"
            src={data.imageSrc1}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <p className="mb-6">{data.description}</p>
        <div className="flex space-x-4">
          {data.buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className="wgl-button btn-size-lg inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-6">
          <img
            loading="lazy"
            decoding="async"
            src={data.imageSrc2}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TalkAboutDesignSection;
