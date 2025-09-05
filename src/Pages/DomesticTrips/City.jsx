import axios from "axios";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom"

export const City = () =>{
    const { id,city_id } = useParams();
    const[city,setcity] = useState();

  const API = `https://travelfond-backend.onrender.com/weekend/${id}/city/${city_id}`;
 
    useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(API);
        console.log(res.data.city,"city");
        setcity(res.data.city);
        // setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        
      }finally{
        // setLoading(false);
      }
    };
    fetchdata();
  }, [id]);

    return (
        <>
        <div style={{marginTop : '15%'}}>
            <h1> 
            Itenaries Page</h1>

            <h4> {city?.City}</h4>
            <img 
            style={{ 
              width : '200px',
              height : '200px'
            }}
              src={city?.image}
            />

            <h3> Itenaries Data Will Come Here</h3>
        </div>
        </>
    )
}