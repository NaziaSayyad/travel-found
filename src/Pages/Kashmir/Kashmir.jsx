import { useEffect, useState } from "react";
import "./Kasmir.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { TripRoute } from "../UI/Route";
import { FaRupeeSign } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const API = "https://travelfond-backend.onrender.com/spiti";

 const cities = [
    "Srinagar",
    "Gulmarg",
    "Sonmarg",
    "Pahalgam",
    "Yusmarg",
    "Dhudhpathri"

  ];
export const Kashmir_Page = () => {
  const location = useLocation();
  const [data, setdata] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCheckboxChange = (city) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter((item) => item !== city));
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(API);
        setdata(res.data);
        console.log(res.data, "kashmir-page");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div style={{ marginTop: "12%" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Kashmir Itineraries
      </h1>
     {/* Filteration start */}
      <div style={{ display: "flex",
        marginLeft : '35%',
        gap: "15px", flexWrap: "wrap" }}>
      {cities.map((city, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={city}
            checked={selectedCities.includes(city)}
            onChange={() => handleCheckboxChange(city)}
          />
          {city}
        </label>
      ))}

      <div style={{ marginTop: "20px", width: "100%" }}>
        {/* <strong>Selected Cities: </strong> */}
        {/* {selectedCities.length > 0 ? selectedCities.join(", ") : "None"} */}
      </div>
    </div>
    {/* Filteration End  */}
      <div className="kashmir-container">
        {data?.map((trip, index) => (
          <Link key={index} to={`/trip/${trip.id}`} 
          className="kashmir-card">
            <div className="kashmir-image-wrapper">
  <img
    src={trip.img}
    alt={trip.Name}
    className="kashmir-image"
  />
  <div className="kashmir-vignette-overlay" />

  {/* ✅ Move inside */}
  <div className="kashmir-trip-details">
    <h3>{trip.Name}</h3>
    <TripRoute locations={trip.Route} destination={trip.id} />

    <div className="kashmir-trip-def">
      <div className="kashmir-trip-item">
        <BiTimeFive size={22} color="skyblue" />
        <span>{trip.nights}</span>
      </div>
      <div className="kashmir-trip-item">
        <GoLocation size={22} color="skyblue" />
        <span className="trip-item-location">{trip.location}</span>
      </div>
    </div>

    <div className="kashmir-custom-div">
      <div className="kashmir-price">
        <FaRupeeSign className="kashmir-price-icon" />
        <span className="kashmir-old-price">{trip.oldprice}</span>
        <span className="kashmir-new-price">{trip.newprice}</span>
      </div>
      <div className= "kashmir-custom-head">
        <MdGroups size={22} color="skyblue" />
        <span className="kashmir-custom">Custom / Group</span>
      </div>
    </div>
  </div>
</div>

          </Link>
        ))}
      </div>
    </div>
  );
};
