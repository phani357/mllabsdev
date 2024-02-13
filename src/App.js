import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file with styles

const textArray = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  // Add more sentences as needed
];

const SlidingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 30000); // Change the duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliding-text-container">
      <div className="sliding-text">
        {textArray.map((text, index) => (
          <div
            key={index}
            className={`text-item ${index === currentIndex ? 'active' : ''}`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingText;
