
// CurvedSlideshow.jsx
import React, { useRef, useState } from "react";
import "./Curveslideshow.css";



const slides = [
  {
    img: "https://i.ibb.co/xSdjvFhP/ladakh-7215612.jpg",
    label: "Ladakh",
    className: "card first",
  },
  {
    img: "https://i.ibb.co/Ld27sZCX/1-37.jpg",
    label: "Ladakh",
    className: "card",
  },
  {
    img: "https://i.ibb.co/7dJgXrCQ/1-44.jpg",
    label: "Ladakh",
    className: "card",
  },
  {
    img: "https://i.ibb.co/23kwkGSs/1-3.jpg",
    label: "Ladakh",
    className: "card last",
  },
  {
    img: "https://i.ibb.co/3y6Dzx6M/divyanshi-verma-w-Lq-V0-R6-LYNI-unsplash.jpg",
    label: "Ladakh",
    className: "card",
  },
  {
    img: "https://i.ibb.co/7dJgXrCQ/1-44.jpg",
    label: "Ladakh",
    className: "card",
  },
  {
    img: "https://i.ibb.co/zHbVCHNZ/1-17.jpg",
    label: "Ladakh",
    className: "card last",
  },
  {
    img: "https://i.ibb.co/XrMWrY1y/pexels-arthousestudio-5014919.jpg", 
    label: "Ladakh",
    className: "card first",
  },
  {
    img: "https://i.ibb.co/gZNV119d/pexels-abhilash-mishra-190481-1539700.jpg",
    label: "Ladakh",
    className: "card",
  },
  {
    img: "https://i.ibb.co/tT6YB2kb/mountain-7565282.jpg",
    label: "Ladakh",
    className: "card",
  },
  {
    img:"https://i.ibb.co/3y6Dzx6M/divyanshi-verma-w-Lq-V0-R6-LYNI-unsplash.jpg",
    label: "Ladakh",
    className: "card last",
  },
  {
    img: "https://i.ibb.co/Fqqq7vN3/manas-aggarwal-Pf-ZQ-Gfmqe-I-unsplash.jpg",
    label: "Ladakh",
    className: "card",
  },
  {
    img: "https://i.ibb.co/FLVKvs0B/1-15.jpg",
    label: "Ladakh",
    className: "card",
  },
  {
    img: "https://i.ibb.co/Gfq6dGhT/1-26.jpg",
    label: "Ladakh",
    className: "card last",
  },
  {
    img: "https://i.ibb.co/MkjvrGYs/1-20.jpg",
    label: "Ladakh",
    className: "card last",
  },
];
const CurvedSlideshow = () => {
  const carouselRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const slidesPerView = 5;
  const cardWidth = 270;


  const scrollSlider = (direction) => {
    if (!carouselRef.current) return;

    const maxIndex = slides.length - slidesPerView;
    const newIndex = Math.min(Math.max(visibleIndex + direction, 0), maxIndex);

    carouselRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    });

    setVisibleIndex(newIndex);
  };


  return (
    <>
      <div className="curved-slideshow">
        <h2 className="title">Ladakh Moments</h2>
        <div className="carousel-wrapper">
          <button
            className="arrow left"
            onClick={() => scrollSlider(-1)}
            disabled={visibleIndex === 0}
          >
            &#10094;
          </button>


          <div className="carousel" ref={carouselRef}>
            {slides.map((slide, index) => {
              let cardClass = "card";

              if (index === visibleIndex) cardClass += " first";
              else if (index === visibleIndex + 1) cardClass += " first2";
              else if (index === visibleIndex + 3) cardClass += " last2";
              else if (index === visibleIndex + 4) cardClass += " last";

              return (
                <div className={cardClass} key={index}>
                  <img src={slide.img} alt={slide.label} />
                  <div className="label">📍 {slide.label}</div>
                </div>
              );
            })}
          </div>

          <button
            className="arrow right"
            onClick={() => scrollSlider(1)}
            disabled={visibleIndex + slidesPerView >= slides.length}
          >
            &#10095;
          </button>


        </div>
      </div>
    </>
  );
};

export default CurvedSlideshow;
