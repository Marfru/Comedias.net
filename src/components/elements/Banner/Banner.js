import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import requests from "../../../request";
import "./Banner.scss";
import Actors from "../Actors/Actors";

function Banner(props) {
  const { movieId } = props;
  const [movie, setMovie] = useState([movieId]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log("this is the movie ", movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="c-banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="c-banner__contents">
        <h1 className="c-banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="c-banner__buttons">
          <button className="c-banner__button">Play</button>
          <button className="c-banner__button">My List</button>
        </div>
        <h1 className="c-banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
        <Actors movieId={movie.id} />
      </div>
      <div className="c-banner--fadeBottom" />
    </header>
  );
}

export default Banner;
