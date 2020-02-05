import React, { Component } from "react";
import Container from "./Container";

export default class SectionMusic extends Component {
  render(props) {
    return (
      <div>
        <div className="card-bg-drama" id="music-videos">
          <div className="container py-3">
            <div className="text-center text-heading-color mb-4">
              {" "}
              <b>Music Videos</b>
              <div className="line my-2"></div>
            </div>
            <div className="row">
              <Container
                url="https://www.youtube.com/embed/1ViEzkIE95Q"
                title=" Yo Mann"
              />

              <Container
                url="https://www.youtube.com/embed/jFeItHJ0puI"
                title=" 6 Months"
              />
              <Container
                url="https://player.vimeo.com/video/213975781"
                title="Is It Worth It - PITCH"
              />
              <Container
                url="https://www.youtube.com/embed/qBIEcF4Rqqc"
                title="STORY OF DEATH AND LOVE"
              />
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
