import { useParams } from "react-router-dom";
import "./Mobile_Ladakh_Itenary.css";
import ItenarySlideshow from "../../../Pages/UI/Itenaries_slideshow";

export const Mobile_Ladakh_Itenary = () =>{
    const {id} = useParams();
     const API = `http://localhost:8080/spiti/${id}`;
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
          const getdata = async () =>{
            const res = await axios.get(API);
    
            console.log(res,"Checking");
            
          }
            useEffect(() => {
                  // Scroll to top whenever the component mounts or location changes
                  window.scrollTo(0, 0);
              }, [location]); 
    
    
        useEffect(() => {
        const fetchdata = async () => {
            getdata()
          try {
            const res = await axios.get(API);
            console.log(res.data,"fe");
            setTripDetails(res.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
          }
        };
        fetchdata();
      }, [id]);
    
    
      console.log("Trip Details State:", tripDetails); // Debugging step 2 ✅
      console.log(tripDetails.Inclusions, "incl");
    
    return(
        <>
        <ItenarySlideshow  data={tripDetails}/>
        
        </>
    )
}