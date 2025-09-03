import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useBreakpoint } from "../../Responsive-component/UseMobile";
import { LadakhPage } from "../../MobileVersion/Pages/Ladakh_Mobile";
import Carousel from "../UI/Layout";
import "./DomesticTrips.css";
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

const  DomesticTrips = () =>{
    const [data,setdata] = useState();
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    const { isMobile, isTablet, isDesktop } = useBreakpoint(820, 1200, 1024);
    
  const API = `https://travelfond-backend.onrender.com/domestic/${id}`;

 const location = useLocation(); // Add this hook
   useEffect(() => {
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'instant'
          });
      }, []);   
        useEffect(() => {
              // Scroll to top whenever the component mounts or location changes
              window.scrollTo(0, 0);
          }, [location]); 


 useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(API);
        console.log(res.data.State,"fe");
        console.log(res.data);
        
        setdata(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);

    return(
        <>
        <div>
           {isMobile && <LadakhPage />}
          {isDesktop && <Carousel images={images} />}
        </div>
      <div style={{marginTop : '1%'}}>

         <h4>  weekend Trips   </h4>
       <h1> state :  {data?.State}</h1>
       <div className="weekend-container">
        {
          data?.City?.map((el,index) => (
        <h4 key={index}> {el}</h4>
        ))
        }
       </div>
      </div>
       
        </>
    )
}
export default DomesticTrips;
