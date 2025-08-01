import { useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Ladakh } from './Pages/Ladakh/LadakhPage';

import App from './App';

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/ladakh" element={<Ladakh />} />
        {/* ... your other routes ... */}
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/ladakh" element ={<Ladakh />} />
                    <Route path="/about" element ={<About />} />
                    <Route path="/contact" element ={<Contact />}  />
                    <Route  path="/spiti" element ={<Spiti />} />
                    <Route path="/test" element={<Test />}/>
                    <Route path='/ladakh/:id' element={<Shrinagar_Manali />} />
                    <Route path='/book-now' element = {<RegistrationForm />}/>  
      </Routes>
    </Router>
  );
}

export default App;