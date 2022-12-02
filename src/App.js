import Header from "./components/Header";
import WatchedList from "./components/WatchedList";
import WantToWatch from "./components/WantToWatch";
import Spin from "./components/Spin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  // WATCHED LOCAL STORAGE
  const localWatched = localStorage.getItem("watchedMovies")
    ? JSON.parse(localStorage.getItem("watchedMovies"))
    : [];

  const [watchedMovies, setWatchedMovies] = useState(localWatched);

  // WANT TO LOCAL STORAGE
  const localWantToWatch = localStorage.getItem("wantToWatch")
    ? JSON.parse(localStorage.getItem("wantToWatch"))
    : [];
  const [wantToWatch, setWantToWatch] = useState(localWantToWatch);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <WatchedList
                watchedMovies={watchedMovies}
                setWatchedMovies={setWatchedMovies}
                wantToWatch={wantToWatch}
                setWantToWatch={setWantToWatch}
              />
            }
          />
          <Route path="/wantToWatch" element={<WantToWatch />} />
          <Route path="/spin" element={<Spin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
