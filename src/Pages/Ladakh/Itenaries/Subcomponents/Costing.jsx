import { Link } from "react-router-dom";
import "./Costing.css";

export const CostingPage = ({data}) =>{
    console.log(data,"costing");
    
    return(
        <>
            <div className="costing-table-container">
              <h4 className="costing-heading">COSTING</h4>
              <table className="costing-table">
                <thead>
                  <tr>
                    <th>Modes of Transportation</th>
                    <th>Cost (Per Person)</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.mode}</td>
                      <td>{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
              {/* Book Now Btn */}
              {/* <div className="book-now-container">
             <Link to='/book-now'> 
             <button className="book-now-btn">Book Now </button>
             </Link>
             </div> */}
        </> 
    )
}