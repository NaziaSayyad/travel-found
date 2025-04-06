import React, { useState, useEffect } from 'react';
import './ItneariesSlideshow.css';
import { FaDownload } from 'react-icons/fa';
import Modal from './Modal';

const images = [
  'https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg',
  'https://i.postimg.cc/yNGFDY4w/118.jpg',
  'https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg',
  'https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg',
];
const pdfUrl = 'https://www.example.com/sample.pdf';

export default function ItenarySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.open(pdfUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt="slideshow"
        className={`slideshow-image ${fade ? 'fade-in' : 'fade-out'}`}
      />
      <button className="download-btn" onClick={handleDownloadClick}>
        <FaDownload className="icon" /> Download Itinerary
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      />
    </div>
  );
}
