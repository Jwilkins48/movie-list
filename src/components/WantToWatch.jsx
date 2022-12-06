import React, { useEffect } from "react";
import "../CSS/wantToWatch.css";
import { v4 as uuidv4 } from "uuid";
import { Scrollbars } from "react-custom-scrollbars";

function WantToWatch({
  clearBoard,
  openModal,
  wantToWatch,
  setWantToWatch,
  setOpenModal,
  setMovieName,
  movieName,
  setWatchedMovieName,
}) {
  useEffect(() => {
    localStorage.setItem("wantToWatch", JSON.stringify(wantToWatch));
  });

  const addWantToWatchMovie = (wantToWatchMovie) => {
    setWantToWatch([wantToWatchMovie, ...wantToWatch]);
  };

  const deleteWantToWatchMovie = (id) => {
    setWantToWatch(wantToWatch.filter((item) => item.id !== id));
  };

  // Add to Want to Watch List
  const handleSubmitWant = (e) => {
    e.preventDefault();
    const newMovie = {
      id: uuidv4(),
      movie: movieName,
      checked: false,
    };
    addWantToWatchMovie(newMovie);
    console.log(movieName);
    e.target.reset();
  };

  const watchedModal = (movie, id) => {
    setWatchedMovieName(movie);
    clearBoard();
    setOpenModal(!openModal);
  };

  return (
    <div className="want">
      <div className="wantToWatch-container">
        <div className="wantToWatch-inner">
          <h3>What to watch...</h3>
          <form onSubmit={handleSubmitWant} className="input-container">
            <input
              onChange={(e) => setMovieName(e.target.value)}
              className="wantToWatch-input"
              placeholder="Want to watch..."
            ></input>
            <button className="wantToWatch-inputBtn">Add</button>
          </form>

          <div className="list-container">
            {wantToWatch?.map((item) => (
              <div key={item.id} id={item.id}>
                <div className="want-to-item">
                  <h2 className="want-movie-list">{item.movie}</h2>
                  <button
                    onClick={(e) => watchedModal(item.movie, item.id)}
                    className="finished"
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  {/* Delete want to watch */}
                  <button
                    onClick={() => deleteWantToWatchMovie(item.id)}
                    className="delete-want-btn"
                  >
                    <i className="fa-solid fa-xmark "></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WantToWatch;
