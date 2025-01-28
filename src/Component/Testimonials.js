import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialsData = [
  {
    id: 1,
    quote: "“Infinity Design hub and its team is an exceptional team who have helped raamah group in changing its face from designing the new logo, website and social media designing.”",
    author: "Raama Group",
    position: "Construction company",
    image: "./rama.png",
  },
  {
    id: 2,
    quote: "“Outstanding work from owner..I was searching for logo for my brand..I tried many designer but didn't work..my friend gave me reference of infinity design. They have me wide options for logo.. finally they Did it..we got our most creative logo. Thanks.”",
    author: "Hardik",
    position: "CLIENT OF AGENCY",
    image: "./Hardik.png",
  },
  {
    id: 3,
    quote: "“Infinity designhub is the one platform where i get the solution of all my branding things. They have designed my logo, brochure, stationery and social media as i needed. I am surely gonna contact again for my future worries like website design and many more. I highly recommend to everyone. Best branding agency!”",
    author: "patel vatsal",
    position: "CLIENT OF AGENCY",
    image: "./vatsal.png",
  },
  {
    id: 4,
    quote: "“Infinity designhub is the one platform where i get the solution of all my branding things. They have designed my logo, brochure, stationery and social media as i needed. I am surely gonna contact again for my future worries like website design and many more. I highly recommend to everyone. Best branding agency!”",
    author: "patel vatsal",
    position: "CLIENT OF AGENCY",
    image: "./vatsal.png",
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
      <i className="flaticon flaticon-left">
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
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="testimonials py-5">
    <div className='container container-lg mx-auto'>
      <div className="row justify-between align-items-center">
        <div className="col-md-4 d-none d-md-block">
          <img
            loading="lazy"
            decoding="async"
            src="/images/Review-Home-page.jpg"
            alt="review"
            className="img-fluid rounded-full"
          />
        </div>
        <div className="col-md-8 col-12">
          <Slider {...settings}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="d-flex row align-items-center p-4 mb-4" data-aos="fade-up">
                <div className="col-4 author__thumbnail d-flex flex-column align-items-center">
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
                <div className="col-8 item__content">
                  <div className="item__quote text-lg">{testimonial.quote}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
