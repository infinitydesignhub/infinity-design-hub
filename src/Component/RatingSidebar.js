// src/RatingSidebar.js
import React, { useState } from 'react';

const reviewsData = [
    { id: 1, platform: 'Google', url: 'https://www.google.com/maps' },
    { id: 2, platform: 'Yelp', url: 'https://www.yelp.com' },
];

const RatingSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div 
                className="fixed bottom-5 right-5 bg-gray-200 p-4 rounded shadow cursor-pointer" 
                onClick={toggleSidebar}
            >
                <span>Overall Rating</span>
                <strong className="block">5.0</strong>
                <p>Read our 100 reviews</p>
            </div>

            {isOpen && (
                <div className="fixed right-0 top-0 h-full w-1/3 bg-white shadow-lg p-5">
                    <button className="absolute top-5 right-5" onClick={toggleSidebar}>&times;</button>
                    <h2 className="text-xl mb-4">Reviews</h2>
                    <ul>
                        {reviewsData.map((review) => (
                            <li key={review.id} className="mb-2">
                                <a 
                                    href={review.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-500 hover:underline"
                                >
                                    {review.platform} Reviews
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RatingSidebar;
