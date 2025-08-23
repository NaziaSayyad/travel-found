import { Link } from "react-router-dom";
import "./Mobile_Costing.css";
export const MobileCosting = () =>{
    return (
        <>
         <div className="mobile-costing">
            <div> 
                    <div className="cost-div-mb">
                        <p className="p-cost"> Starting From </p>
                        <h3 className="rate-costing"> 45,000/- 
                            <span> per person </span> 
                        </h3>
                    </div>
            </div>
            <div>
                <Link to='' style={{textDecoration :'none'}}> 
                <div className="cost-btn">
                    Dates & Costing
                </div>
                 </Link>
            </div>
         </div>
        </>
    )
}