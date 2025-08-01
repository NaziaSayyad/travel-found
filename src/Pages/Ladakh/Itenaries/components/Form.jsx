import "./SidebarForm.css";
import { FaUser, FaPhone, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const  Form = ( ) =>{
    return (
        <>
         <div className="form-box">
      <h2> <FaPhoneAlt  style={{marginLeft : '5px', marginRight : '5px'}}/> Connect with  Expert  </h2>
      <p>Allow Us to Understand You Better!  </p>

      <div className="input-group">
        <i><FaUser /></i>
        <input type="text" placeholder="Enter Name" required />
      </div>

      <div className="input-group">
        <i><FaPhoneAlt /></i>
        <input type="text" required placeholder="Enter Phonr Number" />
      </div>

      <div className="input-group">
        <i><FaEnvelope /></i>
        <input type="email" placeholder="Enter Email" />
      </div>

      <button className="submit-btn">Submit</button>
    </div>
        </>
    )
}