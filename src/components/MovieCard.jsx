import React from "react";
import { useState } from "react";

function MovieCard({ item, comment, setComment, deleteWatchedMovie }) {
  const [toggleComments, setToggleComments] = useState(false);

  // Add and display new comment
  const handleSubmitComment = (e) => {
    e.preventDefault();
    item.comments.push(comment);
    setComment("");
    console.log(item.comments);
  };
  const toggle = () => {
    setComment("");
    setToggleComments(!toggleComments);
  };

  return (
    <ul className="card">
      <button
        onClick={() => deleteWatchedMovie(item.id)}
        className="delete-watched-btn"
      >
        <i class="fa-solid fa-xmark "></i>
      </button>
      <div className="mobile-top-card">
        <li className="card-list-item movie-title">{item.movie}</li>
        <li className="card-list-item">{item.rating}/5 stars</li>
      </div>
      <li className="card-list-item">Watched on {item.date_watched}</li>
      {/* Button to open comment dropdown */}
      <button onClick={toggle} className="card-list-item list-btn">
        {item.comments.length} Comments
      </button>
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
            value={comment}
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
            {item.comments.map((com) => (
              <li>{com}</li>
            ))}
          </div>
        </div>
      </div>
    </ul>
  );
}

export default MovieCard;
