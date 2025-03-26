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

const travelPackages = [
  {
    image: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg",
    title: "11 Days Manali Leh Tour",
    price: "₹37,999/-",
    oldPrice: "₹39,999/-",
    duration: "10N/11D",
    location: "Delhi/Chandigarh - Delhi",
    date: "31 May, 7 Jun",
  },

  {
    image: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg",
    title: "9 Days Leh to Srinagar",
    price: "₹33,999/-",
    oldPrice: "₹36,999/-",
    duration: "8N/9D",
    location: "Leh/Srinagar - Leh/Srinagar",
    date: "31 May, 14 Jun",
  },
  {
    image: "https://i.postimg.cc/yNGFDY4w/118.jpg",
    title: "8 Days Srinagar to Leh",
    price: "₹32,999/-",
    oldPrice: "₹37,999/-",
    duration: "7N/8D",
    location: "Srinagar - Leh",
    date: "24 May, 7 Jun",
  },
  {
    image: "https://i.postimg.cc/q7NKHVhQ/IMG-0200.jpg",
    title: "11 Days Manali Leh Tour",
    price: "₹37,999/-",
    oldPrice: "₹39,999/-",
    duration: "10N/11D",
    location: "Delhi/Chandigarh - Delhi",
    date: "31 May, 7 Jun",
  },
  {
    image: "https://i.postimg.cc/1X4MLNKY/mountain-7565305.jpg",
    title: "11 Days Manali Leh Tour",
    price: "₹37,999/-",
    oldPrice: "₹39,999/-",
    duration: "10N/11D",
    location: "Delhi/Chandigarh - Delhi",
    date: "31 May, 7 Jun",
  },
  {
    image: "https://i.postimg.cc/q7NKHVhQ/IMG-0200.jpg",
    title: "11 Days Manali Leh Tour",
    price: "₹37,999/-",
    oldPrice: "₹39,999/-",
    duration: "10N/11D",
    location: "Delhi/Chandigarh - Delhi",
    date: "31 May, 7 Jun",
  },
];

export const TravelCarousel = () => {

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
          {travelPackages.map((trip, index) => (
            <SwiperSlide key={index} className="trip-card">
             <Link to={'/shrinagar-to-manali'}>
             <img src={trip.image} alt={trip.title} className="trip-image" />
           
             </Link>
            <div className="trip-details">
                <h3>{trip.title}</h3>
                <p className="price">
                  <span className="old-price">{trip.oldPrice}</span> {trip.price}
                </p>
                <p>{trip.duration} | {trip.location}</p>
                <p>Dates:  {trip.date}</p>
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

