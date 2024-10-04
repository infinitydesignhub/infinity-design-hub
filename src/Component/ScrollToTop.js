import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  useEffect(() => {
    // Scroll to top on location change
    scrollToTop();
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-800 text-white p-[10px] rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
