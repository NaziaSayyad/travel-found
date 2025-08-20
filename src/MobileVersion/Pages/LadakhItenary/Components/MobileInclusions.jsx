import "./MobileInclusions.css";
import { MdArrowRight } from 'react-icons/md';
import { FaCheckCircle } from "react-icons/fa"; // Importing the checkmark icon

export const MobileInclusions = ({data})=>{
    
    return(
        <>
        <div className="mobile-inclusions-container"> 
         <h2 className="mobile-heading"> Inclusions </h2> 
            <ul className="mobile-inclusions-list">
        {data?.map((el, index) => (

          <li key={el.id} className="mobile-inclusion-category">
            <div className="mobile-inclusion-heading">
              {/* <MdArrowRight size={20} color="teal" /> */}
              <span> <img src={el.img} alt="logo" 
              className='mobile-logo-category' /></span>
              <span>{el.Name}</span>
            </div>

            <ul className="mobile-sub-list">
              {el.details?.map((detail, index) => (
                 <li key={index} className="mobile-inclusions-item">
                 {detail}
               </li>
              ))}
              <p className='mobile-para-incl'>
               {/* style={{ letterSpacing: '1px' }}> */}
                 {el.meals?.join("    ")} 
              </p>
            </ul>
          </li>


        ))}
      </ul>
        </div>
        </>
    )
}