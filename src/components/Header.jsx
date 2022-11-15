import React from "react";
import "../CSS/header.css";

function Header() {
  return (
    <div className="Header-container">
      <div className="title-container">
        <h2>Movie Time</h2>
        <i class="fa-solid fa-ticket icon"></i>
      </div>

      <div className="mobile-tab-container">
        <div className="movies-watched-tab tab">Movies Watched</div>
        <div className="want-to-watch-tab tab">Want To Watch</div>
        <div className="spinner-tab tab">Spin</div>
      </div>
    </div>
  );
}

export default Header;
