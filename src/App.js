
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
import { useEffect } from 'react';
import { useLocation, BrowserRouter as Router } from 'react-router-dom';
import { SpitiItenary } from './Pages/Spiti/SpitiItenaries';
import DomesticTrips from './Pages/DomesticTrips/DomesticTrips';
import { InternationalTrips } from './Pages/InternationalTrips/InternationalTrips';

import MobileLandingPage from './MobileVersion/Components/Dashboard/MobileDashboard';
import { MobileNavbar } from './MobileVersion/Components/Navbar/MobileNavbar';
import { MobileFooter } from './MobileVersion/Components/Footer/MobileFooter';
import { useBreakpoint } from './Responsive-component/UseMobile';
import { Mobile_Ladakh_ITenary } from './MobileVersion/Pages/LadakhItenary/Ladakh_Itenary';
import { LadakhPage } from './MobileVersion/Pages/Ladakh_Mobile';
import { WhatsAppButton } from './Pages/UI/WhatsappButton';
import { Ladakh_New_Trips } from './Pages/LadakhTrips/LadakhTrips';
import { PrivacyPolicy } from './PrivacyPolicy/PrivacyPolicy';
import { RegistrationForm } from './Pages/Booking/Customize_Form/RegistrationForm';
import { BatchCosting } from './MobileVersion/Pages/Booking/BatchCosting';
import { GroupForm } from './MobileVersion/Pages/BookingForm/GroupTripsForm';
import { City } from './Pages/DomesticTrips/City';
import { Kashmir_Page } from './Pages/Kashmir/Kashmir';

function App() {// You want mobile <= 768, tablet <= 1200
const { isMobile, isTablet, isDesktop } = useBreakpoint(768,1200, 1024);


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
    <div className='App'>

      {isMobile &&  <MobileNavbar />}
      {/* {isTablet && } */}
      
      {isTablet && <Navbar />}


      {/* Desktop  */}
      {isDesktop && <Navbar />}
    {/* {isMobile ? <MobileNavbar /> :  <Navbar />} */}

      <Routes>
        {/* <Route path="/" element={isMobile && <MobileLandingPage /> } />
       {isDesktop && <Dashboard />} />
        <Route path='/' element = {isDesktop && <Dashboard />} /> */}

         <Route
        path="/"
        element={isMobile ? <MobileLandingPage /> : <Dashboard />}
        // element = {isTablet ? <MobileLandingPage /> : <Dashboard />}
      />

        <Route path="/ladakh" element ={<Ladakh /> } />
        <Route path="/about" element ={<About />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path="/contact" element ={<Contact />}  />
        <Route path="/spiti" element ={<Spiti />} />
        <Route path="/test" element={<Test />} />
        <Route path='/costing' element={<BatchCosting /> } />
        <Route path='/ladakh/:id' 
        element={isMobile ? <Mobile_Ladakh_ITenary /> : 
        <Shrinagar_Manali />} 
        />
        <Route path='/ladakhTrip' element = {<Ladakh_New_Trips />}/>
        <Route path='/spiti/:id' element={<SpitiItenary />} />
        <Route path='/book-now' element = {isMobile ? 
        <GroupForm /> : <RegistrationForm />} />
        <Route path='/weekend' element={<DomesticTrips />} />
        <Route path ='weekend/:id/city/:city_id' element = {<City />} />
        {/* <Route path='/domestic/:id' element={<DomesticTrips />}  /> */}
        {/* <Route path='/international/:id' element={<InternationalTrips />}/> */}
     <Route path='/kashmir' element = {<Kashmir_Page />}/>
      </Routes>
      <button style={{
        position: 'fixed',
        bottom : '10px',
        right : '20px',
        border: 'none',
        backgroundColor : ' rgb(78, 240, 78)',
        borderRadius : '25px',
        cursor : 'pointer',
        height : '45px',
        boxShadow : '2px 4px 10px rgba(0, 0, 0, 0.2)'
      }}>
        <WhatsAppButton />
      </button>
       {/* {isMobile && <MobileFooter /> }
       {isDesktop &&  <Footer />} */}
    <Footer />
    {/* <SubFooter /> */}
    {/* {isMobile && <MobileFooter />} */}
  </div>
  );
}

export default App;
