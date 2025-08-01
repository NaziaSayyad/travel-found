import React, { useState } from 'react';
import './RequestCallback.css';
import { FaPhoneAlt } from 'react-icons/fa';

const RequestCallback = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here (API call, alert, etc.)
    alert('Callback request submitted!');
    setShowModal(false);
  };

  return (
    <>
      <button className="callback-btn" onClick={() => setShowModal(true)}>
        <FaPhoneAlt style={{marginBottom : '12px'}} />
      </button>

      {showModal && (
        <div className="modal-overlay-rq">
          <div className="modal-rq">
            <h2><span className="blue-bar-rq"></span> Request a Callback</h2>
            <form onSubmit={handleSubmit} className='form-rq'>
              <label>Name:</label>
              <input type="text" required placeholder="Your Name" />
              
              <label>Email:</label>
              <input type="email" required placeholder="Your Email" />
              
              <label>Phone No.:</label>
              <input type="tel" required placeholder="Your Phone Number" />

              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestCallback;
