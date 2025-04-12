import "./SidebarForm.css";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

export const  Form = ( ) =>{
    return (
        <>
         <div className="form-box">
      <h2>Wanderlust Calling?</h2>
      <p>Allow Us to Call You Back!</p>

      <div className="input-group">
        <i><FaUser /></i>
        <input type="text" placeholder="e.g. John Smith" />
      </div>

      <div className="input-group">
        <i><FaPhone /></i>
        <input type="text" placeholder="Enter your 10 digit number" />
      </div>

      <div className="input-group">
        <i><FaEnvelope /></i>
        <input type="email" placeholder="john@example.com" />
      </div>

      <button className="submit-btn">Submit</button>
    </div>
        </>
    )
}