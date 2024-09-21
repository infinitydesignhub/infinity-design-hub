import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const data = [
    {
      subtitle: "Research & Planning",
      title: "first step",
      image: "/images/homepage-9_6.jpg",
      link: "/blog/",
      bgColor: "#EAEAEA" // Light blue background
    },
    {
      subtitle: "Design & Development",
      title: "second step",
      image: "/images/homepage-9_7.jpg",
      link: "/blog/",
      bgColor: "#ff7425" // Light green background
    },
    {
      subtitle: "Customize & Testing",
      title: "third step",
      image: "/images/homepage-9_8.jpg",
      link: "/blog/",
      bgColor: "black" // Light yellow background
    }
  ];

  return (
    <div className="blog container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Steps</h1>
      <section className="flex flex-wrap justify-between">
        {data.map((step, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <div
              className="elementor-widget-wrap rounded-lg shadow-md p-6 flex flex-col items-center"
              style={{ backgroundColor: step.bgColor }}
            >              <div className="mb-4">
                <span className="text-sm text-gray-600 dblh__subtitle">{step.subtitle}</span>
                <h2 className="text-lg font-semibold dblh__title-wrapper">{step.title}</h2>
              </div>
              <img
                className="w-full h-auto rounded-md mb-4"
                src={step.image}
                alt={step.title}
              />
              <Link
                to={step.link}
                className="wgl-button bg-blue-500 text-black py-2 px-4 rounded-lg transition duration-300"
              >
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
