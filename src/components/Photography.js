import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original:
      "https://live.staticflickr.com/65535/49446108711_2a030fc298_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446108711_2a030fc298_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445634118_44c8f40a99_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445634118_44c8f40a99_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445633853_0116e6132b_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445633853_0116e6132b_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445632463_61b274167f_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445632463_61b274167f_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445632248_b7cdf64cfb_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445632248_b7cdf64cfb_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446108666_b9a0d0b28a_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446108666_b9a0d0b28a_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446334547_2879b43aa8_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446334547_2879b43aa8_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446333822_3b9afc705e_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446333822_3b9afc705e_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446333857_13a0eef44f_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446333857_13a0eef44f_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446334997_faa6b63200_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446334997_faa6b63200_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446332732_018d6c07ee_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446332732_018d6c07ee_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445632133_bef871d7b3_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445632133_bef871d7b3_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446107811_d44ef0e369_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446107811_d44ef0e369_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446108281_f8cc5b99bf_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446108281_f8cc5b99bf_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445632348_3abf004d9d_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445632348_3abf004d9d_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446107996_8b7383815f_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446107996_8b7383815f_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446108116_5ce5feef0b_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446108116_5ce5feef0b_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446333197_95355ce8e7_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446333197_95355ce8e7_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446333357_c3a8e54c2f_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446333357_c3a8e54c2f_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446109331_a00d1000c3_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446109331_a00d1000c3_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445632733_ff454d308c_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445632733_ff454d308c_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446108446_7854923d4d_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446108446_7854923d4d_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446333522_4aef117b2b_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446333522_4aef117b2b_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445633038_8831424832_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49445633038_8831424832_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446333762_08cf915359_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446333762_08cf915359_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446333897_ecb8bfbf40_o.png",
    thumbnail:
      "https://live.staticflickr.com/65535/49446333897_ecb8bfbf40_s.png",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446108881_0c29c2445c_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446108881_0c29c2445c_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445633373_6d3fa2830e_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445633373_6d3fa2830e_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446108951_c71b5348c8_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446108951_c71b5348c8_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445633478_a7de527be0_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445633478_a7de527be0_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446109071_4942e2edb3_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446109071_4942e2edb3_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445633578_a3f2e1e4dd_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445633578_a3f2e1e4dd_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446334237_9ab51e5919_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446334237_9ab51e5919_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446109281_882edd0e80_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446109281_882edd0e80_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446109416_a334c32fae_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446109416_a334c32fae_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446334622_8981d48254_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446334622_8981d48254_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446334737_1cc2ce1d3d_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446334737_1cc2ce1d3d_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445634188_f6a5f53b89_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445634188_f6a5f53b89_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445634323_70a5a34208_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445634323_70a5a34208_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445634463_0dcf10f1ce_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445634463_0dcf10f1ce_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445634513_dccf4c5acc_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445634513_dccf4c5acc_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446335127_b745d8b6f7_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446335127_b745d8b6f7_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446335087_7a7bba0b4a_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446335087_7a7bba0b4a_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445634603_a53798967d_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445634603_a53798967d_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446335187_17ddbafbd8_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446335187_17ddbafbd8_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49445634803_369da9b1cd_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49445634803_369da9b1cd_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446335272_bab60ca682_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446335272_bab60ca682_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446110311_bc7d59d56c_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446110311_bc7d59d56c_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446335377_a2503db929_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446335377_a2503db929_s.jpg",
    originalClass: "cor-img"
  },
  {
    original:
      "https://live.staticflickr.com/65535/49446335342_e66cc1049a_o.jpg",
    thumbnail:
      "https://live.staticflickr.com/65535/49446335342_e66cc1049a_s.jpg",
    originalClass: "cor-img"
  }
];

class Photography extends React.Component {
  render() {
    return (
      <div className="">
        <div className="header-color pages container-fluid "></div>
        <div className="container-fluid m-0 p-0  cor-height">
          <div className="text-center text-light mt-1 ">
            {" "}
            <b>Photography</b>
            <div className="line my-2 bg-dark"></div>
          </div>{" "}
          <ImageGallery items={images} />
        </div>
      </div>
    );
  }
}

export default Photography;
