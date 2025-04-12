import axios from "axios";
import Carousel from "../UI/Layout"
import { TravelCarousel } from "../UI/Swiper"
import { useEffect, useState } from "react";
 import "./LadakhPage.css";
const API = 'http://localhost:8080/ladakh';


export const Ladakh = () =>{
    const [data,setdata] = useState();
    const [filterData,setfilterData] = useState();
    const[MLS,setMLS] = useState();
    const[SLMD, setSLMD] = useState()
    const[DMLS,setDMLS] = useState();

    const getdata = async() =>{
        const res = await axios.get(API);
       return res.data;
        
    }
  
    useEffect(() =>{
        const fetchdata = async () =>{
            try{
                const res = await getdata();
                console.log(res, "res");
                setdata(res)
                        // Filter trips based on their codes
                        const mls = res.filter(trip => trip.code === "MLS");
                        const dmls = res.filter(trip => trip.code === "DMLS");
                        const slmd = res.filter(trip => trip.code === "SLMD");
        
                        // Update state variables
                        setMLS(mls);
                        setDMLS(dmls);
                        setSLMD(slmd);
            }catch (error) {
                console.error("Error fetching data:", error);
                 }
        };

        fetchdata();

    },[])
        return(
        <>
        
        <div>
            <Carousel />
            <h1> Ladakh </h1>
            <h1> About Ladakh packages  </h1>
            <h1> About Ladakh packages  </h1>
            <h2 className="trips-define"> Trip From  Delhi to Srinagar</h2>
            <TravelCarousel  data={DMLS}/>
            <h2 className="trips-define"> Trip From Manali to Srinagar</h2>
            <TravelCarousel  data={MLS}/>
            <h2 className="trips-define"> Trip From Srinagr to Delhi </h2>
            <TravelCarousel  data={SLMD}/>
        </div>
        </>
    )
}
