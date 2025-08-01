import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export const InternationalTrips = () =>{
     const [data,setdata] = useState();
        const [loading,setLoading] = useState(true);
        const {id} = useParams();
    const API = `http://localhost:8080/international/${id}`;
    
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
        <h4> International Trips </h4>
        <h1> {data?.Country}</h1>
        </>
    )
}