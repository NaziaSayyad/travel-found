
import React from "react";
import "./LadhakTripBanner.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const heading = "Ladakh Trips";
const para = "Discover the world, one destination at a time";
const link = "/ladakh";

// const images = [
//   {
//     place: "Manali",
//     price: "45,000",
//     img: "https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg",

//   },
//   {
//     place: "Leh",
//     price: "40,000",
//     img: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg"
//   },
//   {
//     place: "Pangong",
//     price: "7000",
//     img: "https://i.postimg.cc/yNGFDY4w/118.jpg"
//   },
//   {
//     place: "Turtuk",
//     price: "40,000",
//     img: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg"
//   },
//   {
//     place: "Nubra",
//     price: "45000",
//     img: "https://i.postimg.cc/gcZhYGv2/lake-489289.jpg"
//   },
//   {
//     place: "Manali",
//     price: "45,000",
//     img: "https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg",

//   },
//   {
//     place: "Leh",
//     price: "40,000",
//     img: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg"
//   },
//   {
//     place: "Pangong",
//     price: "7000",
//     img: "https://i.postimg.cc/yNGFDY4w/118.jpg"
//   },
//   {
//     place: "Turtuk",
//     price: "40,000",
//     img: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg"
//   },
//   {
//     place: "Nubra",
//     price: "45000",
//     img: "https://i.postimg.cc/gcZhYGv2/lake-489289.jpg"
//   }
// ];

const LadhakTripBanner = ({Banner,images,heading,link}) => {
  return (
    <div className="international-trips">
      <div className="trip-banner">
        <div className="trip-content">
          <h1>{heading}</h1>
          <p>{para}</p>
          <Link to={link} className="explore-btn">
            Explore
          </Link>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        className="trip-swiper"
         loop={false}
          breakpoints={{
            
            1200: { slidesPerView: 4 }, // 👈 Show 4 on large screens
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
      >
        {images?.map((i, index) => (
          <SwiperSlide key={index}>
            <div className="ladakh-trip-slide">
              <Link to={link} className="ladakh-trip-card">
                <img src={i.img} alt={i.place} className="trip-img" />
                <div className="trip-info">
                  <h3>{i.place}</h3>
                  {/* <p>{i.price}</p> */}
                </div>
              </Link>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default LadhakTripBanner;