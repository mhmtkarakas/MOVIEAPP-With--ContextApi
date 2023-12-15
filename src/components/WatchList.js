import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Izlenecek Filmler</h1>
        </div>
        {watchlist.length > 0 && (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchList;
