import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ItenarySlideshow from "../../../Pages/UI/Itenaries_slideshow";
import { TabNavigation } from "../../../Pages/Ladakh/Itenaries/components/TabNavigation";
import { MobileTabNavigation } from "./Components/MobileTabNavigation";
import { FloatingButtons } from "../../../FloatingButtons/WhatsAPP_Floating";
import Loading from "../../../Loading/Loading";

export const Mobile_Ladakh_ITenary = () =>{
   const { id } = useParams();
  
    const API = `https://travelfond-backend.onrender.com/ladakh/${id}`;
    const [tripDetails, setTripDetails] = useState("");
    const [loading, setLoading] = useState(true);
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
        setLoading(true)
        const res = await axios.get(API);
        console.log(res.data,"fe");
        setTripDetails(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        
      }finally{
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);


  console.log("Trip Details State:", tripDetails); // Debugging step 2 ✅
  console.log(tripDetails.Inclusions, "incl");

if(loading){
  return <Loading /> 
}
    return(
        <>
        <ItenarySlideshow />
         <div>
          <MobileTabNavigation 
              Name={tripDetails?.Itenary_name}
              Inclusion={tripDetails?.Inclusions}
              Exclusion={tripDetails?.Exclusions}
              Itenary={tripDetails?.Itenary}
              Overviews={tripDetails?.overview_highlight}
              route={tripDetails?.Route}
              costing ={tripDetails?.Costing}
              batches = {tripDetails?.Batches}
              start = {tripDetails?.start}
              end = {tripDetails?.End}
              nights = {tripDetails?.nights}
          />
            
         </div>
        {/* <h1> Mobile Itenary Page </h1> */}
        <FloatingButtons />
        </>
    )
}