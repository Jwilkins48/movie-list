// import DatePicker from "react-date-picker";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import WantToWatch from "./WantToWatch";
import Card from "./Card";

function Home() {
  // LOCAL STORAGE
  const localWatched = localStorage.getItem("watchedMovies")
    ? JSON.parse(localStorage.getItem("watchedMovies"))
    : [];

  const [watchedMovies, setWatchedMovies] = useState(localWatched);
  const [openModal, setOpenModal] = useState(false);

  const [watchedMovieName, setWatchedMovieName] = useState("");
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState("");

  const [activeStar, setActiveStar] = useState("zero");

  const [toggleList, setToggleList] = useState(false);

  // LOCAL STORAGE
  useEffect(() => {
    const json = JSON.stringify(watchedMovies);
    window.localStorage.setItem("watchedMovies", json);
  }, [watchedMovies]);

  const addWatchedMovie = (watchedMovie) => {
    setWatchedMovies([watchedMovie, ...watchedMovies]);
  };

  const deleteWatchedMovie = (id) => {
    setWatchedMovies(watchedMovies.filter((item) => item.id !== id));
  };

  const handleSubmitWatched = (e) => {
    e.preventDefault();
    const movie = {
      id: uuidv4(),
      movie: watchedMovieName,
      rating: rating,
      date_watched: date,
      comments: [comment],
    };

    addWatchedMovie(movie);
    console.log(date);
    setOpenModal(false);
  };

  const handleRateClick = (active, rate) => {
    setActiveStar(active);
    setRating(rate);
  };

  const toggleModal = () => {
    setMovieName("");
    setComment("");
    setOpenModal(!openModal);
  };

  const [movieName, setMovieName] = useState("");
  const [addWatchedBtn, setAddWatchedBtn] = useState(false);
  const [addWantToWatchBtn, setAddWantToWatchBtn] = useState(false);

  return (
    <div className="Home">
      <div
        className={
          toggleList
            ? "watchedList-open watched-container"
            : "watchedList-closed watched-container"
        }
      >
        <div className="watched-inner">
          <h1 className="watched-heading">
            Movies Watched
            <button onClick={toggleModal} className="add-watched-btn">
              <i class="fa-solid fa-circle-plus plusIcon"></i>
              <div className="desktop-watched-btn">Add Watched</div>
            </button>
          </h1>
          <div
            style={{
              overflow: toggleList ? "unset" : "hidden",
              height: toggleList ? "" : "30rem",
            }}
            className="card-container"
          >
            {watchedMovies.map((item) => (
              <div key={item.id} id={item.id}>
                <MovieCard
                  key={item.id}
                  deleteWatchedMovie={deleteWatchedMovie}
                  watchedMovies={watchedMovies}
                  rating={rating}
                  comment={comment}
                  setComment={setComment}
                  item={item}
                />
              </div>
            ))}
          </div>

          <h4
            onClick={() => setToggleList(!toggleList)}
            style={{ display: watchedMovies.length > 3 ? "block" : "none" }}
            className="viewAll"
          >
            {toggleList ? "Close" : "See All"}
          </h4>
        </div>

        {/* ADD WATCHED MODAL */}
        <div
          className={
            openModal ? "modal-open add-watched-modal" : "add-watched-modal"
          }
        >
          <div className="modal-inner">
            <h2>Add Watched</h2>
            <div className="modal-content">
              <div className="movie-name-container">
                <label htmlFor="name">Movie:</label>
                <input
                  className="name-input"
                  onChange={(e) => setWatchedMovieName(e.target.value)}
                  // defaultValue={movieName}
                  type="text"
                  name="name"
                  placeholder="Enter movie title"
                />
              </div>
              {/* RATING */}
              <div className="movie-rating-container">
                <label>Rate:</label>
                <div className="star-container">
                  <span
                    className={activeStar === "five" ? "activeRating" : ""}
                    onClick={() => handleRateClick("five", 5)}
                  >
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span
                    className={activeStar === "four" ? "activeRating" : ""}
                    onClick={() => handleRateClick("four", 4)}
                  >
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span
                    className={activeStar === "three" ? "activeRating" : ""}
                    onClick={() => handleRateClick("three", 3)}
                  >
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span
                    className={activeStar === "two" ? "activeRating" : ""}
                    onClick={() => handleRateClick("two", 2)}
                  >
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span
                    className={activeStar === "one" ? "activeRating" : ""}
                    onClick={() => handleRateClick("one", 1)}
                  >
                    <i className="fa-regular fa-star"></i>
                  </span>
                </div>
              </div>
              {/* WATCHED ON */}
              <div className="movie-watched-container">
                <label htmlFor="date">Watched on: </label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  defaultValue={date}
                  name="date"
                  type="date"
                />
              </div>
              {/* COMMENTS */}
              <div className="movie-comment-container">
                <label htmlFor="comment">Comment:</label>
                <textarea
                  rows="4"
                  cols="35"
                  type="text"
                  name="comment"
                  className="comment-textarea"
                  placeholder="Enter comments"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
              </div>
            </div>
            <div className="modal-button-container">
              <button
                onClick={toggleModal}
                className="modal-cancel-btn modal-btn"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitWatched}
                className="modal-add-btn modal-btn"
              >
                Add Watched
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="wantToWatchContainer">
        <WantToWatch
          setMovieName={setMovieName}
          movieName={movieName}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setWatchedMovies={setWatchedMovies}
          watchedMovies={watchedMovies}
          addWatchedMovie={addWatchedMovie}
        />
      </div>
    </div>
  );
}

export default Home;
