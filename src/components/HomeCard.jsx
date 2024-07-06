import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function HomeCard() {
  return (
    <div>
        <div className="row align-items-md-stretch">
        <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>PSD Files</h2>
            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            <NavLink to="/psds" className="btn btn-outline-light" type="button">Example button</NavLink>
            </div>
        </div>
        <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Textures and Overlays</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <NavLink to="/textures" className="btn btn-outline-secondary" type="button">Example button</NavLink>
            </div>
        </div>
        </div>
    </div>
  );
};

export default HomeCard;