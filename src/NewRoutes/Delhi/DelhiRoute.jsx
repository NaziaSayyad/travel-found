import { useState } from "react";
import "./DelhiRoute.css";

const routes = {
  Delhi: ["Delhi-Manali", "Delhi - Jammu - Srinagar","Delhi - Manali - Sarchu","Relax Day in Delhi"],
  Manali: ["Manali - Sarchu", "Manali- Delhi","Departure","Kasol"],
  Sarchu: ["Pangong"],
  Pangong: ["Leh"],
  Leh: ["Departure"],
};

export default function DelhiRoute() {
  const [day, setDay] = useState(1);
  const [arrival, setArrival] = useState("Delhi");
  const [destination, setDestination] = useState("");
  const [output, setOutput] = useState([]);
  const [duration, setDuration] = useState(null);

  const showOutput = () => {
    if (!destination) return;

    setOutput([
      ...output,
      `Day ${day} : ${arrival} - ${destination}`,
    ]);
  };

  const addDay = () => {
    if (!destination) return;

    // If destination is Departure → STOP & calculate duration
    if (destination === "Departure") {
      const nights = output.length;
      const days = nights + 1;
      setDuration({ days, nights });
      return;
    }

    setDay(day + 1);
    setArrival(destination);
    setDestination("");
  };
  const DownloadItenray = () =>{
    console.log("Itenary Downloaded");
    
  }
  return (
    <div className="itinerary-box">
      <h2>Build Your Itinerary</h2>

        <div className="output-box">
        {output.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        {duration && (
          <p className="duration">
            <strong>Duration:</strong> {duration.days} Days /{" "}
            {duration.nights} Nights
          </p>
        )}
      </div>

      <div className="day-box">
        <h3>Day {day}</h3>

        <select disabled>
          <option>{arrival}</option>
        </select>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onClick={showOutput}
        >
          <option value="">Select Destination</option>
          {routes[arrival]?.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <div className="btn-row">
          <button onClick={addDay}>+ Add Day</button>
          <button onClick={DownloadItenray}>Download My Itenary </button>
          
        </div>
      </div>

      
    </div>
  );
}
