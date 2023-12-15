import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

const MovieControls = ({ movie }) => {
  const { removeMovieFromWatchlist,addMovieToWatched } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls"  onClick={() => addMovieToWatched(movie)}
    >
      <button className="ctrl-btn">
        <i className="fa-fw far fa-eye"></i>
      </button>
      <button
        className="ctrl-btn"
        onClick={() => removeMovieFromWatchlist(movie.id)}
      >
        <i className="fa-fw fa fa-times"></i>
      </button>
    </div>
  );
};

export default MovieControls;
