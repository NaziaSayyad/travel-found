import { useState } from "react";
// import "./DelhiRoute.css";
import jsPDF from "jspdf";
import DownloadItineraryModal from "../DownloadItenary/DownloadItenary";



const allRoutes = [

  // ================= DELHI =================
  { from: "Delhi", to: "Stay", type: "activity" },
  { from: "Delhi", to: "Arrival", type: "arrival" },
  { from: "Delhi", to: "Departure", type: "departure" },
  { from: "Delhi", to: "Manali" },
  { from: "Delhi", to: "Jammu - Srinagar" },
  { from: "Delhi", to: "Manali - Sarchu" },
  { from: "Delhi", to: "Leisure / Relax Day", type: "leisure" },

  // ================= MANALI =================
  { from: "Manali", to: "Stay", type: "activity" },
  { from: "Manali", to: "Arrival", type: "arrival" },
  { from: "Manali", to: "Departure", type: "departure" },
  { from: "Manali", to: "Sarchu" },
  { from: "Manali", to: "Delhi" },
  { from: "Manali", to: "Sightseeing", type: "activity" },
  { from: "Manali", to: "Leisure / Relax Day", type: "leisure" },

  // ================= SARCHU =================
  { from: "Sarchu", to: "Stay", type: "activity" },
  { from: "Sarchu", to: "Tso Moriri" },
  { from: "Sarchu", to: "Manali" },
  { from: "Sarchu", to: "Leh" },
  { from: "Sarchu", to: "Hanle" },
  { from: "Sarchu", to: "Manali - Delhi" },
  { from: "Sarchu", to: "Leisure / Relax Day", type: "leisure" },

  // ================= HANLE =================
  { from: "Hanle", to: "Umlung La - Hanle" },
  { from: "Hanle", to: "Tso Moriri" },
  { from: "Hanle", to: "Tso Pangong" },
  { from: "Hanle", to: "Leh" },
  { from: "Hanle", to: "Leisure / Relax Day", type: "leisure" },

  // ================= LEH =================
  { from: "Leh", to: "Arrival", type: "arrival" },
  { from: "Leh", to: "Departure", type: "departure" },
  { from: "Leh", to: "Sightseeing", type: "activity" },
  { from: "Leh", to: "Khardungla - Nubra" },
  { from: "Leh", to: "Khardungla - Nubra - Turtuk" },
  { from: "Leh", to: "Chang La - Pangong Tso" },
  { from: "Leh", to: "Hanle" },
  { from: "Leh", to: "Tso Moriri" },
  { from: "Leh", to: "Sarchu" },
  { from: "Leh", to: "Kargil" },
  { from: "Leh", to: "Leisure / Relax Day", type: "leisure" },

  // ================= NUBRA =================
  { from: "Nubra", to: "Turtuk - Nubra" },
  { from: "Nubra", to: "Tso Pangong" },
  { from: "Nubra", to: "Khardung La - Leh" },
  { from: "Nubra", to: "Sightseeing", type: "activity" },
  { from: "Nubra", to: "Leisure / Relax Day", type: "leisure" },

  // ================= TURTUK =================
  { from: "Turtuk", to: "Sightseeing", type: "activity" },
  { from: "Turtuk", to: "Nubra" },
  { from: "Turtuk", to: "Leh" },
  { from: "Turtuk", to: "Leisure / Relax Day", type: "leisure" },

  // ================= TSO PANGONG =================
  { from: "Tso Pangong", to: "Hanle" },
  { from: "Tso Pangong", to: "Tso Moriri" },
  { from: "Tso Pangong", to: "Chang La - Leh" },
  { from: "Tso Pangong", to: "Nubra" },
  { from: "Tso Pangong", to: "Leisure / Relax Day", type: "leisure" },

  // ================= TSO MORIRI =================
  { from: "Tso Moriri", to: "Sarchu" },
  { from: "Tso Moriri", to: "Hanle" },
  { from: "Tso Moriri", to: "Tso Pangong" },
  { from: "Tso Moriri", to: "Leh" },
  { from: "Tso Moriri", to: "Leisure / Relax Day", type: "leisure" },

  // ================= KARGIL =================
  { from: "Kargil", to: "Leh" },
  { from: "Kargil", to: "Srinagar" },
  { from: "Kargil", to: "Leisure / Relax Day", type: "leisure" },

  // ================= SRINAGAR =================
  { from: "Srinagar", to: "Arrival", type: "arrival" },
  { from: "Srinagar", to: "Departure", type: "departure" },
  { from: "Srinagar", to: "Sightseeing", type: "activity" },
  { from: "Srinagar", to: "Kargil" },
  { from: "Srinagar", to: "Katra - Delhi" },
  { from: "Srinagar", to: "Leisure / Relax Day", type: "leisure" }

];


export default function ManaliRoute() {
  const [day, setDay] = useState(1);
  const [arrival, setArrival] = useState("");
  const [destination, setDestination] = useState("");
  const [output, setOutput] = useState([]);
  const [arrivalLocked, setArrivalLocked] = useState(false);
  const [duration, setDuration] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  // ✅ Get all unique arrival cities
  const arrivalCities = [...new Set(allRoutes.map(r => r.from))];

  // ✅ Filter destinations based on selected arrival
  const destinations = allRoutes
    .filter(r => r.from === arrival)
    .map(r => r.to);

  // Download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Travel Itinerary Summary", 20, 20);

    doc.setFontSize(14);

    let y = 40;

    // Add each day
    output.forEach((day) => {
      doc.text(day, 20, y);
      y += 10;
    });

    // Add duration at bottom
    if (duration) {
      y += 10;
      doc.text(
        `Total Duration: ${duration.days} Days / ${duration.nights} Nights`,
        20,
        y
      );
    }

    doc.save("Itinerary_Summary.pdf");
  };

  // ✅ Show Output
  const handleShowOutput = () => {
    if (!arrival || !destination) return;

    setOutput(prev => [
      ...prev,
      `Day ${day} : ${arrival} - ${destination}`
    ]);
  };


  // ✅ Add Day
  const handleAddDay = () => {
    if (!destination) return;

    if (destination === "Departure") {
      const nights = output.length;
      const days = nights + 1;
      setDuration({ days, nights });
      return;
    }

    setDay(prev => prev + 1);
    setArrival(destination);
    setDestination("");
    setArrivalLocked(true);
  };

  return (
    <div className="itinerary-box">
      <h2>Create  Your Own  Itinerary</h2>

      <div className="selctorspoint"> 
        {/* Start point */} 
        <p> Start Point :</p>
        <select name="startpoint" id="startpoint"
         onChange={(e) => setArrival(e.target.value)}
        disabled={arrivalLocked}
        >
        <option value="">starting Point : </option>
        <option value="delhi">Delhi</option>
        <option value="manali"> Manali</option>
        <option value="srinagar">Srinagar </option>
        <option value="leh"> Leh </option>
      </select>
      {/* End Point */}
      <p> End Point : </p>
         <select name="Endpoint" id="Endpoint">
        <option value="">Ending Point : </option>
        <option value="delhi">Delhi</option>
        <option value="manali"> Manali</option>
        <option value="srinagar">Srinagar </option>
        <option value="leh"> Leh </option>
        </select>
        <p> Duration : </p>
        {
        duration && (
          <p className="duration">
            <strong>Total Duration:</strong> {duration.days} Days / {duration.nights} Nights
          </p>
        )}

      </div>
      {/* Output Section */}
      <div className="output-box">
        {output.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        {duration && (
          <p className="duration">
            <strong>Total Duration:</strong> {duration.days} Days / {duration.nights} Nights
          </p>
        )}
      </div>

      {/* <h3>Day {day}</h3> */}

      {/* Arrival Dropdown */}
      <select
        value={arrival}
        onChange={(e) => setArrival(e.target.value)}
        disabled={arrivalLocked}
      >
        <option value="">Day 1 </option>
        {arrivalCities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Destination Dropdown */}
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        disabled={!arrival}
        onClick={handleShowOutput}
      >
        <option value="">Select Route</option>
        {destinations.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <div className="btn-row">
        <button onClick={handleAddDay}>+ Add Day</button>

        <button onClick={() => setOpenModal(true)}>
          Download My Itenary
        </button>
      </div>

      <DownloadItineraryModal
        open={openModal}
        setOpen={setOpenModal}
        onVerified={downloadPDF}
      />
    </div>
  );
}

// ================= Download Itinerary Modal Code =================
// const downloadPDF = async () => {
//   try {
//     const response = await fetch(
//       "http://localhost:8080/api/download-itinerary",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: "Custom Travel Itinerary",
//           customerName: "Client Name",
//           days: output,
//           duration: duration,
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to generate PDF");
//     }

//     const blob = await response.blob();

//     // 🔥 IMPORTANT: explicitly set type
//     const pdfBlob = new Blob([blob], { type: "application/pdf" });

//     const fileURL = URL.createObjectURL(pdfBlob);

//     // 🔥 Force download properly
//     const link = document.createElement("a");
//     link.href = fileURL;
//     link.download = "Itinerary.pdf";
//     document.body.appendChild(link);
//     link.click();

//     document.body.removeChild(link);
//     URL.revokeObjectURL(fileURL);

//   } catch (error) {
//     console.error("Download error:", error);
//   }
// };
