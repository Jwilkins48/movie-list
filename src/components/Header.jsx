import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/header.css";

function Header() {
  const links = [
    { id: 1, title: "Watched List", path: "/" },
    { id: 2, title: "Want To Watch", path: "/wantToWatch" },
    { id: 3, title: "Spin", path: "/spin" },
  ];

  const [active, setActive] = useState(1);

  // const setActiveColor = (tab) => {
  //   active === tab ?
  // }

  return (
    <div className="Header-container">
      <div className="title-container">
        <Link to={"/"}>
          <h2>Movie Time</h2>
        </Link>
        <i className="fa-solid fa-ticket icon"></i>
      </div>

      <div className="mobile-tab-container">
        {links.map((tab) => (
          <div key={tab.id} id={tab.id}>
            <Link className="link" to={tab.path}>
              <li
                style={{ backgroundColor: tab.id === active ? "#b44646" : "" }}
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
