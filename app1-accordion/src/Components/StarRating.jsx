import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleMouseOver = (index) => {
    setRating(index + 1);
  };

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseLeave = () => {
    if (!rating) {
      setRating(0);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "star highlighted" : "star"}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          &#9733; {/* Unicode character for star */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
