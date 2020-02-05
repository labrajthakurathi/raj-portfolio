import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/components/Home";
import Vi from "../src/components/vi";
import Photography from "../src/components/Photography";
import About from "../src/components/About";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Resume from ".//components/Resume";
import { Helmet } from "react-helmet";

function App(props) {
  function loader() {
    setTimeout(() => {
      var spin = document.getElementById("hide");
      spin.classList.remove("hide1");
    }, 3000);
  }
  return (
    <div className="App " onLoad={loader}>
      <Helmet>
        <title>
          {" "}
          Rajendra thakurathi is a writter/director based on los angeles,
          california
        </title>
      </Helmet>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/visual-illustrations"} component={Vi} />
            <Route exact path={"/photography"} component={Photography} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/resume"} component={Resume} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
