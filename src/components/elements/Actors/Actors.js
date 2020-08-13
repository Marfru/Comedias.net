import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import requests, { movieID, API_KEY } from "../../../request";
import "./Actors.scss";
import Box from "../../common/Box/Box";

const profile_url = "http://image.tmdb.org/t/p/w92/";

function Actors({ movieId }) {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      setActors(request.data.cast);
      return request;
    }
    fetchData();
  }, [movieId]);
  console.log("this is the actor ", actors);
  console.log(movieID);

  return (
    <Box>
      <div className="c-actors">
        {actors.slice(0, 5).map((actor) => (
          <div className="c-actor" key={actor.cast_id}>
            <div className="c-actor__profile">
              <img
                className="c-actor__profile-image"
                src={`${profile_url}${actor.profile_path}`}
                alt={actor.name}
              />
            </div>
            <h1 className="c-actor__name">{actor.name}</h1>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default Actors;
