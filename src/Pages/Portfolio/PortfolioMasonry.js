import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './portfolio.json'; // Update with your JSON data path
import Masonry from 'react-masonry-css';

const categories = [
  { name: 'All', filter: 'All' },
  { name: 'Design', filter: 'Design' },
  { name: 'Development', filter: 'Development' },
  { name: 'Marketing', filter: 'Marketing' },
  { name: 'Technology', filter: 'Technology' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(4); // Initial number of items to display

  const filteredProjects = activeCategory === 'All'
    ? data
    : data.filter(project => project.category.includes(activeCategory));

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4); // Load 4 more items
  };

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1
  };

  return (
    <div className="wgl-portfolio_wrapper container">
      <div className="wgl-portfolio_header mb-6 flex justify-between p-2 px-4">
        <div className="item_title">
          <div className="portfolio_subtitle text-orange-500 font-bold mb-4">DISCOVER OUR CASES</div>
          <h3 className="portfolio_title text-4xl font-bold mt-3 mb-3">Latest Projects</h3>
        </div>
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded transition font-bold ${activeCategory === category.name ? 'text-orange-600' : 'text-black'}`}
              onClick={() => {
                setActiveCategory(category.name);
                setVisibleItems(4); // Reset to the initial number when category changes
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex"
        columnClassName="masonry-column"
      >
        {filteredProjects.slice(0, visibleItems).map(project => (
          <div key={project.id} className="relative p-4 group">
            <Link to={`/portfolio/${project.title ? project.title.replace(/\s+/g, '-').toLowerCase() : ''}`} className="block">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <div className="post_cats">
                    {project.category.map(cat => (
                      <span key={cat} className="portfolio-category">{cat}</span>
                    ))}
                  </div>
                  <h5 className="title">{project.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>

      {visibleItems < filteredProjects.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreItems}
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
