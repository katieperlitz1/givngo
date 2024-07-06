import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg  bg-dark border-bottom border-body "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/images/givngologonew.png"
            alt="Logo"
            className="d-inline-block align-text-top"
            width="100px"
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse center-nav"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav justify-content-center mr-auto mt-2 mt-lg-0">
            <li>
              <NavLink className="nav-link" to="/psds">
                PSDs
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/textures">
                Textures
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/elements">
                Elements
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/creatorshops">
                Creator Shops
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
      </div>
    </nav>
  );
};

export default Navbar;
