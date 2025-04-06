import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swipper.css"; // Import CSS file
import { Link } from "react-router-dom";
import { TripRoute } from "./Route";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

export const TravelCarousel = ({data}) => {

    const swiperRef = useRef(null);

    return (
      <div className="travel-carousel">
        <button className="nav-button left" onClick={() => swiperRef.current?.slidePrev()}>
          ❮
        </button>
  
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={3}
          loop ={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {data?.map((trip, index) => (
            <SwiperSlide key={index} className="trip-card">
             <Link to={`/ladakh/${trip.id}`}>
             <img src={trip.img} alt={trip.Name} className="trip-image" />
            </Link>
            <div className="trip-details">
            <h3>{trip.Name}</h3>
                  <div className="trip-def">
                      <BiTimeFive size={25} color="skyblue" /><span> {trip.nights}    </span>     
                     <div style={{marginLeft : '35%'}} > 
                     <GoLocation size={25}  color="skyblue" /><span> {trip.location}  </span>
                     </div>    
                  </div>
            {/* <p style={{color:"yellow"}}> {trip.Route}</p> */}
            <TripRoute locations={trip.Route} destination = {trip.id}/>
            <p className="price">
                  <span className="old-price">{trip.oldprice}</span> {trip.newprice}
            </p> 
              </div>
        </SwiperSlide>
          ))}
        </Swiper>
  
        <button className="nav-button right" onClick={() => swiperRef.current?.slideNext()}>
          ❯
        </button>
      </div>
    );
};

