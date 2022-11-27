import React, { useState, useEffect } from "react";
import "../CSS/wantToWatch.css";
import { v4 as uuidv4 } from "uuid";

function WantToWatch({ addWatchedMovie }) {
  // LOCAL STORAGE
  const localWantToWatch = localStorage.getItem("wantToWatch")
    ? JSON.parse(localStorage.getItem("wantToWatch"))
    : [];

  const [wantToWatch, setWantToWatch] = useState(localWantToWatch);
  const [date, setDate] = useState(new Date());
  const [ratedStars, setRatedStars] = useState("zero");
  const [movieName, setMovieName] = useState("");
  const [rated, setRated] = useState("");

  // LOCAL STORAGE
  useEffect(() => {
    const json = JSON.stringify(wantToWatch);
    window.localStorage.setItem("wantToWatch", json);
  }, [wantToWatch]);

  const handleRateClick = (active, rate) => {
    setRatedStars(active);
    setRated(rate);
  };

  const addWantToWatchMovie = (wantToWatchMovie) => {
    setWantToWatch([wantToWatchMovie, ...wantToWatch]);
  };

  const deleteWantToWatchMovie = (id) => {
    setWantToWatch(wantToWatch.filter((item) => item.id !== id));
  };

  // Add to Watched List
  const addToWatched = (e) => {
    e.preventDefault();
    const movie = {
      id: uuidv4(),
      movie: movieName,
      // rating: rated,
      // date_watched: date,
      comments: ["hi"],
    };
    console.log(movieName);
    addWatchedMovie(movie);
  };

  // Add to Want to Watch List
  const handleSubmitWant = (e) => {
    e.preventDefault();
    const newMovie = {
      id: uuidv4(),
      movie: movieName,
    };
    addWantToWatchMovie(newMovie);
  };

  return (
    <div>
      <div className="wantToWatch-container">
        <div className="wantToWatch-inner">
          <h3>What to watch...</h3>
          <div className="input-container">
            <input
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              className="wantToWatch-input"
              placeholder="Want to watch..."
            ></input>
            <button
              onClick={(e) => handleSubmitWant(e)}
              className="wantToWatch-inputBtn"
            >
              Add
            </button>
          </div>

          {/* <div className="movie-rating-container">
            <label>Rate:</label>
            <div className="star-container">
              <span
                className={ratedStars === "five" ? "activeRating" : ""}
                onClick={() => handleRateClick("five", 5)}
              >
                <i class="fa-regular fa-star"></i>
              </span>
              <span
                className={ratedStars === "four" ? "activeRating" : ""}
                onClick={() => handleRateClick("four", 4)}
              >
                <i class="fa-regular fa-star"></i>
              </span>
              <span
                className={ratedStars === "three" ? "activeRating" : ""}
                onClick={() => handleRateClick("three", 3)}
              >
                <i class="fa-regular fa-star"></i>
              </span>
              <span
                className={ratedStars === "two" ? "activeRating" : ""}
                onClick={() => handleRateClick("two", 2)}
              >
                <i class="fa-regular fa-star"></i>
              </span>
              <span
                className={ratedStars === "one" ? "activeRating" : ""}
                onClick={() => handleRateClick("one", 1)}
              >
                <i className="fa-regular fa-star"></i>
              </span>
            </div>
          </div> */}

          {wantToWatch.map((item) => (
            <div key={item.id} id={item.id}>
              <div className="want-to-item">
                <h2 className="want-movie-list">{item.movie}</h2>
                <button onClick={(e) => addToWatched(e)} className="finished">
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
