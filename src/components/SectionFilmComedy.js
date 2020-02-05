import React, { Component } from "react";
import Container from "./Container";

export default class SectionFilmComedy extends Component {
  render(props) {
    return (
      <div>
        <div className="card-bg-drama" id="commercial">
          <div className="container py-3">
            <div className="text-center text-heading-color mb-4">
              {" "}
              <b>Short Films - Comedy</b>
              <div className="line my-2"></div>
            </div>
            <div className="row">
              <Container
                url="https://www.youtube.com/embed/kGzJBOUNdnU"
                title="Moments You Wish You Could Undo"
              />

              <Container
                url="https://www.youtube.com/embed/X4LyME3pFpI"
                title="People Give Up Social Media for a Week"
              />

              <Container
                url="https://player.vimeo.com/video/20356895"
                title="An Unrestricted Ball"
              />
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
