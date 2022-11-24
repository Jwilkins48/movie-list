import React, { useState } from "react";
import "../CSS/wantToWatch.css";
import { v4 as uuidv4 } from "uuid";

function WantToWatch({ addWatchedMovie }) {
  const [wantToWatch, setWantToWatch] = useState([{ movie: "Ponyo" }]);

  // const watched = (e) => {
  //   e.preventDefault();
  //   const watchedMovie = {
  //     id: uuidv4(),
  //     movie: wantToWatchname,
  //   };

  //   addWatchedMovie(watchedMovie);
  // };

  return (
    <div>
      <div className="wantToWatch-container">
        <div className="wantToWatch-inner">
          <h3>What to watch...</h3>

          {wantToWatch.map((item) => (
            <div key={item.id} id={item.id}>
              <div className="want-to-item">
                <h2 className="want-movie-list">{item.movie}</h2>
                <button className="finished">
                  Watched<i class="fa-solid fa-check"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WantToWatch;
