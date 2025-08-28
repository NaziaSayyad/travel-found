import { Link, useNavigate } from "react-router-dom";
import "./Mobile_Costing.css";
export const MobileCosting = ({data}) =>{
    console.log(data,"dates");
    
    const navigate = useNavigate();
    const handleBookNow = () => {
    // You can customize this object to send specific data like batch name, cost etc.
    const bookingDetails = {
       data:data
    };
    if(bookingDetails.Batches){
        navigate("/costing", {state:bookingDetails})
    }
    navigate("/book-now", { state: bookingDetails });
  };
    return (
        <>
         <div className="mobile-costing">
            
                    <div className="cost-div-mb">
                        <p className="p-cost"> Starting From </p>
                        <h3 className="rate-costing"> 45,000/- 
                            <span> per person </span> 
                        </h3>
                    </div>
                <button onClick={handleBookNow} className="cost-btn">
                    Dates & Costing
                </button >
               
             </div>
        </>
    )
}