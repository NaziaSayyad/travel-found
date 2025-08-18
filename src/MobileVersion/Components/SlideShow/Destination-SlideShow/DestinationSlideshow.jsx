import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./DestinationSlideshow.css";


const packages = [
  {
    name: "Ladakh",
    img: "https://i.ibb.co/MxxyH6Rn/vivek-kumar-7k1-IKQZik-Sc-unsplash.jpg",
    link : "/ladakh",
    price: "₹21,999"
  },

  {
    name: "Spiti",
    img: "https://i.ibb.co/MxxyH6Rn/vivek-kumar-7k1-IKQZik-Sc-unsplash.jpg",
    link : "/spiit",
    price: "₹39,999"
  },
  {
    name: "Kashmir",
    img: "https://i.ibb.co/Hfmsv9nG/pexels-arjun-godara-277047411-27818167.jpg",
   link : "/kashmir",
    price: "₹39,999"
  },
  {
    name: "Himachal",
    img: "https://i.ibb.co/wZN0Fyd0/pexels-karan-hansraj-2147704894-29774206.jpg",
   link : "/himachal",
    price: "₹42,999"
  }
];
export const DestinationSlideShow = () => {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {packages.map((el, index) => (
            <SwiperSlide key={index}>
              <a href={el.link} className="card-slide">
                <img src={el.img} alt={el.name} />
                <div className="card-content">
                  <h3>{el.name}</h3>
                  <p>Starting Price {el.price}</p>
                </div>
              </a>
            </SwiperSlide> 
          ))}
        </Swiper>
      </div>
    </>
  );
};

