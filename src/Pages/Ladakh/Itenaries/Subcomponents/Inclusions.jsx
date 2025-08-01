import { MdArrowRight } from 'react-icons/md';
import './Inclusions.css'
import { FaCheckCircle } from "react-icons/fa"; // Importing the checkmark icon

export const Inclusions = ({ data }) => {
  console.log("Inclu", data);

  return (
    <div className="inclusions-container">
      <h2 className="itinerar-heading">Inclusions</h2>
      <ul className="inclusions-list">
        {data?.map((el, index) => (

          <li key={el.id} className="inclusion-category">
            <div className="inclusion-heading">
              {/* <MdArrowRight size={20} color="teal" /> */}
              <span> <img src={el.img} alt="logo" className='logo-category' /></span>
              <span>{el.Name}</span>
            </div>

            <ul className="sub-list">
              {el.details?.map((detail, index) => (
                 <li key={index} className="inclusions-item">
                 {detail}
               </li>
              ))}
              <p>
               {/* style={{ letterSpacing: '1px' }}> */}
                 {el.meals?.join("    ")} 
              </p>
            </ul>
          </li>


        ))}
      </ul>
    </div>
  );
}