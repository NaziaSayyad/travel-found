
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
import { RegistrationForm } from './Pages/Ladakh/Itenaries/Subcomponents/RegistrationForm';
import { useEffect } from 'react';
import { useLocation, BrowserRouter as Router } from 'react-router-dom';
import { SpitiItenary } from './Pages/Spiti/SpitiItenaries';
import DomesticTrips from './Pages/DomesticTrips/DomesticTrips';
import { InternationalTrips } from './Pages/InternationalTrips/InternationalTrips';
import { useIsMobile } from './Responsive-component/UseMobile';
import MobileLandingPage from './MobileVersion/Components/Dashboard/MobileDashboard';
import { MobileNavbar } from './MobileVersion/Components/Navbar/MobileNavbar';
import { MobileFooter } from './MobileVersion/Components/Footer/MobileFooter';

function App() {
  const isMobile = useIsMobile();
  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

  return (
    <div className="App">

    {isMobile ? <MobileNavbar /> :  <Navbar />}
      <Routes>
          <Route path="/" element={isMobile ? <MobileLandingPage /> : <Dashboard />} />
          <Route path="/ladakh" element ={<Ladakh />} />
         <Route path="/about" element ={<About />} />
          <Route path="/contact" element ={<Contact />}  />
          <Route  path="/spiti" element ={<Spiti />} />
          <Route path="/test" element={<Test />}/>
        <Route path='/ladakh/:id' element={<Shrinagar_Manali />} />
        <Route path='/spiti/:id' element={<SpitiItenary />} />
        <Route path='/book-now' element = {<RegistrationForm />}/>
        <Route path='/domestic/:id' element={<DomesticTrips />}  />
        <Route path='/international/:id' element={<InternationalTrips />}/>
      </Routes>
       {isMobile ? <MobileFooter /> :  <Footer />}
    
  </div>
  );
}

export default App;
