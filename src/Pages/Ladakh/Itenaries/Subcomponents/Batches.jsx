import { useLocation } from "react-router-dom";
import "./Batches.css";
import { useEffect } from "react";

export const BatchesPage = ({data,start,end}) =>{
    console.log(data, "batch");
   
    
    return(
        <>
        <div className="batch-table-container">
              <h4 className="batch-heading">BATCHES</h4>
              <table className="batch-table">
                <thead>
                  <tr>
                    <th>Batches</th>
                    <th>Starting Date ({start})</th>
                    <th>End Date ({end}) </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.batch}</td>
                      <td>{item.start}</td>
                      <td>{item.end}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </>
    )
}