import { FaBars } from "react-icons/fa6";
import "./SideDrawer.css";
import { useState } from "react"
import { Link } from "react-router-dom";

export const SideDrawer = () =>{
    const [isOpen,setisOpen] = useState(false);
        
        const toogleDrawer = () =>{
            setisOpen(!isOpen)
        }
    return(
        <>
        <div className="mobile-menu-contanier">
            {/* Hamburger Icon  */}
            <FaBars 
            className="hamburger-icon"
            onClick={toogleDrawer}
            />
            {/* Drawer */}

            <div className={`drawer ${isOpen ? "open" : ""}`}>

                {/* closebutton */}
                <button className="close-btn"
                 onClick={toogleDrawer}>
                    X</button>
                    <div className="menu-list">
                        <Link> Upcoming Trips </Link>
                        <Link> International Trips </Link>
                        <Link to='/ladakh'> Ladakh  </Link>
                        <Link to='/spiti'> Spiti </Link>
                        <Link to='/himachal'> Himachal </Link>
                        <Link to='/'> Upcoming Trips </Link>
                        <Link> Upcoming Trips </Link>
                        <Link> Upcoming Trips </Link>
                        <Link> Upcoming Trips </Link>
                        <Link> Upcoming Trips </Link>
                    </div>
            </div>
        </div>
        
        </>
    )
}