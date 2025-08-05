// import React, { useState, useRef } from 'react';
// import './DestinationSlideshow.css';
// const packages = [
//   {
//     name: "Leh Ladakh",
//     price: "Rs. 21,999/-",
//     img: "https://wanderon-images.gumlet.io//ladakh_card.jpeg?updatedAt=1690541894161",
//     link: "/india-trips/leh-ladakh-tour-packages",
//   },
//   {
//     name: "Spiti",
//     price: "Rs. 17,999/-",
//     img: "https://wanderon-images.gumlet.io//spiti_card.jpeg?updatedAt=1690541894161",
//     link: "/india-trips/spiti-valley-tour-packages",
//   },
//   {
//     name: "Meghalaya",
//     price: "Rs. 21,499/-",
//     img: "https://wanderon-images.gumlet.io//meghalya_card.jpeg?updatedAt=1690541894161",
//     link: "/india-trips/meghalaya-tour-packages",
//   },
//   {
//     name: "Kerala",
//     price: "Rs. 12,999/-",
//     img: "https://wanderon-images.gumlet.io//kerala_card.jpeg?updatedAt=1690541894161",
//     link: "/india-trips/kerala-tour-packages",
//   },
// ];



// export const DestinationSlideshow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const touchStartX = useRef(null);
//   const touchEndX = useRef(null);

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (!touchStartX.current || !touchEndX.current) return;
//     const diff = touchStartX.current - touchEndX.current;

//     if (diff > 50) {
//       // swipe left
//       setCurrentIndex((prev) => (prev + 1) % destinations.length);
//     } else if (diff < -50) {
//       // swipe right
//       setCurrentIndex((prev) =>
//         prev === 0 ? destinations.length - 1 : prev - 1
//       );
//     }

//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   return (
//     <div className="slider-container">
//       <div
//         className="card-slider"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {destinations.map((item, index) => {
//           const offset = index - currentIndex;
//           const scale = offset === 0 ? 1 : 0.9;
//           const translateX = offset * 70;
//           const rotate = offset === 0 ? '0deg' : offset < 0 ? '-6deg' : '6deg';

//           return (
//             <div
//               key={index}
//               className="card"
//               style={{
//                 transform: `translateX(${translateX}%) scale(${scale}) rotate(${rotate})`,
//                 zIndex: destinations.length - Math.abs(offset),
//                 opacity: Math.abs(offset) > 2 ? 0 : 1,
//               }}
//             >
//               <img src={item.img} alt={item.name} />
//               <div className="card-details">
//                 <h3>{item.name}</h3>
//                 <p>Starting Price {item.price}/-</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./DestinationSlideshow.css";


const packages = [
  {
    name: "Ladakh",
    img: "https://i.ibb.co/DP3SPFkv/pexels-harsh-kukadiya-244412142-31756521.jpg",
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

