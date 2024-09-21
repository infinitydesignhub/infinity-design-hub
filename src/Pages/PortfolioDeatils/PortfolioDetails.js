import React from 'react';
import { useParams, Link } from 'react-router-dom';
import portfolioData from './portfolioData.json'; // Path to your JSON file

const PortfolioDetail = () => {
  const { title } = useParams(); // Get title from URL

  // Find the portfolio item that matches the title
  const portfolio = portfolioData.portfolios.find(
    item => item.title.toLowerCase().replace(/ /g, '-') === title
  );

  if (!portfolio) {
    return <h2 className="text-center">Portfolio item not found</h2>;
  }

  // Find the index of the current portfolio item
  const currentIndex = portfolioData.portfolios.findIndex(
    item => item.title.toLowerCase().replace(/ /g, '-') === title
  );

  // Get the next and previous portfolio items
  const nextPortfolio = portfolioData.portfolios[currentIndex + 1] || null;
  const previousPortfolio = portfolioData.portfolios[currentIndex - 1] || null;

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
          <img src={portfolio.images[0]} alt={portfolio.title} />
        </figure>
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="text-black bottom_45 top_60 text-4xl font-bold">{portfolio.title}</h1>
          <h4 className="text-lx font-bold mb-4">{portfolio.subtitle}</h4>
          {portfolio.description.map((desc, index) => (
            <p key={index} className="text-center leading-[30px] mb-4">{desc}</p>
          ))}
          <ul className="information text-center">
            <li><span>Client:</span> {portfolio.client}</li>
            <li><span>Category:</span> {portfolio.category}</li>
          </ul>
        </div>
        <div className="col-md-12 portfolio-images top_90">
          {portfolio.images.map((img, index) => (
            <figure className="bottom_30" key={index}>
              <img src={img} alt={`Portfolio image ${index + 1}`} />
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
