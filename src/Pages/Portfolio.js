import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Printing and Packaging Solutions",
      category: "printing-solutions",
      image: "https://www.infinitydesignhub.com/wp-content/uploads/2024/02/P1.jpg",
      link: "https://www.infinitydesignhub.com/portfolios/printing-and-packaging-solutions/",
    },
    {
      id: 2,
      title: "Logo Design",
      category: "logo",
      image: "https://www.infinitydesignhub.com/wp-content/uploads/2024/02/P2.jpg",
      link: "https://www.infinitydesignhub.com/portfolios/647/",
    },
    {
      id: 3,
      title: "Satvik Eggless Bakery",
      category: "branding custom-packaging-box digital-works logo packaging-printing-solutions pramotion-marketing social-media",
      image: "https://www.infinitydesignhub.com/wp-content/uploads/2024/02/Satvik-Web-Port-1.jpg",
      link: "https://www.infinitydesignhub.com/portfolios/satvik-eggless-bakery/",
    },
    {
      id: 4,
      title: "Printing and Packaging Solutions",
      category: "printing-solutions",
      image: "https://www.infinitydesignhub.com/wp-content/uploads/2024/02/P1.jpg",
      link: "https://www.infinitydesignhub.com/portfolios/printing-and-packaging-solutions/",
    },
    {
      id: 5,
      title: "Logo Design",
      category: "logo",
      image: "https://www.infinitydesignhub.com/wp-content/uploads/2024/02/P2.jpg",
      link: "https://www.infinitydesignhub.com/portfolios/647/",
    },
    {
      id: 6,
      title: "Satvik Eggless Bakery",
      category: "branding custom-packaging-box digital-works logo packaging-printing-solutions pramotion-marketing social-media",
      image: "https://www.infinitydesignhub.com/wp-content/uploads/2020/01/web-home-01.jpg",
      link: "https://www.infinitydesignhub.com/portfolios/satvik-eggless-bakery/",
    },
    // Add more items as needed...
  ];

  return (
    <div className='wrapper py-14'>
      <div className='cont'>
        <section id="portfolio" className="portfolio">
          <div id="filters" className="portfolio-filter row button-group">
            <div data-filter="*" className="cbp-filter-item cbp-filter-item-active">
              Glimpse Of Our Work
            </div>
          </div>
          <div id="grid-container" className="cbp cbp-caption-active cbp-caption-pushTop">
            <div className="cbp-wrapper-outer">
              <div className="cbp-wrapper flex flex-wrap">
                {portfolioItems.map(item => (
                  <div key={item.id} className={`element-item cbp-item ${item.category}`} style={{ position: 'relative', width: '308px' }}>
                    <div className="cbp-item-wrapper">
                      <a href={item.link}>
                        <figure className="fig">
                          <img src={item.image} alt={item.title} />
                          <figcaption>
                            <h3 className="name">{item.title}</h3>
                            <p>{item.category}</p>
                          </figcaption>
                          <div className="shine" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(306.973deg, rgba(255, 255, 255, 0.357) 0%, rgba(255, 255, 255, 0) 80%)', zIndex: 9 }}></div>
                        </figure>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="port-loadMore" className="cbp-l-loadMore-button top_120 bottom_90">
            <a className="cbp-l-loadMore-link site-btn" rel="nofollow">
              <span className="cbp-l-loadMore-defaultText">Load More</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
