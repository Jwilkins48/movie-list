import DatePicker from "react-date-picker";
import React from "react";
import { useState } from "react";
import watched from "../data/movies-watched";
import MovieCard from "./MovieCard";
// import {v4 as uuidv4} from 'uuid'

function Home() {
  const [watchedMovies, setWatchedMovies] = useState(watched);
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Home">
      <div className="watched-container">
        <div className="watched-inner">
          <h1 className="watched-heading">
            Movies Watched{" "}
            <i
              onClick={() => setOpenModal(!openModal)}
              class="fa-solid fa-circle-plus plusIcon"
            ></i>
          </h1>
          <div className="card-container">
            {watchedMovies.map((item) => (
              <div key={item.id} id={item.id}>
                <MovieCard key={item.id} item={item} />
              </div>
            ))}
          </div>
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
                type="text"
                name="name"
                placeholder="Enter movie title"
              />
            </div>
            {/* RATING */}
            <div className="movie-rating-container">
              <label>Rate:</label>
              <div className="star-container">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            {/* WATCHED ON */}
            <div className="movie-watched-container">
              <label>Watched on:</label>
              <DatePicker className="date" onChange={setDate} value={date} />
            </div>
            {/* COMMENTS */}
            <div className="movie-comment-container">
              <label htmlFor="comment">Comment:</label>
              <textarea
                rows="5"
                cols="36"
                type="text"
                name="comment"
                className="comment-textarea"
                placeholder="Enter comments"
              />
            </div>
          </div>
          <div className="modal-button-container">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="modal-cancel-btn modal-btn"
            >
              Cancel
            </button>
            <button className="modal-add-btn modal-btn">Add Watched</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
