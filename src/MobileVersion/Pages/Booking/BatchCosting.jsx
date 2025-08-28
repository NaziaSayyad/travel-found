import { Link, useLocation, useNavigate } from "react-router-dom";
import { BatchesPage } from "../../../Pages/Ladakh/Itenaries/Subcomponents/Batches"
import { CostingPage } from "../../../Pages/Ladakh/Itenaries/Subcomponents/Costing"

export const BatchCosting = () =>{
      const location = useLocation();
     const navigate = useNavigate();      

    const bookingData = location.state?.data || {};
    console.log("booking Details", bookingData);

     const handleBookNow = () => {
    // You can customize this object to send specific data like batch name, cost etc.
    const bookingDetails = {
       data:bookingData
    };
    
    navigate("/book-now", { state: bookingDetails });
  };

    return (
        <>
       <div>
            <h1> Batch Page </h1>
            <BatchesPage 
            data ={bookingData.Batches} 
            start={bookingData.start} 
            end={bookingData.end}
            />
       </div>
       <div>
         <h1> Batch Costing Page </h1>
            <CostingPage data={bookingData.Costing}
            />
        </div>
        <div className="book-now-container">
              <button className="book-now-btn" onClick={handleBookNow}>
                Book Now
              </button>
        </div>
        </>
    )
}