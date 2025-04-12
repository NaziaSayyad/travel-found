import React from "react";
import { Link } from "react-router-dom";

export const TripRoute = ({ locations ,destination}) => {
  const maxVisible = 12; // Show only 4 locations initially
const getdata = () =>{

}
  return (
    <p style={{ color: "yellow" }}>
      {locations.slice(0, maxVisible).join(" • ")}
      {locations.length > maxVisible && (
        <Link to={`/ladakh/${destination}`} style={{ fontWeight: "bold", color: "#FFD700", textDecoration: "none" }}>
          {" "}
          {/* +{locations.length - maxVisible} More */}
        </Link>
      )}
    </p>
  );
};

// Example usage
const tripData = {
  locations: ["Srinagar", "Kargil", "Leh", "Khardung", "Manali", "Shimla", "Spiti", "Ladakh", "Zanskar"],
};

// e