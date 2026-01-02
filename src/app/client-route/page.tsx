"use client";
// import { serverSideFunction } from "@/src/utils/server-utils";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image
            height={1000}
            width={1000}
            alt="error"
            src="https://unsplash.com/photos/programming-code-abstract-technology-background-of-software-developer-and-computer-script-ltpb_WinC3Y"
          />
        </div>
        <div>
          <Image
            height={1000}
            width={1000}
            alt="error"
            src="https://unsplash.com/photos/macbook-pro-turned-on-Bd7gNnWJBkU"
          />
        </div>
        <div>
          <Image
            height={1000}
            width={1000}
            alt="error"
            src="https://unsplash.com/photos/a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo"
          />
        </div>
        <div>
          <Image
            height={1000}
            width={1000}
            alt="error"
            src="https://unsplash.com/photos/a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo"
          />
        </div>
      </Slider>
    </div>
  );
}
