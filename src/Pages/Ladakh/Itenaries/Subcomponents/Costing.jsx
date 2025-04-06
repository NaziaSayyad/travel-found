import {  useNavigate } from 'react-router-dom';
import './Costing.css';

export const Costing = () => {
    const navigate = useNavigate();

    return (
        <>
         <div style={{textAlign : 'left', marginLeft : '15%'}}>
         <button style={{
            height : '50px',
           width: '150px',
           alignContent : 'end',
           textAlign : 'left',
           backgroundColor : 'white',
           border : '0px',
           cursor : 'pointer'
         }}
         onClick={() => navigate(-1)}>⬅️⬅️⬅️⬅️ </button>

         </div>
            <div className="dates-costing-container">
                <div className="dates-section">
                    <h3>Available Dates</h3>
                    {/* Replace below with dynamic data if needed */}
                    <div className="month-section">
                        <div className="month-header">Jun '25</div>
                        <div className="date-option">21 Jun 2025 - 30 Jun 2025 <span className="open-tag">Open</span> <span className="price">₹35,999/-</span></div>
                        <div className="date-option">28 Jun 2025 - 07 Jul 2025 <span className="open-tag">Open</span> <span className="price">₹35,999/-</span></div>
                    </div>
                </div>

                <div className="costing-section">
                    <h3>Costing</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Mode Of Travel</th>
                                <th>Selling Cost</th>
                                <th>Discounted Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tempo Traveller</td>
                                <td><s>₹37,999/-</s></td>
                                <td>₹35,999/-</td>
                            </tr>
                            <tr>
                                <td>RE Himalayan (Solo)</td>
                                <td><s>₹51,999/-</s></td>
                                <td>₹49,999/-</td>
                            </tr>
                            <tr>
                                <td>RE Himalayan (With Pillion)</td>
                                <td><s>₹41,999/-</s></td>
                                <td>₹39,999/-</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="book-now">
                        <span>Starting Price</span>
                        <strong>₹35,999/-</strong> per person
                        <button>Book Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}