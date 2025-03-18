import { Route, Router, Routes } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
import About from "../Pages/About"
import Contact from "../Pages/Contact"

export const AllRoutes = () =>{
   <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/about" element ={<About />} />
    <Route path="/contact" element ={<Contact />}  />
    
   </Routes>
}
