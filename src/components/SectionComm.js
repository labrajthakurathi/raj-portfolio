import React, { Component } from "react";
import Container from "./Container";

export default class SectionComm extends Component {
  render(props) {
    return (
      <div>
        <div className="card-bg-drama">
          <div className="container py-3">
            <div className="text-center text-heading-color mb-4 ">
              {" "}
              <b>Commercials</b>
              <div className="line my-2 "></div>
            </div>
            <div className="row">
              <Container
                url="https://www.youtube.com/embed/bH6nAp1-164"
                title="Are You Psycho"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
