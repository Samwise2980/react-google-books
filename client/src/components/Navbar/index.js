import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
  const location = useLocation();

  const navLinkClassName = (path) =>
    path === location.pathname ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/search" className={navLinkClassName("/search")}>
              Search
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/saved" className={navLinkClassName("/saved")}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
