import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Mobile_TravelCarousel.css"; // Import CSS file
import { Link } from "react-router-dom";
// import { TripRoute } from "./Route";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { MdGroups } from "react-icons/md";
import { FaRupeeSign, FaTags } from "react-icons/fa";
import { TripRoute } from "../../Pages/UI/Route";

export const Mobile_TravelCarousel = ({ data, link }) => {

  const swiperRef = useRef(null);
  return (
    <>
      <div className="travel-carousel">
        <button className="nav-button left"
          onClick={() => swiperRef.current?.slidePrev()}>
          ❮
        </button>
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onReachEnd={(swiper) => {
            setTimeout(() => {
              swiper.slideTo(0, 800); // 800ms transition duration
            }, 1000); // 1 second delay before reversing
          }}
          spaceBetween={20}
          slidesPerView={1} // 👈 Default to 4 slides
          loop={false}
          breakpoints={{
            // 1200: { slidesPerView: 4 }, // 👈 Show 4 on large screens
            // 1024: { slidesPerView: 3 },
            // 768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >



          {data?.map((trip, index) => (

            <SwiperSlide key={index} className="trip-card">

              <Link to={`${link}/${trip.id}`}>
                <div>
                  <div className="trip-image-wrapper">
                    <img src={trip.img} alt={trip.Name}
                      className="trip-image" />
                    <div className="vignette-overlay" />
                  </div>

                  <div className="trip-details">
                    <h3>{trip.Name}</h3>
                    <TripRoute locations={trip.Route} destination={trip.id} />

                    <div className="trip-def">
                      <div className="trip-item">
                        <BiTimeFive size={25} color="skyblue" /><span> {trip.nights}    </span>
                      </div>
                      <div className="trip-item">
                        <GoLocation size={25} color="skyblue" /><span className="trip-item-location"> {trip.location}  </span>
                      </div>
                    </div>
                    {/* <p style={{color:"yellow"}}> {trip.Route}</p> */}
                    <div className="custom-div">
                      <div className="price">
                          <FaRupeeSign className="price-icon" />                         
                        <span className="old-price">{trip.oldprice}</span>
                        <span className="new-price"> {trip.newprice} </span>
                      </div>
                      <div className="custom-head">
                        <MdGroups
                          size={24} color='skyblue' />
                        <span className="custom">
                          Custom / Group
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

          ))}
        </Swiper>

        <button className="nav-button right" onClick={() => swiperRef.current?.slideNext()}>
          ❯
        </button>
      </div>
    </>

  );
};

