import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import client from '../../client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PortfolioDetail = () => {
  const { title } = useParams(); // Get title from URL
  const [portfolio, setPortfolio] = useState(null);
  const [previousPortfolio, setPreviousPortfolio] = useState(null);
  const [nextPortfolio, setNextPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  // Format the title in the URL for matching
  const formattedTitle = title.replace(/-/g, ' ').toLowerCase();
  console.log('Formatted title from URL:', formattedTitle); // Debugging

  // Fetch portfolio data from Contentful
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        // Fetch all portfolio entries (temporary, without filtering by title)
        const response = await client.getEntries({
          content_type: 'portfolioDetails', // Your Contentful content type ID
        });

        console.log('All portfolios from Contentful:', response); // Debugging

        // Check if the response has any items
        if (response.items.length > 0) {
          const matchingPortfolio = response.items.find(
            (item) => item.fields.title.toLowerCase().replace(/ /g, '-') === title
          );

          if (matchingPortfolio) {
            setPortfolio(matchingPortfolio.fields);
            const allPortfolios = response.items;

            const currentIndex = allPortfolios.findIndex(
              (item) => item.fields.title.toLowerCase().replace(/ /g, '-') === title
            );

            const nextPortfolio = allPortfolios[currentIndex + 1] || null;
            const previousPortfolio = allPortfolios[currentIndex - 1] || null;

            setNextPortfolio(nextPortfolio ? nextPortfolio.fields : null);
            setPreviousPortfolio(previousPortfolio ? previousPortfolio.fields : null);
          } else {
            console.log(`No portfolio found for title: ${formattedTitle}`);
          }
        } else {
          console.log('No portfolios found in Contentful.');
        }
      } catch (error) {
        console.error('Error fetching portfolio data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, [title, formattedTitle]); // Add formattedTitle as dependency

  if (loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (!portfolio) {
    return <h2 className="text-center">Portfolio item not found</h2>;
  }

  // Render the Rich Text field
  const richTextDescription = documentToReactComponents(portfolio.description);

  // Construct links for next and previous portfolio items
  const nextPortfolioLink = nextPortfolio
    ? `/portfolio/${nextPortfolio.title.toLowerCase().replace(/ /g, '-')}`
    : null;

  const previousPortfolioLink = previousPortfolio
    ? `/portfolio/${previousPortfolio.title.toLowerCase().replace(/ /g, '-')}`
    : null;

  return (
    <div className="cont w-[70%] m-auto">
      <section className="portfolio-single portfolio-images pp-img type-3 top_90 row">
        <figure className="hero-image">
          <img src={portfolio.featuredImage.fields.file.url} alt={portfolio.title} />
        </figure>
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="text-black bottom_45 top_60 text-4xl font-bold">{portfolio.title}</h1>
          <h4 className="text-lx font-bold mb-4">{portfolio.subtitle}</h4>
          <div className="text-center leading-[30px] mb-4">
            {richTextDescription}  {/* Rendered Rich Text */}
          </div>
          <ul className="information text-center">
            <li><span>Client:</span> {portfolio.client}</li>
            <li><span>Category:</span> {portfolio.category}</li>
          </ul>
        </div>
        <div className="col-md-12 portfolio-images top_90">
          {portfolio.gallery.map((img, index) => (
            <figure className="bottom_30" key={index}>
              <img src={img.fields.file.url} alt={`Portfolio image ${index + 1}`} />
            </figure>
          ))}
        </div>
        {/* Portfolio Nav */}
        <div className="col-md-12 portfolio-nav text-center top_90">
          {previousPortfolioLink && (
            <div className="port-prev-title port-prev-titlea">
              <Link className="port-preva" to={previousPortfolioLink}>
                <div className="nav-title">Previous: {previousPortfolio.title}</div>
              </Link>
            </div>
          )}
          {nextPortfolioLink && (
            <div className="port-next-title port-next-titlea">
              <Link className="port-nexta" to={nextPortfolioLink}>
                <div className="nav-title">Next: {nextPortfolio.title}</div>
              </Link>
            </div>
          )}
          <Link to="/portfolio" className="site-btn2 portfolio">All Portfolio</Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
