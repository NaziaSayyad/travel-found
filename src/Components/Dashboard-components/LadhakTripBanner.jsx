import React, { useRef } from "react"; import "./LadhakTripBanner.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; import "swiper/css/navigation";
const heading = "Ladakh Trips";
const para = "Discover the world, one destination at a time";
const link = "/ladakh";

const LadhakTripBanner = ({ Banner, images, heading, link }) => {
    
      const swiperRef = useRef(null);
  return (

    <div className="international-trips">

      <div 
      className="trip-banner" 
       style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      width : '100%',
      // height : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 8px rgba(0,0, 0, 0.7)',
        borderRadius: '10px'
      }}
      >
        <div className="trip-content">
          <h1> {heading} </h1>
          <p> {para} </p>
          <Link to={link}
            className="explore-btn"> Explore </Link>
        </div>
      </div>
       <div style={{position:'relative'}}>
        <button 
       className="banner-nav-button-left"
       style={{
        border : '5px solid brown',
        position : 'absolute',
        left : '-15px',
        marginTop : '6.5%',
        backgroundColor : ' #21759b',
        color : 'white',
        border :'none',
        padding :'10px 14px',
        cursor : 'pointer',
        zIndex : '10',
        borderRadius : '50%'
       }}
          // onClick={() => console.log('enter')}
          
          onClick={() => swiperRef.current?.slidePrev()}
          >
          ❮
        </button>
        {/* className="trip-swiper" */}
        
     <Swiper
               modules={[Navigation]}
               className="trip-swiper"
               onSwiper={(swiper) => (swiperRef.current = swiper)}
               onReachEnd={(swiper) => {
                 setTimeout(() => {
                   swiper.slideTo(0, 800); // 800ms transition duration
                 }, 1000); // 1 second delay before reversing
               }}
               spaceBetween={20}
               slidesPerView={4} // 👈 Default to 4 slides
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
              <Link to={link}
                className="ladakh-trip-card">
                <img src={i.img} alt={i.place}
                  className="trip-img" />
                <div className="trip-info">
                  <h3>{i.place}</h3>
                  <p>{i.price}</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
       onClick={() =>  
       swiperRef.current?.slideNext()
       }
        style={{
        position : 'absolute',
       top: '50%',
     right: '-20px',
        transform: 'translateY(-50%)',
        // marginTop : '3%',
        backgroundColor : ' #21759b',
        color : 'white',
        border :'none',
        padding :'10px 14px',
        cursor : 'pointer',
        zIndex : '10',
        borderRadius : '50%'
       }}>
          ❯
        </button>
       </div>
    </div>
  );
};
export default LadhakTripBanner