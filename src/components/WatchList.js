import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return <div>WatchList</div>;
};

export default WatchList;
