import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg  bg-dark border-bottom border-body nav-underline"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/src/assets/givngologonew.png"
            alt="Logo"
            className="d-inline-block align-text-top"
            width="100px"
          />
        </a>

        <div
          className="collapse navbar-collapse center-nav"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav justify-content-center">
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
