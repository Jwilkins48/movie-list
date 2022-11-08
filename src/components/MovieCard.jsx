import React from "react";
import { useState } from "react";

function MovieCard({ item }) {
  const [toggleComments, setToggleComments] = useState(false);
  const toggle = () => {
    console.log(toggleComments);
    setToggleComments(!toggleComments);
  };
  return (
    <ul className="card">
      <div className="mobile-top-card">
        <li className="card-list-item movie-title">{item.movie}</li>
        <li className="card-list-item">{item.rating}/5 stars</li>
      </div>
      <li className="card-list-item">Watched on {item.date_watched}</li>
      {/* Button to open comment dropdown */}
      <button onClick={toggle} className="card-list-item list-btn">
        {item.comments.length} Comments
      </button>
    </ul>
  );
}

export default MovieCard;
