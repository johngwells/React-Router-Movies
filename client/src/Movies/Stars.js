import React from 'react';

const Stars = ({stars}) => {
  return (
    stars.map(star => (
      <div key={star} className="movie-star">
        {star}
      </div>
    ))
  );
}

export default Stars;