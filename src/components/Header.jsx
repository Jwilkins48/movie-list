import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spin from "../components/Spin";
import "../CSS/header.css";

function Header({ wantToWatch, setWantToWatch }) {
  const links = [
    { id: 1, title: "Watched List", path: "/" },
    { id: 2, title: "Want To Watch", path: "/wantToWatch" },
    { id: 3, title: "Spin", path: "/spin" },
  ];

  const [active, setActive] = useState(1);
  const [spinner, setSpinner] = useState(false);

  const handleChange = () => {
    setSpinner(!spinner);
    console.log(spinner);
  };

  return (
    <div className="Header-container">
      <div className="title-container">
        <Link to={"/"}>
          <h2>Movie Time</h2>
        </Link>
        <div className="right-header-info">
          <button onClick={handleChange} className="spin-header">
            Can't Decide?
          </button>
          <i className="fa-solid fa-ticket icon"></i>
        </div>
      </div>

      <div
        className={
          spinner ? "spin-modal-container spinner-open" : "spin-modal-container"
        }
      >
        <div className="spin-inner">
          <div onClick={handleChange}>
            <i className="fa-solid fa-xmark spin-x"></i>
          </div>
          <Spin wantToWatch={wantToWatch} setWantToWatch={setWantToWatch} />
        </div>
      </div>

      <div className="mobile-tab-container">
        {links.map((tab) => (
          <div key={tab.id} id={tab.id}>
            <Link className="link" to={tab.path}>
              <li
                style={{ backgroundColor: tab.id === active ? "#5642c7" : "" }}
                onClick={() => setActive(tab.id)}
                className={tab.id === active ? "active tab" : "tab"}
              >
                {tab.title}
              </li>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
