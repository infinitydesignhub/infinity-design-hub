import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientData = [
  {
    id: "partner1",
    imgSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/partner_1.png",
    link: "https://wgl-dsites.net/bili/light/contacts/"
  },
  {
    id: "partner2",
    imgSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/partner_2.png",
    link: "https://wgl-dsites.net/bili/light/contacts/"
  },
  {
    id: "partner3",
    imgSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/partner_3.png",
    link: "https://wgl-dsites.net/bili/light/contacts/"
  },
  {
    id: "partner4",
    imgSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/partner_4.png",
    link: "https://wgl-dsites.net/bili/light/contacts/"
  },
  {
    id: "partner5",
    imgSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/partner_5.png",
    link: "https://wgl-dsites.net/bili/light/contacts/"
  },
  {
    id: "partner6",
    imgSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/partner_6.png",
    link: "https://wgl-dsites.net/bili/light/contacts/"
  },
];

const ClientSlider = () => {
  const settings = {
    dots: false,
    arrow:false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ],
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-2xl mb-8">OVER 1K+ SOFTWARE BUSINESSES GROWING WITH BILI</h2>
        <Slider {...settings}>
          {clientData.map(client => (
            <div key={client.id} className="!flex justify-center items-center mt-8">
              <a href={client.link}>
                <img
                  src={client.imgSrc}
                  alt={`Partner ${client.id}`}
                  className="w-[50px] h-auto object-contain"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientSlider;
