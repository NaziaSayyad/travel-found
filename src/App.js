
import { Link, Route, Routes } from 'react-router-dom';
import { AllRoutes } from './AllRoutes/AllRoutes';
import './App.css';
import { Dashboard } from './Pages/Dashboard';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      <Navbar />
      <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/about" element ={<About />} />
    <Route path="/contact" element ={<Contact />}  />
    
   </Routes>
  
    </div>
  );
}

export default App;
