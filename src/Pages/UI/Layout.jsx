import { useState, useEffect } from "react";
import "./Crousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Carousel({images}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="carousel-slide">
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <div className="carousel-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span className="Price">{item.price}</span>
            {/* <button className="callback-btn">Request a Callback</button> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
