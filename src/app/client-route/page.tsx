"use client";
// import { serverSideFunction } from "@/src/utils/server-utils";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import f1 from "@/public/image/f1.png";
export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image alt="error" src={f1} />
        </div>

        <div>
          <Image alt="error" src={f1} />
        </div>
        <div>
          <Image alt="error" src={f1} />
        </div>
      </Slider>
    </div>
  );
}
