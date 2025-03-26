import { Route, Router, Routes } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
import About from "../Pages/About"
import Contact from "../Pages/Contact"

import { Spiti } from "../Pages/Spiti/Spiti"
import { Test } from "../Pages/Test"
import {Ladakh} from "../Pages/Ladakh/LadakhPage"

export const AllRoutes = () =>{
  return (
   <>

   <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/ladakh" element ={<Ladakh />} />
    
    <Route path="/about" element ={<About />} />
    <Route path="/contact" element ={<Contact />}  />
    <Route  path="/spiti" element ={<Spiti />} />
    <Route path="/test" element={<Test />}/>
   </Routes>
   
   </>
  )
}
