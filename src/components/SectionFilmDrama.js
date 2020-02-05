import React, { Component } from "react";
import Container from "./Container";

export default class SectionFilmDrama extends Component {
  render(props) {
    return (
      <div className="pos">
        {" "}
        <div className="card-bg-drama" id="films">
          <div className="container py-3  ">
            <div className="text-center text-heading-color mb-4">
              {" "}
              <b>Short Films - Drama</b>
              <div className="line my-2"></div>
            </div>

            <div className="row">
              <Container
                url="https://player.vimeo.com/video/134282209"
                title="Love in the Rain"
              />
              <Container
                url="https://player.vimeo.com/video/149194620"
                title="My Claire"
              />

              <Container
                url="https://player.vimeo.com/video/260576891"
                title="The Cartoonist"
              />

              <Container
                url="https://player.vimeo.com/video/91763932"
                title="The Dishwasher"
              />

              <Container
                url="https://player.vimeo.com/video/190662375"
                title="100 Days of Smoke Free"
              />
              <Container
                url="https://player.vimeo.com/video/132500978"
                title="Being Kicked"
              />
              <Container
                url="https://player.vimeo.com/video/114514265"
                title="Mother"
              />
              <Container
                url="https://player.vimeo.com/video/134282209"
                title="The Last Leaf"
              />
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
