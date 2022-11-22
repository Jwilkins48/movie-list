import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/header.css";

function Header() {
  const links = [
    { id: 1, title: "Movies Watched", path: "/" },
    { id: 2, title: "Want To Watch", path: "/wantToWatch" },
    { id: 3, title: "Spin", path: "/spin" },
  ];

  const [active, setActive] = useState(1);

  return (
    <div className="Header-container">
      <div className="title-container">
        <h2>Movie Time</h2>
        <i class="fa-solid fa-ticket icon"></i>
      </div>

      <div className="mobile-tab-container">
        {links.map((tab) => (
          <div key={tab.id} id={tab.id}>
            <Link className="link" to={tab.path}>
              <li
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
