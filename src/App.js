
import { Link, Route, Routes } from 'react-router-dom';
import { AllRoutes } from './AllRoutes/AllRoutes';
import './App.css';
import { Dashboard } from './Pages/Dashboard';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';
import { SubNavbar } from './Components/SubNavbar';
import { SubFooter } from './Components/SubFooter';
import { Ladakh } from './Pages/Ladakh/LadakhPage';
import { Spiti } from './Pages/Spiti/Spiti';
import { Test } from './Pages/Test';
import { Shrinagar_Manali } from './Pages/Ladakh/Itenaries/S_M';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      <SubNavbar />
      <Navbar />
      <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/ladakh" element ={<Ladakh />} />
    
    <Route path="/about" element ={<About />} />
    <Route path="/contact" element ={<Contact />}  />
    <Route  path="/spiti" element ={<Spiti />} />
    <Route path="/test" element={<Test />}/>
   <Route path='/shrinagar-to-manali' element={<Shrinagar_Manali />} />
  </Routes>
  
   <Footer />

   {/* <SubFooter /> */}
  </div>
  );
}

export default App;
