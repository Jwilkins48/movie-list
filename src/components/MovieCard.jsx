import React from "react";

function MovieCard({ item }) {
  return (
    <ul className="card">
      <li>{item.movie}</li>
      <li>{item.rating}/5 stars</li>
      <li>Watched on {item.date_watched}</li>
      {/* Button to open comment dropdown */}
      <li>{item.comments.length} Comments</li>
    </ul>
  );
}

export default MovieCard;
