import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Masonry from 'react-masonry-css'; // Importing from react-masonry-css
import client from '../../client'; // Import the Contentful client

const PortfolioMasonry = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(5); // Initially showing 5 items
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['All']); // Default 'All' category
  const [loading, setLoading] = useState(true);

  // Fetch the slug from the URL
  const { slug } = useParams();

  // Fetch the portfolio data from Contentful
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch portfolio items
        const portfolioResponse = await client.getEntries({
          content_type: 'portfolio', // Content type ID for portfolio
          'fields.slug': slug, // Use the slug to filter if necessary
        });
  
      
        if (portfolioResponse.items.length > 0) {
          // Format the projects and extract categories dynamically
          const formattedProjects = portfolioResponse.items.map((item) => {
            if (item && item.fields) {
              return {
                id: item.sys.id,
                title: item.fields.title,
                image: item.fields.images?.[0]?.fields?.file?.url
                  ? `https:${item.fields.images[0].fields.file.url}`
                  : '',
                category: item.fields.categories || [], // Categories field from portfolio entry
                link: item.fields.link || '',
              };
            }
            return null;
          }).filter((project) => project !== null);
  
          setProjects(formattedProjects); // Set the projects
  
          // Dynamically extract unique categories
          const allCategories = new Set(['All']); // Initialize with 'All' category
          portfolioResponse.items.forEach((item) => {
            if (item.fields.categories) {
              item.fields.categories.forEach((cat) => {
                allCategories.add(cat); // Add each category to the set
              });
            }
          });
  
          setCategories([...allCategories]); // Set the categories (convert Set to Array)
        }
  
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
        setLoading(false); // Handle errors and set loading to false
      }
    };
  
    fetchData();
  }, [slug]);
  
  // Filtered projects based on selected category
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  // Breakpoints for responsive masonry grid
  const breakpoints = {
    default: 2, // 2 items per row (default)
    1100: 2,    // 2 items per row when the screen width is 1100px or smaller
    700: 1,     // 1 item per row for screens smaller than 700px
  };

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
              className={`px-3 py-2 rounded transition font-bold ${activeCategory === category ? 'text-[#ec008c]' : 'text-black'}`}
              onClick={() => {
                setActiveCategory(category);
                setVisibleItems(5); // Reset visible items to 5 when category changes
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <Box>
          {/* Masonry with responsive columns */}
          <Masonry
            // breakpointCols={breakpoints} // Apply responsive breakpoints
            className="my-masonry-grid"  // Optional class for custom styling
            columnClassName="my-masonry-grid_column" // Optional custom column class
          >
            {loading ? (
              <div>Loading...</div> // Show loading message if data is still loading
            ) : (
              filteredProjects.reverse().map((project) => (
                <div key={project.id} className="hover relative">
                  <Link
                    to={`/portfolio/${project.title
                      .replace(/\s+/g, '-')
                      .toLowerCase()}`}
                    className="block"
                  >
                    <img
                      srcSet={`${project.image}`}
                      src={`${project.image}`}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        display: 'block',
                        width: '100%',
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
              ))
            )}
          </Masonry>
        </Box>
      </div>

      {/* Load more button */}
      {visibleItems < filteredProjects.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              setVisibleItems((prevVisibleItems) => prevVisibleItems + 5) // Increase by 5 items
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
