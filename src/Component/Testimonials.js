import React from 'react';
import Slider from 'react-slick';

const testimonialsData = [
  {
    id: 1,
    quote: "“Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
    author: "Monica Regan",
    position: "CLIENT OF AGENCY",
    image: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/testimonials_1-340x340.jpg",
  },
  {
    id: 2,
    quote: "“Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
    author: "Megan Olson",
    position: "CLIENT OF AGENCY",
    image: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/testimonials_2-340x340.jpg",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonials flex flex-col md:flex-row items-center py-12">
      <div className="md:w-1/3 hidden md:block">
        <img 
          loading="lazy" 
          decoding="async" 
          width="510" 
          height="510" 
          src="https://wgl-dsites.net/bili/light/wp-content/uploads/2022/11/h8-6.png" 
          alt="" 
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-2/3 w-full">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 text-white p-6 mb-6 rounded-lg shadow-md">
              <div className="item__content">
                <div className="item__quote text-lg mb-4">{testimonial.quote}</div>
              </div>
              <div className="item__author flex items-center mt-4">
                <div className="author__thumbnail">
                  <img src={testimonial.image} alt={`${testimonial.author} photo`} className="w-20 h-20 rounded-full" />
                </div>
                <div className="author__meta ml-4">
                  <h3 className="author__name text-xl">{testimonial.author}</h3>
                  <span className="author__position text-gray-400">{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
