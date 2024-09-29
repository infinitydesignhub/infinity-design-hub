import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientData from '../Data/ClientData.json'; // Import the JSON data

const ClientSlider = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(clientData.clients); // Set the clients from JSON data
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Duration between slides
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
    <section className="py-24 my-12">
      <div className="custom-container mx-auto text-center">
        <h2 className="text-black text-2xl mb-12">OVER 1K+ SOFTWARE BUSINESSES GROWING WITH BILI</h2>
        <Slider {...settings}>
          {clients.map(client => (
            <div key={client.id} className="!w-[80px] !h-[80px] overflow-hidden flex gap-4 justify-center items-center">
              <img
                src={client.imgSrc}
                alt={`Partner ${client.id}`}
                className="w-full h-full object-contain transition-all duration-300 grayscale hover:filter-none"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientSlider;
