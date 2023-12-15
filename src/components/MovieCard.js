import React from "react";
import MovieControls from './MovieControls';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img
          src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
          alt={`${movie.poster_path}`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}
      <MovieControls movie={movie} />
    </div>
  );
};

export default MovieCard;
