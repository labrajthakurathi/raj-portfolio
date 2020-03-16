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
            <div className="hero-text text-center">
              <h4>
                <strong>
                  JUST ANOTHER WRITTER - DIRECTOR, BUT THIS ONE BREATHE
                  CREATIVITY, lol.
                </strong>
              </h4>
              <lead>
                {" "}
                I create stories and films that transgress cultures, borders and
                explore what it means to be human beings
              </lead>
            </div>
            <a href="./#films" className="btn btn-info  mt-3">
              See My Works
            </a>
          </div>
          <img src={Wave} className="wave-img" />
        </div>
      </div>
    );
  }
}
