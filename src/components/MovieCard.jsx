import React from "react";
import { useState, useEffect } from "react";
import user from "../images/icon.png";
import { Scrollbars } from "react-custom-scrollbars";

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
          <i className="fa-solid fa-xmark "></i>
        </button>
        <div className="mobile-top-card">
          <li className="card-list-item movie-title">{item.movie}</li>
          <li className="card-list-item">Watched on {item.date_watched}</li>
        </div>

        <div className="end-content">
          <li className="card-list-item stars">
            {item.rating}/5 <i className="fa-regular fa-star card-star"></i>
          </li>

          <div className="card-button-container">
            {/* Button to open comment dropdown */}
            <button onClick={toggle} className="card-list-item list-btn hide">
              {toggleComments ? "Hide Comments" : "Add Comment"}
            </button>
          </div>
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
          <form onSubmit={handleSubmitComment} className="contact-input-form">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="Enter Comment"
              id="comment-input"
            />
            <button className="comment-btn" type="submit">
              send
            </button>
          </form>

          <div className="comment-container">
            <div className="view-comments list-btn">
              {item.comments.length} Comment(s)
            </div>
            <Scrollbars
              className="scrollbar-comment"
              style={{ width: "100%", height: "9rem" }}
            >
              <div
                // className={viewComments ? "open-comments" : "closed-comments"}
                className="open-comments"
              >
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
            </Scrollbars>
          </div>
        </div>
      </div>
    </ul>
  );
}

export default MovieCard;
