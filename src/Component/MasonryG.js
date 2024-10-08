import React from 'react';
import Masonry from 'react-responsive-masonry';

const brakePoints = [350, 500, 750];
const images = [
  "http://localhost:3000/images/PortfolioImages/1.jpg",
  "http://localhost:3000/images/PortfolioImages/2.jpg",
  "http://localhost:3000/images/PortfolioImages/3.jpg",
  "http://localhost:3000/images/PortfolioImages/4.jpg",
  "http://localhost:3000/images/PortfolioImages/5.jpg",
  "http://localhost:3000/images/PortfolioImages/1.jpg",
  "http://localhost:3000/images/PortfolioImages/2.jpg",
  "http://localhost:3000/images/PortfolioImages/3.jpg",
  "http://localhost:3000/images/PortfolioImages/4.jpg",
  "http://localhost:3000/images/PortfolioImages/5.jpg"
  // Add more images as needed...
];

const MasonryG = () => {
  return (
    <div className="container">
      <div className="masonry-container">
        <p>ReactJS Responsive/Modular Masonry Grid.</p>
        <Masonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} gutter="10px">
          {images.map((image, id) => (
            <Tile key={id} src={image} />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

const Tile = ({ src }) => {
  return (
    <div className="tile">
      <img
        src={src}
        alt={`Masonry Tile ${src}`}
        style={{
          width: "100%",
          borderRadius: "8px",
          display: "block",
          objectFit: "cover" // Optional: use this if you want to crop images while keeping their aspect ratio
        }}
      />
    </div>
  );
};

export default MasonryG;
