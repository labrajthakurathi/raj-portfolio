import React, { Component } from "react";
import Landing from "./Landing";
import SectionFilmDrama from "./SectionFilmDrama";
import SectionFilmComedy from "./SectionFilmComedy";
import SectionMusic from "./SectionMusic";
import SectionComm from "./SectionComm";
import Contact from "./Contact";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <SectionFilmDrama />
        <SectionFilmComedy />
        <SectionMusic />
        <SectionComm />
        <Contact />
      </div>
    );
  }
}
