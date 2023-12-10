import React from "react";

const ResultCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          {movie.release_date.length>0  ? (
            <h4 className="release-date">{movie.release_date.substring(0,4)}</h4>
          ) : (
            <h4>-</h4>
          )}
            {movie.vote_average  ? (
            <h4 className="release-date">IMDB:<b>{movie.vote_average}</b></h4>
          ) : (
            "IMDB degeri bulunamadi"
          )}
        </div>
        <div className="controls">
            <button className="btn">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
