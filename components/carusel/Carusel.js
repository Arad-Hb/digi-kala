import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from './CaruselArrow';
import { PrevArrow } from './CaruselArrow';
import Card from '../MainPage/Products/Card';
import Link from "next/link";
import { useRouter } from "next/router";

const Carusel = (props) => {

  
    let settings = {
        className: "innerSliderDiv",
        adaptiveHeight: true,
        speed: 700,
        centerMode: true,
        centerPadding: "1em",
        swipeToSlide: true,
        rtl: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow width="30px" height="30px" />,
        prevArrow: <PrevArrow width="30px" height="30px" />,
        responsive: [
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              speed: 100,
              adaptiveHeight: true,
              slidesToScroll: 1,
              centerPadding: "1px",
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              speed: 100,
              adaptiveHeight: true,
              slidesToScroll: 1,
              centerPadding: "10px",
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 2,
              speed: 100,
              adaptiveHeight: true,
              slidesToScroll: 1,
              centerPadding: "20px",
            },
          },
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 3,
              speed: 100,
              adaptiveHeight: true,
              slidesToScroll: 1,
              centerPadding: "1px",
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              speed: 100,
              adaptiveHeight: true,
              slidesToScroll: 1,
              centerPadding: "1px",
            },
          },
          {
            breakpoint: 1171,
            settings: {
              slidesToShow: 5,
              speed: 100,
              adaptiveHeight: true,
              slidesToScroll: 1,
              centerPadding: "1px",
            },
          },
          {
            breakpoint: 1281,
            settings: {
              slidesToShow: 6,
              speed: 100,
              adaptiveHeight: true,
              slidesToScroll: 1,
              centerPadding: "5px",
            },
          },
        ],
      };

  return (
    <div className="slider-container">
      <Slider
      {...settings}
      autoplay={true}
      autoplaySpeed={2000}
      focusOnSelect={false}
      rtl={true}
      slidesToScroll={1}
      >
          {props.data.map((item) => (
            <Card key={item.id} product = {item} />
          ))}
      </Slider>
    </div>
    
        
  );
}

export default Carusel