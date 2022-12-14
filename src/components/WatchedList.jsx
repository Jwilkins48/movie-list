// import DatePicker from "react-date-picker";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import WantToWatch from "./WantToWatch";
import { Scrollbars } from "react-custom-scrollbars";

function Home({
  setOpenModal,
  openModal,
  showRate,
  setShowRate,
  comment,
  setComment,
  clearBoard,
  date,
  setDate,
  setWatchedMovieName,
  watchedMovieName,
  movieName,
  setMovieName,
  watchedMovies,
  setWatchedMovies,
  wantToWatch,
  setWantToWatch,
}) {
  const [rating, setRating] = useState(0);
  const [activeStar, setActiveStar] = useState("zero");
  const [toggleList, setToggleList] = useState(false);

  // LOCAL STORAGE
  useEffect(() => {
    const json = JSON.stringify(watchedMovies);
    window.localStorage.setItem("watchedMovies", json);
  }, [watchedMovies]);

  //Deletes from want to watch when added to watched
  useEffect(() => {
    setWantToWatch(
      wantToWatch.filter(
        (x) => !watchedMovies.filter((y) => y.movie === x.movie).length
      )
    );
  }, [watchedMovies]);

  // Add to watched array
  const addWatchedMovie = (watchedMovie) => {
    setWatchedMovies([watchedMovie, ...watchedMovies]);
  };

  // Delete from watched
  const deleteWatchedMovie = (id) => {
    setWatchedMovies(watchedMovies.filter((item) => item.id !== id));
  };

  //On Modal Submit
  const handleSubmitWatched = (e) => {
    e.preventDefault();
    const movie = {
      id: uuidv4(),
      movie: watchedMovieName,
      rating: rating,
      date_watched: date,
      comments: [comment],
      checked: true,
    };
    addWatchedMovie(movie);
    setOpenModal(false);
  };

  const handleRateClick = (active, rate) => {
    setShowRate(true);
    setActiveStar(active);
    setRating(rate);
  };

  const toggleModal = () => {
    setWatchedMovieName("");
    clearBoard();
    setOpenModal(!openModal);
  };

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
              <i className="fa-solid fa-circle-plus plusIcon"></i>
              <div className="desktop-watched-btn">Add Watched</div>
            </button>
          </h1>
          <Scrollbars
            className="scrollBar"
            style={{ width: "100%", height: "32rem" }}
          >
            <div className="card-container">
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
          </Scrollbars>
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
                    className={
                      activeStar === "five" && showRate === true
                        ? "activeRating"
                        : ""
                    }
                    onClick={() => handleRateClick("five", 5)}
                  >
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span
                    className={
                      activeStar === "four" && showRate === true
                        ? "activeRating"
                        : ""
                    }
                    onClick={() => handleRateClick("four", 4)}
                  >
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span
                    className={
                      activeStar === "three" && showRate === true
                        ? "activeRating"
                        : ""
                    }
                    onClick={() => handleRateClick("three", 3)}
                  >
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span
                    className={
                      activeStar === "two" && showRate === true
                        ? "activeRating"
                        : ""
                    }
                    onClick={() => handleRateClick("two", 2)}
                  >
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span
                    className={
                      activeStar === "one" && showRate === true
                        ? "activeRating"
                        : ""
                    }
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
                  value={date}
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
          wantToWatch={wantToWatch}
          setWantToWatch={setWantToWatch}
          clearBoard={clearBoard}
          setMovieName={setMovieName}
          movieName={movieName}
          openModal={openModal}
          setWatchedMovieName={setWatchedMovieName}
          setOpenModal={setOpenModal}
          watchedMovieName={watchedMovieName}
        />
      </div>
    </div>
  );
}

export default Home;
