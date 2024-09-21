import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import data from './portfolio.json'; // Adjust the path if necessary

const MasonryGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  const breakpointColumnsObj = {
    default: 2,  // Set default to 2 columns
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex"
      columnClassName="masonry-column"
    >
      {items.map(item => (
        <div key={item.id} className="relative p-4 group">
          <a href={item.link} className="block">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto mb-2 object-cover" // Use h-auto for varying heights
            />
            <div className="absolute inset-0 flex items-center justify-start p-4 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.category.join(", ")}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
