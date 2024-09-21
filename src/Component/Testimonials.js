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

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`elementor-swiper-button elementor-swiper-button-prev ${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <i className="flaticon flaticon-left" >
        <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF">
          <path d="M13.435 8.70711C13.8256 8.31658 13.8256 7.68342 13.435 7.29289L7.07107 0.928932C6.68054 0.538408 6.04738 0.538408 5.65685 0.928932C5.26633 1.31946 5.26633 1.95262 5.65685 2.34315L11.3137 8L5.65685 13.6569C5.26633 14.0474 5.26633 14.6805 5.65685 15.0711C6.04738 15.4616 6.68054 15.4616 7.07107 15.0711L13.435 8.70711ZM0 9H12.7279V7L0 7L0 9Z"></path>
        </svg>
      </i>

    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`elementor-swiper-button elementor-swiper-button-next ${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      aria-label="Next slide"
    >
      <i className="flaticon flaticon-right">
        <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
          <path d="M13.435 8.70711C13.8256 8.31658 13.8256 7.68342 13.435 7.29289L7.07107 0.928932C6.68054 0.538408 6.04738 0.538408 5.65685 0.928932C5.26633 1.31946 5.26633 1.95262 5.65685 2.34315L11.3137 8L5.65685 13.6569C5.26633 14.0474 5.26633 14.6805 5.65685 15.0711C6.04738 15.4616 6.68054 15.4616 7.07107 15.0711L13.435 8.70711ZM0 9H12.7279V7L0 7L0 9Z"></path>
        </svg>
      </i>
    </button>
  );
};

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="testimonials py-12 container">
      <div className="row justify-between align-items-center">
        <div className="col-md-4 d-none d-md-block">
          <img
            loading="lazy"
            decoding="async"
            width="510"
            height="510"
            src="https://wgl-dsites.net/bili/light/wp-content/uploads/2022/11/h8-6.png"
            alt=""
            className="w-100 h-auto"
          />
        </div>
        <div className="col-md-8 col-12">
          <Slider {...settings}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="d-flex row items-center p-4 mb-4">
                <div className="col-4 author__thumbnail me-3 d-flex flex-column align-items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.author} photo`}
                    className="w-20 h-20 rounded-circle mb-2"
                  />
                  <div className="item__author text-center">
                    <h3 className="author__name text-xl mb-0">{testimonial.author}</h3>
                    <span className="author__position text-gray-400">{testimonial.position}</span>
                  </div>
                </div>
                <div className="col-7 item__content">
                  <div className="item__quote text-lg  !pl-28">{testimonial.quote}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
