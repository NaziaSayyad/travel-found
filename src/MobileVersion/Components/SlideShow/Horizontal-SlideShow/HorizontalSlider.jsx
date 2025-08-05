import React from "react";
import "./HorizontalSlider.css";

const cards = [
    {
        img: "https://i.ibb.co/cXDPsY8j/1-4.jpg",
        title: "Group Trips"
    },
    {
        img: "https://i.ibb.co/4gjmf2Bz/Gemini-Generated-Image-qldi0jqldi0jqldi.jpg",
        title: "International Trips"
    },
    {
        img: "https://i.ibb.co/MkjvrGYs/1-20.jpg",
        title: "Explore India"
    },
    {
        img: "https://i.ibb.co/v6dx3Jgw/lake-489289.jpg",
        title: "Beach Holidays"
    },
    // Add more cards if needed
];

export const HorizontalSlider = () => {
    return (
        <div className="slider-wrapper">
            <div className="scroll-container">
                <div className="card highlight-card">This Summer Season</div>
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.img} alt={card.title} />
                        <p>{card.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

