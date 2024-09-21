import React from 'react';

const VisionSection = () => {
  const data = {
    vision: {
      title: "Empowering Brands, Together",
      content: [
        "We envision a world where every brand possesses a distinctive identity that stands out and leaves a lasting impression."
      ],
      buttonText: "READ MORE",
      buttonLink: "https://wgl-dsites.net/bili/light/services/",
      imageSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/08/home6-1.jpg"
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-12 flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <img
          loading="lazy"
          decoding="async"
          src={data.vision.imageSrc}
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mt-2">{data.vision.title}</h3>
        </div>

        <div className="mb-6">
          {data.vision.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <a
          href={data.vision.buttonLink}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg mt-6"
        >
          {data.vision.buttonText}
        </a>
      </div>
    </section>
  );
};

export default VisionSection;
