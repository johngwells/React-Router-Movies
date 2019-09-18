import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

const MovieCard = ({ title, director, metascore, stars}) => {
  return (
    <div className="movie-card">
    <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
​      <Stars stars={stars} />
    </div>
  );
};

export default MovieCard;
