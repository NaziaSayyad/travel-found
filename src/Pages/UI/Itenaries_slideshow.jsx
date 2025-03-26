import { useState, useEffect } from "react";
import "./ItneariesSlideshow.css";
import { FaDownload } from "react-icons/fa"; // Import download icon

const images = [
  "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg",
  "https://i.postimg.cc/yNGFDY4w/118.jpg",
  "https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg",
  "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg",
];
const pdfUrl = "https://www.example.com/sample.pdf"; // Replace with your actual PDF link

export default function ItenarySlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 
  // Function to open the PDF in a new tab
  const openPDF = () => {
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  };

  
    return (
     <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt="slideshow"
        className={`slideshow-image ${fade ? "fade-in" : "fade-out"}`}
      />
      <button className="download-btn" onClick={openPDF}>
        <FaDownload className="icon" /> Download Itinerary
      </button>
    </div>
    );
}
