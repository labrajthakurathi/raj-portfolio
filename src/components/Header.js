import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

export default function Header() {
  const [display, setDisplay] = useState(false);
  let hideMenu = () => {
    setDisplay(!display);
  };
  const [showItems, setShow] = useState(false);
  let hideShow = () => {
    setShow(!showItems);
  };

  const initialDisplay = {
    transform: "translate(-100%, 0)"
  };
  const onClickDisplay = {
    transform: "none"
  };
  return (
    <div className="header-wrapper ">
      <nav role="navigation ">
        <div id="menuToggle" className={display ? "open" : ""}>
          <input type="checkbox" onClick={() => setDisplay(!display)} />

          <span />
          <span />
          <span />

          <ul
            id="menu"
            onClick={hideMenu}
            style={display ? onClickDisplay : initialDisplay}
          >
            <div className="items" id="sub-menu">
              <a href="#" onClick={() => setShow(!showItems)}>
                <li className="border-box px-3">
                  {" "}
                  videos{" "}
                  <i
                    className={
                      showItems
                        ? "ml-2 fas fa-sort-down rotate"
                        : "ml-2 fas fa-sort-down"
                    }
                  />
                </li>
              </a>
              <div
                className={showItems ? "sub-menu showItems" : "sub-menu hide"}
              >
                <a href="./#films">Films</a>
                <a href="./#commercial">Commercials</a>
                <a href="./#music-videos">Music Videos</a>
              </div>
            </div>
            <div className="items big-header">
              <a href="./#films">
                <li>Films</li>
              </a>
            </div>
            <div className="items big-header">
              <a href="./#commercial">
                <li className="ml-2">Commercials</li>
              </a>
            </div>
            <div className="items big-header">
              <a href="./#music-videos">
                <li>Music Videos</li>
              </a>
            </div>

            <div className="items">
              <a href="./visual-illustrations">
                <li>Visual Illustrations</li>
              </a>
            </div>
            <div className="items">
              <a href="./photography">
                <li>Photography</li>
              </a>
            </div>
            <div className="items">
              <a href="./about">
                <li>About</li>
              </a>
            </div>
            <div className="items">
              <a href="./#contact">
                <li>Contact</li>
              </a>
            </div>
          </ul>
        </div>
      </nav>

      <div className="logo-wrapper ">
        <div className="logo">
          <a href="/">
            <h2> Rajendra Thakurathi</h2>
            <small>WRITTER - DIRECTOR</small>
          </a>
        </div>
      </div>
    </div>
  );
}
