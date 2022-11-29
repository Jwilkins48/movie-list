import React, { useState, useEffect } from "react";
import "../CSS/wantToWatch.css";
import { v4 as uuidv4 } from "uuid";

function WantToWatch({ openModal, setOpenModal, setMovieName, movieName }) {
  // LOCAL STORAGE
  const localWantToWatch = localStorage.getItem("wantToWatch")
    ? JSON.parse(localStorage.getItem("wantToWatch"))
    : [];

  const [wantToWatch, setWantToWatch] = useState(localWantToWatch);
  // const [date, setDate] = useState(new Date());
  // const [ratedStars, setRatedStars] = useState("zero");
  // const [movieName, setMovieName] = useState("");
  // const [rated, setRated] = useState("");

  // LOCAL STORAGE
  useEffect(() => {
    const json = JSON.stringify(wantToWatch);
    window.localStorage.setItem("wantToWatch", json);
  }, [wantToWatch]);

  // const handleRateClick = (active, rate) => {
  //   setRatedStars(active);
  //   setRated(rate);
  // };

  const addWantToWatchMovie = (wantToWatchMovie) => {
    setWantToWatch([wantToWatchMovie, ...wantToWatch]);
  };

  const deleteWantToWatchMovie = (id) => {
    setWantToWatch(wantToWatch.filter((item) => item.id !== id));
  };

  // Add to Watched List
  // const addToWatched = (e) => {
  //   e.preventDefault();
  //   const movie = {
  //     movie: movieName,
  //   };

  //   addWatchedMovie(movie);
  // };

  // Add to Want to Watch List
  const handleSubmitWant = (e) => {
    e.preventDefault();
    const newMovie = {
      id: uuidv4(),
      movie: movieName,
    };
    addWantToWatchMovie(newMovie);
    e.target.reset();
  };

  return (
    <div>
      <div className="wantToWatch-container">
        <div className="wantToWatch-inner">
          <h3>What to watch...</h3>
          <form onSubmit={handleSubmitWant} className="input-container">
            <input
              onChange={(e) => setMovieName(e.target.value)}
              className="wantToWatch-input"
              placeholder="Want to watch..."
            ></input>
            <button className="wantToWatch-inputBtn">Add</button>
          </form>

          {wantToWatch.map((item) => (
            <div key={item.id} id={item.id}>
              <div className="want-to-item">
                <h2 className="want-movie-list">{item.movie}</h2>
                <button
                  onClick={() => setOpenModal(!openModal)}
                  className="finished"
                >
                  Watched<i class="fa-solid fa-check"></i>
                </button>
                {/* Delete want to watch */}
                <button
                  onClick={() => deleteWantToWatchMovie(item.id)}
                  className="delete-want-btn"
                >
                  <i class="fa-solid fa-xmark "></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WantToWatch;
