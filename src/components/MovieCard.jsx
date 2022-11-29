import React from "react";
import { useState, useEffect } from "react";
import user from "../images/icon.png";

function MovieCard({
  item,
  comment,
  setComment,
  deleteWatchedMovie,
  watchedMovies,
  rating,
}) {
  //Local storage for new comments
  useEffect(() => {
    const json = JSON.stringify(watchedMovies);
    window.localStorage.setItem("watchedMovies", json);
  }, [comment]);

  const [toggleComments, setToggleComments] = useState(false);
  const [viewComments, setViewComments] = useState(false);
  // const [viewRate, setViewRate] = useState(rating);

  // Add and display new comment
  const handleSubmitComment = (e) => {
    e.preventDefault();
    item.comments.push(comment);
    setComment("");
  };
  const toggle = () => {
    setComment("");
    setViewComments(false);
    setToggleComments(!toggleComments);
  };

  function random() {
    return Math.floor(Math.random() * 5000);
  }

  return (
    <ul className="card">
      <div className="shown">
        <button
          onClick={() => deleteWatchedMovie(item.id)}
          className="delete-watched-btn"
        >
          <i class="fa-solid fa-xmark "></i>
        </button>
        <div className="mobile-top-card">
          <li className="card-list-item movie-title">{item.movie}</li>
          <li className="card-list-item">Watched on {item.date_watched}</li>
        </div>
        <li className="card-list-item stars">
          {item.rating}/5 <i class="fa-regular fa-star card-star"></i>
        </li>

        <div className="card-button-container">
          <button className="card-list-item list-btn">Mark Unwatched</button>
          {/* Button to open comment dropdown */}
          <button onClick={toggle} className="card-list-item list-btn">
            {toggleComments ? "Hide" : "Add Comment"}
          </button>
        </div>
      </div>
      <div
        className={
          toggleComments
            ? "display-comments comment-dropdown"
            : "comment-dropdown"
        }
      >
        {/* Comment section */}
        <div className="comment-list-container">
          <input
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Enter Comment"
            id="comment-input"
          />
          <button
            className="comment-btn"
            onClick={(e) => handleSubmitComment(e)}
            type="submit"
          >
            send
          </button>

          <div className="comment-container">
            <div
              onClick={() => setViewComments(!viewComments)}
              className="view-comments list-btn"
            >
              hi
              {/* {item.comments.length Comment(s)} */}
            </div>
            <div className={viewComments ? "open-comments" : "closed-comments"}>
              {item.comments.map((com) => (
                <div className="user-comment-container" key={com}>
                  <img className="userIconImg" src={user} alt="user icon" />
                  <div className="comment-content">
                    <div className="username">User{random()}</div>
                    <div className="user-comment">{com}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ul>
  );
}

export default MovieCard;
