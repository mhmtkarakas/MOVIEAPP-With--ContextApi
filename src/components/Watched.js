import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";


const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Izlenen Filmler</h1>
          <div className="count-pill">
            {watched.length <2 ? "movie" : "movies"}
          </div>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Listenizde Film Yoktur...</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
