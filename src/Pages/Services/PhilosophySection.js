import React from 'react';

const PhilosophySection = () => {
  const data = {
    subtitle: "OUR PHILOSOPHY",
    title: "Create Brand Identities & Digital Experiences",
    description: "This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.",
    button: {
      text: "GET IN TOUCH",
      link: "https://wgl-dsites.net/bili/light/contacts/"
    },
    flipBoxes: [
      {
        number: "01",
        frontSubtitle: "New Business",
        frontTitle: "Innovation",
        backTitle: "Innovation",
        backContent: "This is the main factor that sets us apart from our competition."
      },
      {
        number: "02",
        frontSubtitle: "Unique Information",
        frontTitle: "Technology",
        backTitle: "Technology",
        backContent: "This is the main factor that sets us apart from our competition."
      },
      {
        number: "03",
        frontSubtitle: "Advanced Business",
        frontTitle: "Analytics",
        backTitle: "Analytics",
        backContent: "This is the main factor that sets us apart from our competition."
      },
      {
        number: "04",
        frontSubtitle: "Management System",
        frontTitle: "Services",
        backTitle: "Services",
        backContent: "This is the main factor that sets us apart from our competition."
      }
    ]
  };

  return (
    <section className="max-w-7xl mx-auto py-12 flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-6">
          <span className="text-gray-600">{data.subtitle}</span>
          <h3 className="text-3xl font-semibold">{data.title}</h3>
        </div>
        <p className="mb-6">{data.description}</p>
        <a
          href={data.button.link}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {data.button.text}
        </a>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="flex flex-wrap -mx-4">
          {data.flipBoxes.map((box, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="wgl-flipbox type_flip_right">
                <div className="wgl-flipbox_wrap">
                  <div className="wgl-flipbox_front p-4 border rounded shadow-lg bg-white">
                    <div className="media-wrapper number-wrapper">
                      <span className="wgl-number elementor-icon">
                        <span className="number">{box.number}</span>
                      </span>
                    </div>
                    <div className="wgl-flipbox_subtitle">
                      <span>{box.frontSubtitle}</span>
                    </div>
                    <h3 className="wgl-flipbox_title">
                      <span>{box.frontTitle}</span>
                    </h3>
                  </div>
                  <div className="wgl-flipbox_back p-4 border rounded shadow-lg bg-gray-100">
                    <h3 className="wgl-flipbox_title">
                      <span>{box.backTitle}</span>
                    </h3>
                    <div className="wgl-flipbox_content">
                      {box.backContent}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
