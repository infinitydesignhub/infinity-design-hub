import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Masonry from "react-masonry-css";
import client from "../../client";

const PortfolioMasonry = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(5);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioResponse = await client.getEntries({
          content_type: "portfolio",
          "fields.slug": slug,
        });

        if (portfolioResponse.items.length > 0) {
          const formattedProjects = portfolioResponse.items
            .map((item) => {
              if (item && item.fields) {
                return {
                  id: item.sys.id,
                  title: item.fields.title,
                  image: item.fields.images?.[0]?.fields?.file?.url
                    ? `https:${item.fields.images[0].fields.file.url}`
                    : "",
                  category: item.fields.categories || [],
                  link: item.fields.link || "",
                };
              }
              return null;
            })
            .filter((project) => project !== null);

          setProjects(formattedProjects);

          const allCategories = new Set(["All"]);
          portfolioResponse.items.forEach((item) => {
            if (item.fields.categories) {
              item.fields.categories.forEach((cat) => {
                allCategories.add(cat);
              });
            }
          });

          setCategories([...allCategories]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

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
              key={category}
              className={`px-3 py-2 rounded transition font-bold ${
                activeCategory === category ? "text-[#ec008c]" : "text-black"
              }`}
              onClick={() => {
                setActiveCategory(category);
                setVisibleItems(5);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <Box>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {loading ? (
              <div>Loading...</div>
            ) : (
              filteredProjects.reverse().map((project) => (
                <React.Fragment key={project.id}>
                  <div className="hover relative w-auto">
                    <Link
                      to={`/portfolio/${project.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="block"
                    >
                      <img
                        srcSet={`${project.image}`}
                        src={`${project.image}`}
                        alt={project.title}
                        loading="lazy"
                        style={{ display: "block", width: "100%" }}
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
                </React.Fragment>
              
              ))
            )}
          </Masonry>
        </Box>
      </div>

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

export default PortfolioMasonry;
