import React, { Component } from "react";
import Hero from "../img/hero.jpg";
import Wave from "../img/wave.svg";
import "../index.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="full-height">
        <div className="hero ">
          <div className="overlay ">
            {" "}
            <div className="hero-text ">
              <h4>
                <strong>
                  JUST ANOTHER WRITTER - DIRECTOR, BUT THIS ONE BREATHE
                  CREATIVITY, lol.
                </strong>
              </h4>
            </div>
            <a href="./#films" className="btn btn-info  mt-3">
              See My Work
            </a>
          </div>
          <img src={Wave} className="wave-img" />
        </div>
      </div>
    );
  }
}
