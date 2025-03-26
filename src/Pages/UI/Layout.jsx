import { useState, useEffect } from "react";
import "./Crousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    url: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.postimg.cc/G2rdbb8C/road-7825297.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.postimg.cc/7LSqv5L9/Sangam-point-Leh-Ladakh.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
];


export default function Carousel() {
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
                <span className="price">{item.price}</span>
                <button className="callback-btn">Request a Callback</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
