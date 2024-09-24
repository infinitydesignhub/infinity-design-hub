import React from 'react';

const data = [
  {
    title: "Wordmark",
    imgSrc: "//images.ctfassets.net/ut3b8hvmmy58/2PxfOCfnKD19ajwmzA0ulS/739882f93bcb2b4a3af7e9a50e595743/infinity.png",
    alt: "Wordmark"
  },
  {
    title: "Lettermark",
    imgSrc: "//images.ctfassets.net/ut3b8hvmmy58/5eDcUGNXxgKFpcMoZN2tky/b63a3dc5cf5a08a154e1441cac863a60/home1_arrow_bg.png",
    alt: "Lettermark"
  },
  {
    title: "Symbol Mark",
    imgSrc: "//images.ctfassets.net/ut3b8hvmmy58/2PxfOCfnKD19ajwmzA0ulS/739882f93bcb2b4a3af7e9a50e595743/infinity.png",
    alt: "Symbol Mark"
  },
  {
    title: "Combination Mark",
    imgSrc: "//images.ctfassets.net/ut3b8hvmmy58/6nqBaxXo8Rjg2USqGMInNR/fcd44c5a9f8fd8694eb347686322ae8d/homepage-9_2.jpg",
    alt: "Combination Mark"
  }
];

const Flipbox = ({ title, imgSrc, alt }) => (
  <div className="w-full sm:w-1/2 md:w-1/4 p-4">
    <div className="wgl-flipbox type_flip_right">
      <div className="wgl-flipbox_wrap">
        <div className="wgl-flipbox_front p-4 border rounded">
          <h3 className="wgl-flipbox_title"><span>{title}</span></h3>
        </div>
        <div className="wgl-flipbox_back p-4 border rounded shadow-lg bg-gray-100">
          <img src={imgSrc} alt={alt} className="w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
);

const FlipboxGrid = () => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-wrap -mx-4">
        {data.map((item, index) => (
          <Flipbox key={index} title={item.title} imgSrc={item.imgSrc} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default FlipboxGrid;
