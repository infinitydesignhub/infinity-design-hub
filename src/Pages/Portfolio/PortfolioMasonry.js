import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import data from "./portfolio.json"; // Update with your JSON data path

const categories = [
  { name: "All", filter: "All" },
  { name: "Branding", filter: "Branding" },
  { name: "Logo Design", filter: "Logo Design" },
  { name: "Printing-solutions", filter: "Printing-solutions" },
  { name: "Social Media", filter: "Social Media" },
  { name: "Website design", filter: "Website design" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(5);

  const filteredProjects =
    activeCategory === "All"
      ? data
      : data.filter((project) => project.category.includes(activeCategory));

  return (
    <div className="wgl-portfolio_wrapper container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="wgl-portfolio_header mb-6 flex flex-col md:flex-row justify-between p-2">
        <div className="item_title">
          <div className="portfolio_subtitle text-[#ec008c] font-bold mb-4">
            DISCOVER OUR CASES
          </div>
          <h3 className="portfolio_title text-3xl sm:text-4xl font-bold mt-3 mb-3 text-[#232323]">
            Latest Projects
          </h3>
        </div>
        <div className="flex flex-wrap md:flex-nowrap space-x-2">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-3 py-2 rounded transition font-bold ${
                activeCategory === category.name
                  ? "text-[#ec008c]"
                  : "text-black"
              }`}
              onClick={() => {
                setActiveCategory(category.name);
                setVisibleItems(2); // Reset to the initial number when category changes
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <Box>
          {/* Masonry with responsive columns */}
          <Masonry
            columns={{ xs: 1, sm: 2 }} // Set 1 column on small screens, 2 on larger
            spacing={5}
          >
            {filteredProjects.slice(0, visibleItems).map((project) => (
              <div key={project.id} className="hover relative">
                <Link
                  to={`/portfolio/${
                    project.title
                      ? project.title.replace(/\s+/g, "-").toLowerCase()
                      : ""
                  }`}
                  className="block"
                >
                  <img
                    srcSet={`${project.image}?w=162&auto=format&dpr=2 2x`}
                    src={`${project.image}?w=162&auto=format`}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  />
                  <div className="item__description">
                    <div className="text-white text-center">
                      <div className="post_cats">
                        {project.category.map((cat) => (
                          <span key={cat} className="portfolio-category">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h5 className="title">{project.title}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Masonry>
        </Box>
      </div>

      {/* Load more button */}
      {visibleItems < filteredProjects.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              setVisibleItems((prevVisibleItems) => prevVisibleItems + 5)
            }
            className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 my-5"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
