import React, { useState } from 'react';
import './QueryForm.css';
import { Link } from 'react-router-dom';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dob: '',
    tripDate: '',
    people: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        dob: '',
        tripDate: '',
        people: 1,
      });
    }, 3000);
  };

  return (
    <div className="query-form-container" 
    onSubmit={handleSubmit} onKeyDown={(e) => e.key === 'Enter' && 
    handleSubmit(e)}>
      <h2>Customise Your Trip </h2>
      {/* <form onSubmit={handleSubmit}> */}
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" />
        </label>

        <label>
          Email ID:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            placeholder="Select Date"
            style={{ 
              color: 'darkblue', 
              fontSize: '14px', 
              fontFamily: 'initial', 
              cursor: 'pointer',
              '&::-webkit-datetime-edit-text': { color: 'transparent' },
              '&::-webkit-calendar-picker-indicator': { cursor: 'pointer' }
            }}
          />
        </label>

        {/* <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label> */}

        <label>
          Trip Date:
          <input
            type="date"
            name="tripDate"
            value={formData.tripDate}
            onChange={handleChange}
            required
            placeholder="Select Date"
            style={{ 
              color: 'darkblue', 
              fontSize: '14px', 
              fontFamily: 'initial', 
              cursor: 'pointer',
              '&::-webkit-datetime-edit-text': { color: 'transparent' },
              '&::-webkit-calendar-picker-indicator': { cursor: 'pointer' }
            }}
          />
        </label>

        <label>
          No. of Traveler:
          <input type="number" name="people" min="1" value={formData.people} onChange={handleChange} required />
        </label>

        <button className='query-btn' type="submit">Submit</button>
      {/* </form> */}

      {submitted && (
        <div className="success-message">
          <p>Thank you! Your query has been submitted successfully. ✅</p>
        </div>
      )}
       {/* <Link to='/book-now'> 

      <div style={{
        marginTop : '15px'
      }}>
      <button className="costing-btn" >
             Booking Details
      </button>
      </div>
       </Link> */}
    </div>
  );
};

export default QueryForm;
