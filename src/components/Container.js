import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class Container extends Component {
  render(props) {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3 transform mx-auto">
        <Fade bottom>
          <div className="card container-bg">
            <div className="embed-responsive embed-responsive-16by9 card-img-top">
              <iframe
                width="560"
                height="315"
                src={this.props.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
            <div className="card-body ">
              <p className="card-text">
                <strong>Title : </strong>
                <small>{this.props.title}</small>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
