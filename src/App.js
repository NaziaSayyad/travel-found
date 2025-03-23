
import { Link, Route, Routes } from 'react-router-dom';
import { AllRoutes } from './AllRoutes/AllRoutes';
import './App.css';
import { Dashboard } from './Pages/Dashboard';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';
import { SubNavbar } from './Components/SubNavbar';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      <SubNavbar />
      <Navbar />
      <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/about" element ={<About />} />
    <Route path="/contact" element ={<Contact />}  />
    
   </Routes>
   <Footer />
  
    </div>
  );
}

export default App;
