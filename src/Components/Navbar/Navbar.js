import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Imgsrc from "../../Shared/Imgsrc";
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

function Navbarheader() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container d-flex align-items-center px-4">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <form action="#" className="searchform order-lg-last">
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control pl-3"
              placeholder="Search"
            />
            <button
              type="submit"
              placeholder=""
              className="form-control search"
            >
              <span className="ion-ios-search">
                <FaSearch />
              </span>
            </button>
          </div>
        </form>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link pl-0">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staff" className="nav-link">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbarheader;
