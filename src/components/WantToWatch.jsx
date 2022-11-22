import React, { useState } from "react";
import "../CSS/wantToWatch.css";

function WantToWatch() {
  const [wantToWatch, setWantToWatch] = useState([{ movie: "Ponyo" }]);

  return (
    <div>
      <div className="wantToWatch-container">
        <div className="wantToWatch-inner">
          <h3>What to watch...</h3>

          {wantToWatch.map((item) => (
            <div key={item.id} id={item.id}>
              <div className="want-to-item">
                <h2 className="want-movie-list">{item.movie}</h2>
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WantToWatch;
