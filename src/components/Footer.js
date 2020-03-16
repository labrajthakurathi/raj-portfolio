import React from "react";

export default function Footer() {
  return (
    <div className="bg-footer text-muted container-fluid pt-3 pb-2">
      <p className=" text-center">Find me on </p>
      <div className="row fab-container mx-auto">
        <div className="col text-center">
          <div className="fa-wrapper">
            <a href="https://vimeo.com/rajendrathakurathi" target="blink">
              <i className="fab fa-vimeo fa-2x "></i>
            </a>
          </div>
        </div>
        <div className=" col text-center">
          <div className="fa-wrapper">
            <a href="https://www.instagram.com/rajnroll/" target="blink">
              <i className="fab fa-instagram fa-2x "></i>
            </a>
          </div>
        </div>{" "}
        <div className="col text-center">
          <div className="fa-wrapper">
            <a href="https://twitter.com/rthakurathi" target="blink">
              <i className="fab fa-twitter fa-2x "></i>
            </a>
          </div>
        </div>{" "}
        <div className=" col text-center">
          <div className="fa-wrapper">
            <a
              href="https://www.linkedin.com/in/rajendra-thakurathi-84774015"
              target="blink"
            >
              <i className="fab fa-linkedin fa-2x "></i>
            </a>
          </div>
        </div>
      </div>

      <p className=" text-center pt-2">
        &#9400; 2020, All rights reserved
        <br />
        <small>
          {" "}
          Design and Developed by
          <a href="http://labraj.com"> Lab Raj Thakurathi</a>
        </small>
      </p>
    </div>
  );
}
