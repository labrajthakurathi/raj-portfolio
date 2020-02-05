import React from "react";
import Pdf from "./resume.pdf";

export default function Resume() {
  return (
    <div>
      <div className="header-color pages container-fluid bg-dark"></div>
      <div className="pdf-wrapper">
        {" "}
        <embed src={Pdf} type="application/pdf" className=" img-fluid pdf" />
      </div>
    </div>
  );
}
