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

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <WatchedList
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
