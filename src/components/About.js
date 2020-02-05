import React from "react";
import Profile from "../img/profile.png";

export default function About() {
  return (
    <div className="bg-about">
      <div className="header-color pages container-fluid "></div>
      <div className="container-fluid pt-3 ">
        <div className="card card-bg mb-2 p-3 text-light about-mg">
          <h3 className="text-center about-heading">Who Am i?</h3>
          <div className="row">
            <div className=" d-flex justify-content-center col-xs-12 col-sm-12 col-md-4 col-lg-4  p-3">
              <img className=" profile-pic " src={Profile} alt="Rajendra Thakurathi Profile " />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center p-3">
              <p className="about-text ">
                I’m a writer, director and an MFA Film and Television Production
                graduate of USC School of Cinematic Arts in Los Angeles,
                California. I create stories and films that transgress cultures,
                borders and explore what it means to be human beings. I recently
                interned at Pixar Animation Studios where I worked in the
                editorial department on Onward, their upcoming original film. I
                also assisted on Toy Story 4 and Incredibles 2, among others. I
                did my undergraduate from Loras College in Dubuque, Iowa, where
                I also used to be co-executive editor of the college newspaper.
              </p>
            </div>
          </div>
        </div>
        <div className="card card-bg1 p-4 text-center text-light about-mg">
          <p className="about-text">
            I’m from Nepal and spent a lot of my childhood in comic book aisles,
            video game parlors and my dad’s hardware shop. I would often follow
            ants and birds with my Handycam imagining myself as a wildlife
            videographer. I have been surrounded by storytelling all my life –
            from typing news in Nepali for a local newspaper in my hometown as a
            kid to serving as the executive editor for my college newspaper. I
            have worked as a newspaper photo intern traversing the nooks and
            crannies of Iowa, as a kids photographer at Shooting Star
            Productions in San Francisco, research intern at New York Times,
            film development intern at MJZ, and video intern at BuzzFeed Motion
            Pictures, among others. But it is the other experiences - being
            around little kids in my large family, working unique jobs - a crab
            steamer at a seafood restaurant, a swimming pool cleaner, selling
            fireworks on a July 4th, being a resident advisor in college, and
            experiencing America as an immigrant are what make me.
          </p>
        </div>
        <div className="card card-bg2 my-2 p-3 text-light about-mg">
          <p className="about-text text-center mx-auto w-75 ">
            I'm inspired by childlike wonder, feelings, magic and poetry. I'm
            influenced by the works of Spike Jonze, Charlie Kaufman, Andrew
            Niccol, Billy Wilder, Steven Spielberg and Pete Docter. <br />
            <br />I also dabble in poetry, comedy, photography and empowering
            the voiceless.
          </p>
          <hr />
          <a href="./Resume" className="btn btn-md btn-outline-light">
            {" "}
            Resume Here
          </a>
        </div>
      </div>
    </div>
  );
}
