import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@mui/material/Button";

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
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse center-nav"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav justify-content-center mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/psds">
                PSDs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/textures">
                Textures
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elements">
                Elements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/creatorshops">
                Creator Shops
              </NavLink>
            </li>
          </ul>
        </div>
        <Button variant="contained">
          <NavLink className="nav-link" to="/signin">
            Sign In
          </NavLink>
        </Button>
        <Button variant="outlined">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
