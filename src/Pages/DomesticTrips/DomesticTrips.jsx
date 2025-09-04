import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useBreakpoint } from "../../Responsive-component/UseMobile";
import { LadakhPage } from "../../MobileVersion/Pages/Ladakh_Mobile";
import Carousel from "../UI/Layout";
import "./DomesticTrips.css";
import { Mobile_TravelCarousel } from "../../MobileVersion/Pages/Mobile_TravelCarousel";
import { TravelCarousel } from "../UI/Swiper";
const images = [
  {
    url: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.ibb.co/cXDPsY8j/1-4.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.ibb.co/FLVKvs0B/1-15.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
];

const API = 'https://travelfond-backend.onrender.com/weekend';
// https://travelfond-backend.onrender.com/weekend'

// https://travelfond-backend.onrender.com/weekend
const  DomesticTrips = () =>{
  const [getdata,setdata] = useState();
  const [destination,setdestination] = useState();
  const[Loading,setLoading] = useState(false);



   useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true)
        const res = await axios.get(API);
        console.log(res.data,"fe");
        setdestination(res.data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        
      }finally{
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

   return(
    <>
          <div style={{marginTop : '15%'}}>
              <h1> Weekend Trips </h1>

            {
              destination?.map((el) =>(
                <>
                  <h1> {el.Name}</h1>
                  <div className="city-card">
                    {
                      el.city?.map((i) =>(
                        <>
                          <div >
                            <Link to={`/city`}>
                              <img src= {i.image} style={{ 
                              borderRadius : '25%',
                              cursor : 'pointer',
                              width : '200px' , height : '200px'}}
                              />
                            </Link>
                            <h3> {i.City}</h3>
                          </div>
                        </>
                      ))
                    }
                  </div>
                </>
              ))
            }
          </div>
          
    </>
   )




       
}
export default DomesticTrips;
