import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/portfolio.json'; // Update with your JSON data path

const categories = [
  { name: 'All', filter: 'All' },
  { name: 'Design', filter: 'Design' },
  { name: 'Development', filter: 'Development' },
  { name: 'Marketing', filter: 'Marketing' },
  { name: 'Technology', filter: 'Technology' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? data
    : data.filter(project => project.category.includes(activeCategory));

  return (
    <div className="wgl-portfolio_wrapper">
      <div className="wgl-portfolio_header mb-6 flex justify-between p-2 px-4">
        <div className="item_title ">
          <div className="portfolio_subtitle text-orange-500 font-bold mb-4">DISCOVER OUR CASES</div>
          <h3 className="portfolio_title text-4xl font-bold mt-3 mb-3">Latest Projects</h3>
        </div>
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded transition font-bold ${activeCategory === category.name ? 'text-orange-600' : ' text-black'}`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="wgl-portfolio_container grid grid-cols-2 gap-4">
        {filteredProjects.map(project => (
          <article key={project.id} className={`portfolio__item item ${project.category.join(' ').toLowerCase()} relative group`}>
            <div className="item__wrapper description_inside_image">
              <div className="item__image">
                <img src={project.image} alt={project.title} className="w-full h-auto" />
              </div>
              <div className="item__description absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="description__wrapper text-center text-white">
                  <div className="post_cats">
                    {project.category.map(cat => (
                      <span key={cat} className="portfolio-category">{cat}</span>
                    ))}
                  </div>
                  <div className="item__title">
                    <h5 className="title">
                      <Link to={`/portfolio/${project.title ? project.title.replace(/\s+/g, '-').toLowerCase() : ''}`} className="single_link">
                        {project.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <Link to={`/portfolio/${project.title ? project.title.replace(/\s+/g, '-').toLowerCase() : ''}`} className="absolute inset-0" />
            </div>
          </article>
        ))}

      </div>
    </div>
  );
};

export default Portfolio;
