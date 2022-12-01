import Header from "./components/Header";
import WatchedList from "./components/WatchedList";
import WantToWatch from "./components/WantToWatch";
import Spin from "./components/Spin";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<WatchedList />} />
          <Route path="/wantToWatch" element={<WantToWatch />} />
          <Route path="/spin" element={<Spin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
