import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit, email, setEmail, phone, setPhone }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className='img-heading-breakpoints'>
        <img src="https://i.postimg.cc/s29nSzXK/mountain-5769089.jpg" alt="" />
        <h2>Ladakh Itenary</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Ph No. :</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Download Itinerary</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
