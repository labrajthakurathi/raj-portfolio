import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://live.staticflickr.com/65535/49446083416_bce79b2f5e_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446083416_18ca6626f2_s.jpg",
    originalClass: "cor-img"
  },
  {
    original: "//live.staticflickr.com/65535/49445607163_c12db5aefa_o.png",
    thumbnail: "//live.staticflickr.com/65535/49445607163_c12db5aefa_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446308942_8c93314db9_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446308942_8c93314db9_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446308967_186e58f4eb_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446308967_186e58f4eb_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445607563_196249e04d_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445607563_196249e04d_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446082756_9879bb258d_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446082756_9879bb258d_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446308482_9d01aaaab1_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446308482_9d01aaaab1_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446082986_4bbc04c509_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446082986_4bbc04c509_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446308077_673441305a_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446308077_673441305a_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445607503_182e71d88c_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445607503_182e71d88c_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445606893_b2c340a698_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445606893_b2c340a698_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445606953_deb9586a5c_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445606953_deb9586a5c_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446082716_fb4dcde4ec_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446082716_fb4dcde4ec_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445606783_d97d5847bc_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445606783_d97d5847bc_s.png",
    originalClass: "cor-img"
  },

  {
    original:
      "https://live.staticflickr.com/65535/49445606993_da9f76a050_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445606993_da9f76a050_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446082996_71d360a0fb_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446082996_71d360a0fb_s.png",
    originalClass: "cor-img"
  },

  {
    original:
      "https://live.staticflickr.com/65535/49446082921_f5a2f7fb85_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446082921_f5a2f7fb85_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446308677_72173868f5_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446308677_72173868f5_s.png",
    originalClass: "cor-img"
  },

  {
    original:
      "https://live.staticflickr.com/65535/49445606888_c630ef4743_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445606888_c630ef4743_o.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446082601_3a41a4f862_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446082601_3a41a4f862_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446308752_3431cfe39b_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446308752_3431cfe39b_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446308907_c27c2d7d2d_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446308907_c27c2d7d2d_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446308867_d3a7614c28_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446308867_d3a7614c28_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445607623_7d5db2f64c_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445607623_7d5db2f64c_s.png",
    originalClass: "cor-img"
  }
];

class Vi extends React.Component {
  render(props) {
    return (
      <div className=" ">
        <div className=" header-color pages container-fluid "></div>
        <div className="container-fluid m-0 p-0  cor-height">
          <div className="text-center text-light mt-1 ">
            {" "}
            <b>Visual-Illustration</b>
            <div className="line my-2 bg-dark"></div>
          </div>{" "}
          <ImageGallery items={images} showBullets={true} />
        </div>
      </div>
    );
  }
}

export default Vi;
