import { MdArrowRight } from 'react-icons/md';
import './Inclusions.css'
import { FaCheckCircle } from "react-icons/fa"; // Importing the checkmark icon

export const Inclusions= ({data})=>{
    console.log("Inclu",data);
    
    return (
        <div className="inclusions-container">
          <h2 className="itinerar-heading">Inclusions</h2>
          <ul className="inclusions-list">
            {data?.map((el, index) => (
            <li key={el.id} className="inclusion-category">
            <strong>{el.Name}</strong> {/* Display the category name if needed */}
           
            <ul className="sub-list">
              {el.details.map((detail, index) => (
                <li key={index} className="inclusions-item">
                  {/* <FaCheckCircle size={18} color="green" className="icon" /> */}
                   <MdArrowRight size={30} color="teal" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </li>
            
            ))}
          </ul>
        </div>
      );
}