import { useState } from "react";
import jsPDF from "jspdf";
import "./DelhiRoute.css";
import DownloadItineraryModal from "../DownloadItenary/DownloadItenary";

export default function DelhiRoute() {

  const startPoints = ["Delhi", "Manali", "Srinagar", "Leh"];
  const endPoints = ["Delhi", "Manali", "Srinagar", "Leh"];

  const allRoutes = [

    // ================= DELHI =================
    { from: "Delhi", to: "Stay", type: "activity" },
    { from: "Delhi", to: "Arrival", type: "arrival" },
    { from: "Delhi", to: "Departure", type: "departure" },
    { from: "Delhi", to: "Manali", type: "travel" },
    { from: "Delhi", to: "Jammu - Srinagar", type: "travel" },
    { from: "Delhi", to: "Manali - Sarchu", type: "travel" },
    { from: "Delhi", to: "Leisure / Relax Day", type: "leisure" },

    // ================= MANALI =================
    { from: "Manali", to: "Stay", type: "activity" },
    { from: "Manali", to: "Arrival", type: "arrival" },
    { from: "Manali", to: "Departure", type: "departure" },
    { from: "Manali", to: "Sarchu", type: "travel" },
    { from: "Manali", to: "Delhi", type: "travel" },
    { from: "Manali", to: "Sightseeing", type: "activity" },
    { from: "Manali", to: "Leisure / Relax Day", type: "leisure" },

    // ================= SARCHU =================
    { from: "Sarchu", to: "Stay", type: "activity" },
    { from: "Sarchu", to: "Tso Moriri", type: "travel" },
    { from: "Sarchu", to: "Manali", type: "travel" },
    { from: "Sarchu", to: "Leh", type: "travel" },
    { from: "Sarchu", to: "Hanle", type: "travel" },
    { from: "Sarchu", to: "Manali - Delhi", type: "travel" },
    { from: "Sarchu", to: "Leisure / Relax Day", type: "leisure" },

    // ================= HANLE =================
    { from: "Hanle", to: "Umlung La - Hanle", type: "travel" },
    { from: "Hanle", to: "Tso Moriri", type: "travel" },
    { from: "Hanle", to: "Tso Pangong", type: "travel" },
    { from: "Hanle", to: "Leh", type: "travel" },
    { from: "Hanle", to: "Leisure / Relax Day", type: "leisure" },

    // ================= LEH =================
    { from: "Leh", to: "Arrival", type: "arrival" },
    { from: "Leh", to: "Departure", type: "departure" },
    { from: "Leh", to: "Sightseeing", type: "activity" },
    { from: "Leh", to: "Khardungla - Nubra", type: "travel" },
    { from: "Leh", to: "Khardungla - Nubra - Turtuk", type: "travel" },
    { from: "Leh", to: "Chang La - Pangong Tso", type: "travel" },
    { from: "Leh", to: "Hanle", type: "travel" },
    { from: "Leh", to: "Tso Moriri", type: "travel" },
    { from: "Leh", to: "Sarchu", type: "travel" },
    { from: "Leh", to: "Kargil", type: "travel" },
    { from: "Leh", to: "Leisure / Relax Day", type: "leisure" },

    // ================= NUBRA =================
    { from: "Nubra", to: "Turtuk - Nubra", type: "travel" },
    { from: "Nubra", to: "Tso Pangong", type: "travel" },
    { from: "Nubra", to: "Khardung La - Leh", type: "travel" },
    { from: "Nubra", to: "Sightseeing", type: "activity" },
    { from: "Nubra", to: "Leisure / Relax Day", type: "leisure" },

    // ================= TURTUK =================
    { from: "Turtuk", to: "Sightseeing", type: "activity" },
    { from: "Turtuk", to: "Nubra", type: "travel" },
    { from: "Turtuk", to: "Leh", type: "travel" },
    { from: "Turtuk", to: "Leisure / Relax Day", type: "leisure" },

    // ================= TSO PANGONG =================
    { from: "Tso Pangong", to: "Hanle", type: "travel" },
    { from: "Tso Pangong", to: "Tso Moriri", type: "travel" },
    { from: "Tso Pangong", to: "Chang La - Leh", type: "travel" },
    { from: "Tso Pangong", to: "Nubra", type: "travel" },
    { from: "Tso Pangong", to: "Leisure / Relax Day", type: "leisure" },

    // ================= TSO MORIRI =================
    { from: "Tso Moriri", to: "Sarchu", type: "travel" },
    { from: "Tso Moriri", to: "Hanle", type: "travel" },
    { from: "Tso Moriri", to: "Tso Pangong", type: "travel" },
    { from: "Tso Moriri", to: "Leh", type: "travel" },
    { from: "Tso Moriri", to: "Leisure / Relax Day", type: "leisure" },

    // ================= KARGIL =================
    { from: "Kargil", to: "Leh", type: "travel" },
    { from: "Kargil", to: "Srinagar", type: "travel" },
    { from: "Kargil", to: "Leisure / Relax Day", type: "leisure" },

    // ================= SRINAGAR =================
    { from: "Srinagar", to: "Arrival", type: "arrival" },
    { from: "Srinagar", to: "Departure", type: "departure" },
    { from: "Srinagar", to: "Sightseeing", type: "activity" },
    { from: "Srinagar", to: "Kargil", type: "travel" },
    { from: "Srinagar", to: "Katra - Delhi", type: "travel" },
    { from: "Srinagar", to: "Leisure / Relax Day", type: "leisure" }

  ];



  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [dayStarted, setDayStarted] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [day, setDay] = useState(1);
  const [output, setOutput] = useState([]);
  const [itineraryClosed, setItineraryClosed] = useState(false);
  const [duration, setDuration] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
const [selectedRoutes, setSelectedRoutes] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const availableRoutes = allRoutes.filter(
    (route) => route.from === currentLocation
  );

  const handleStartDay = () => {
    setDayStarted(true);
    setCurrentLocation(startPoint);
  };
  const getFinalDestination = (routeTo) => {
    if (routeTo.includes(" - ")) {
      const parts = routeTo.split(" - ");
      return parts[parts.length - 1].trim();
    }
    return routeTo;
  };

  const handleAddDay = () => {
    if (!selectedRoute || itineraryClosed) return;

    const selectedObj = allRoutes.find(
      r => r.from === currentLocation && r.to === selectedRoute
    );

    const routeType = selectedObj?.type || "travel";

    const dayData = {
      day: day,
      from: currentLocation,
      to: selectedRoute,
      type: routeType
    };

    const updated = [...output, dayData];
    setOutput(updated);

    if (routeType === "travel") {
      const finalCity = getFinalDestination(selectedRoute);
      setCurrentLocation(finalCity);
    }


    if (routeType === "departure") {
      const totalDays = updated.length;
      setDuration({
        days: totalDays,
        nights: totalDays - 1
      });
      setItineraryClosed(true);
      return;
    }

    setDay(prev => prev + 1);
    setSelectedRoute("");
  };

  const handleRecalculate = (index, newRoute) => {

    // 🔥 If editing is not last day, show confirmation
    if (index < output.length - 1) {
      const confirmEdit = window.confirm(
        "Changes to this day will impact the remaining itineary schedule. Do you want to continue?"
      );

      if (!confirmEdit) {
        return; // stop here if user clicks Cancel
      }
    }

    let updated = [...output];
    const editedDay = updated[index];

    const selectedObj = allRoutes.find(
      r => r.from === editedDay.from && r.to === newRoute
    );

    const routeType = selectedObj?.type || "travel";

    // Update selected day
    editedDay.to = newRoute;
    editedDay.type = routeType;

    // 🔥 Delete upcoming days
    updated = updated.slice(0, index + 1);

    // Renumber days
    updated = updated.map((item, i) => ({
      ...item,
      day: i + 1
    }));

    setOutput(updated);

    // Reset closing & duration
    setDuration(null);
    setItineraryClosed(false);

    // Set correct current location
    const lastDay = updated[updated.length - 1];

    if (lastDay.type === "travel") {
      const finalCity = getFinalDestination(lastDay.to);
      setCurrentLocation(finalCity);
    }
    else {
      setCurrentLocation(lastDay.from);
    }

    // Set next day number
    setDay(updated.length + 1);

    setEditIndex(null);
  };

  // Modify button 
  const handleModify = () => {

    // Re-open itinerary
    setItineraryClosed(false);

    // Remove duration box
    setDuration(null);

    // If last day was departure, remove it
    const updated = [...output];

    const lastDay = updated[updated.length - 1];

    if (lastDay.type === "departure") {
      updated.pop();
    }

    setOutput(updated);

    // Set correct location
    const newLastDay = updated[updated.length - 1];

    if (newLastDay.type === "travel") {
      const finalCity = getFinalDestination(newLastDay.to);
      setCurrentLocation(finalCity);
    }
    else {
      setCurrentLocation(newLastDay.from);
    }

    // Reset next day counter
    setDay(updated.length + 1);
  };

const generateRouteKey = (from, to) => {
  const clean = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/\//g, "")
      .replace(/,/g, "")
      .replace(/-+/g, "-");

  return `${clean(from)}-${clean(to)}`;
};

  //   Download PDF 
const downloadPDF = async () => {
  try {

    if (!output || output.length === 0) {
      alert("Please create itinerary first");
      return;
    }

    // 🔥 Generate routes dynamically from output
    const routes = output.map(item =>
      generateRouteKey(item.from, item.to)
    );

    console.log("Sending routes:", routes);

    const response = await fetch(
      "http://localhost:8080/api/merge-itinerary",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          routes: routes,
          customerName: "Client Name",
          title: "Custom Travel Itinerary"
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate merged PDF");
    }

    const blob = await response.blob();

    const fileURL = window.URL.createObjectURL(
      new Blob([blob], { type: "application/pdf" })
    );

    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "Itinerary.pdf";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(fileURL);

  } catch (error) {
    console.error("Download error:", error);
    alert("Something went wrong while generating itinerary");
  }
};



  return (
    <div className="itinerary-box">
      <h2>Create Your Own Itinerary</h2>
      <div className="selctorspoint">
        <p>Start Point:</p>
        <select
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
          disabled={dayStarted}
        >
          <option value="">Select Start</option>
          {startPoints.map((city, i) => (
            <option key={i} value={city}>{city}</option>
          ))}
        </select>

        <p>End Point:</p>
        <select
          value={endPoint}
          onChange={(e) => setEndPoint(e.target.value)}
          disabled={dayStarted}
        >
          <option value="">Select End</option>
          {endPoints.map((city, i) => (
            <option key={i} value={city}>{city}
              {console.log(city, "city", i, "1")}
            </option>


          ))}
        </select>
      </div>


      {startPoint && endPoint && !dayStarted && (
        <button onClick={handleStartDay}>
          + Add Day 1
        </button>
      )}

      <div className="output-box">
        {output.map((item, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            {editIndex === index ? (
              <select
                value={item.to}
                onChange={(e) =>
                  handleRecalculate(index, e.target.value)
                }
              >
                {allRoutes
                  .filter(r => r.from === item.from)
                  .map((route, i) => (
                    <option key={i} value={route.to}>
                      {console.log(route, "route")}

                      {route.type === "travel"
                        ? `${route.from} - ${route.to}`
                        : route.to}
                    </option>
                  ))}

              </select>
            ) : (
              <>
                Day {item.day}: {item.from} - {item.to}
                {!itineraryClosed && (
                  <button onClick={() => setEditIndex(index)}> ✏ </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {itineraryClosed && duration && (
        <>
          <p>
            <strong>Total Duration:</strong> {duration.days} Days / {duration.nights} Nights
          </p>

          <div style={{
            display: 'flex'
          }}>
            <button onClick={() => setOpenModal(true)}>
              Download My Itenary
            </button>
            <DownloadItineraryModal
              open={openModal}
              setOpen={setOpenModal}
              onVerified={downloadPDF}
            />
            <button
              onClick={handleModify}
              style={{ marginLeft: "15px" }}
            >
              Modify My Itineary
            </button>
          </div>
        </>
      )}

      {dayStarted && !itineraryClosed && (
        <div>
          <h3>Day {day} (Starting from {currentLocation})</h3>

          <select
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
          >
            <option value="">Select Route</option>
            {availableRoutes.map((route, i) => (
              <option key={i} value={route.to}>
                {route.type === "travel"
                  ? `${route.from} - ${route.to}`
                  : route.to}
              </option>
            ))}

          </select>

          <button onClick={handleAddDay}>
            + Add Day {day}
          </button>
        </div>
      )}
    </div>
  );
}
