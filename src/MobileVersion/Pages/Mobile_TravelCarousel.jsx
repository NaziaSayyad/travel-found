import React from "react";
import "./Mobile_TravelCarousel.css";
import { Link } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { MdGroups } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { TripRoute } from "../../Pages/UI/Route";

export const Mobile_TravelCarousel = ({ data, link }) => {
  return (
    <div className="travel-carousel-scroll">
      {data?.map((trip, index) => (
        <div className="mobile-trip-card" key={index}>
          <Link to={`${link}/${trip.id}`}>
            <div className="mobile-trip-image-wrapper">
              <img
                src={trip.img}
                alt={trip.Name}
                className="mobile-trip-image"
              />
              <div className="mobile-vignette-overlay" />
            </div>

            <div className="mobile-trip-details">
              <h3>{trip.Name}</h3>
              <TripRoute locations={trip.Route} destination={trip.id} />

              <div className="mobile-trip-def">
                <div className="mobile-trip-item">
                  <BiTimeFive size={20} color="skyblue" />
                  <span>{trip.nights}</span>
                </div>
                <div className="mobile-trip-item">
                  <GoLocation size={20} color="skyblue" />
                  <span className="mobile-trip-item-location">{trip.location}</span>
                </div>
              </div>

              <div className="custom-div">
                <div className="mobile-price">
                  <FaRupeeSign className="price-icon" />
                  <span className="old-price">{trip.oldprice}</span>
                  <span className="new-price">{trip.newprice}</span>
                </div>
                <div className="custom-head">
                  <MdGroups size={20} color="skyblue" />
                  <span className="custom">Custom / Group</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
