import React from "react";
import { useState } from "react";
import watched from "../data/movies-watched";
import MovieCard from "./MovieCard";
// import {v4 as uuidv4} from 'uuid'

function Home() {
  const [watchedMovies, setWatchedMovies] = useState(watched);

  return (
    <div className="Home">
      <div className="watched-container">
        <div className="watched-inner">
          <h1 className="watched-heading">Movies Watched</h1>
          <div className="card-container">
            {watchedMovies.map((item) => (
              <div key={item.id} id={item.id}>
                <MovieCard key={item.id} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
