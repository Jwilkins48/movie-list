// import DatePicker from "react-date-picker";
import React from "react";
import { useState } from "react";
import watched from "../data/movies-watched";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [watchedMovies, setWatchedMovies] = useState(watched);
  const [openModal, setOpenModal] = useState(false);

  const [watchedMovieName, setWatchedMovieName] = useState("");
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState("");

  const [activeStar, setActiveStar] = useState("zero");

  // LOCAL STORAGE
  localStorage.setItem("local-watched", JSON.stringify(watchedMovies));
  let retrievedData = localStorage.getItem("local-watched");
  const localWatched = JSON.parse(retrievedData);

  const addWatchedMovie = (watchedMovie) => {
    watchedMovie.id = uuidv4();
    setWatchedMovies([watchedMovie, ...localWatched]);
  };

  const deleteWatchedMovie = (id) => {
    setWatchedMovies(localWatched.filter((item) => item.id !== id));
  };

  const handleSubmitWatched = (e) => {
    e.preventDefault();
    const movie = {
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
    setActiveStar("zero");
    setWatchedMovieName("");
    setComment("");
    setOpenModal(!openModal);
  };

  return (
    <div className="Home">
      <div className="watched-container">
        <div className="watched-inner">
          <h1 className="watched-heading">
            Movies Watched{" "}
            <i
              onClick={toggleModal}
              class="fa-solid fa-circle-plus plusIcon"
            ></i>
          </h1>
          <div className="card-container">
            {localWatched.map((item) => (
              <div key={item.id} id={item.id}>
                <MovieCard
                  key={item.id}
                  deleteWatchedMovie={deleteWatchedMovie}
                  watchedMovies={localWatched}
                  setWatchedMovies={setWatchedMovies}
                  comment={comment}
                  setComment={setComment}
                  item={item}
                />
              </div>
            ))}
          </div>
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
                  value={watchedMovieName}
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
    </div>
  );
}

export default Home;
