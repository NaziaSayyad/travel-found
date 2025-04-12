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

export const TravelCarousel = ({ data }) => {
  console.log('length', data);

  const swiperRef = useRef(null);

  return (
    <>
      {/* <Link to={'/book-now'}>  Next </Link> */}

      <div className="travel-carousel">
        <button className="nav-button left" onClick={() => swiperRef.current?.slidePrev()}>
          ❮
        </button>
      
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={3}
          loop={data?.length > 3} // Only loop if there's enough data
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

                <div style={{ display : 'flex', 
                // gap : '100px'
                justifyContent : 'space-between',
                
                  }}>
                  <h3>{trip.Name}</h3>
                 <div
                    style={{
                      border : '2px solid',
                      borderRadius : '50px',
                      textAlign : 'center',
                      width : '80px',
                      marginRight : '9px',
                      backgroundColor : "skyblue"
                    }}
                 >  <p style={{
                    // marginLeft: '100px',
                    fontWeight: "bold",
                    fontSize: '15px',
                    color: "black",
                    // border : '2px solid',
                    // borderRadius : '50px'
                  }}> {trip.customize}</p></div>
                </div>
                <div className="trip-def">
                  <div className="trip-item">
                    <BiTimeFive size={25} color="skyblue" /><span> {trip.nights}    </span>
                  </div>
                  <div className="trip-item">
                    <GoLocation size={25} color="skyblue" /><span> {trip.location}  </span>
                  </div>
                </div>
                {/* <p style={{color:"yellow"}}> {trip.Route}</p> */}
                <TripRoute locations={trip.Route} destination={trip.id} />
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
    </>

  );
};

