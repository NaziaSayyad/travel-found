import React, { useState, useRef } from 'react';
import './DestinationSlideshow.css';

const destinations = [
  { name: "Leh Ladakh", img: "https://i.ibb.co/3FWqzqx/ladakh-bike.jpg", price: "₹21,999" },
  { name: "Europe", img: "https://i.ibb.co/YWcBPvv/europe.jpg", price: "₹1,49,999" },
  { name: "Kashmir", img: "https://i.ibb.co/7tD7Qv93/mountains-2689450.jpg", price: "₹39,999" },
  { name: "Himachal", img: "https://i.ibb.co/0pGcZKr/ladakh-7127801.jpg", price: "₹42,999" }
];

export const DestinationSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      // swipe left
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    } else if (diff < -50) {
      // swipe right
      setCurrentIndex((prev) =>
        prev === 0 ? destinations.length - 1 : prev - 1
      );
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="slider-container">
      <div
        className="card-slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {destinations.map((item, index) => {
          const offset = index - currentIndex;
          const scale = offset === 0 ? 1 : 0.9;
          const translateX = offset * 70;
          const rotate = offset === 0 ? '0deg' : offset < 0 ? '-6deg' : '6deg';

          return (
            <div
              key={index}
              className="card"
              style={{
                transform: `translateX(${translateX}%) scale(${scale}) rotate(${rotate})`,
                zIndex: destinations.length - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
            >
              <img src={item.img} alt={item.name} />
              <div className="card-details">
                <h3>{item.name}</h3>
                <p>Starting Price {item.price}/-</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
