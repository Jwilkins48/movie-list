import Header from "./components/Header";
import WatchedList from "./components/WatchedList";
import WantToWatch from "./components/WantToWatch";
import Spin from "./components/Spin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  // WANT TO LOCAL STORAGE

  const localWantToWatch = localStorage.getItem("wantToWatch")
    ? JSON.parse(localStorage.getItem("wantToWatch"))
    : [];
  const [wantToWatch, setWantToWatch] = useState(localWantToWatch);

  // WATCHED LOCAL STORAGE
  const localWatched = localStorage.getItem("watchedMovies")
    ? JSON.parse(localStorage.getItem("watchedMovies"))
    : [];
  const [watchedMovies, setWatchedMovies] = useState(localWatched);

  const [movieName, setMovieName] = useState("");
  const [watchedMovieName, setWatchedMovieName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [date, setDate] = useState("2022-12-01");
  const [showRate, setShowRate] = useState(false);
  const [comment, setComment] = useState("");
  const clearBoard = () => {
    setComment("");
    setShowRate(false);
    setDate("2022-12-01");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header wantToWatch={wantToWatch} setWantToWatch={setWantToWatch} />

        <Routes>
          <Route
            path="/"
            element={
              <WatchedList
                setOpenModal={setOpenModal}
                openModal={openModal}
                clearBoard={clearBoard}
                setDate={setDate}
                setShowRate={setShowRate}
                setComment={setComment}
                date={date}
                showRate={showRate}
                comment={comment}
                watchedMovieName={watchedMovieName}
                setWatchedMovieName={setWatchedMovieName}
                movieName={movieName}
                setMovieName={setMovieName}
                watchedMovies={watchedMovies}
                setWatchedMovies={setWatchedMovies}
                wantToWatch={wantToWatch}
                setWantToWatch={setWantToWatch}
              />
            }
          />
          <Route
            path="/wantToWatch"
            element={
              <WantToWatch
                setOpenModal={setOpenModal}
                openModal={openModal}
                clearBoard={clearBoard}
                watchedMovieName={watchedMovieName}
                setWatchedMovieName={setWatchedMovieName}
                watchedMovies={watchedMovies}
                setWatchedMovies={setWatchedMovies}
                movieName={movieName}
                setMovieName={setMovieName}
                wantToWatch={wantToWatch}
                setWantToWatch={setWantToWatch}
              />
            }
          />
          <Route
            path="/spin"
            element={
              <Spin wantToWatch={wantToWatch} setWantToWatch={setWantToWatch} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
