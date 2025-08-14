import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NavbarDropdown.css';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, useLocation, useParams } from 'react-router-dom';

const API = `https://travelfond-backend.onrender.com/domestic`;

const NavbarDropdown = ({ NAME }) => {
    const [statesData, setStatesData] = useState([]);
    const [filteredStates, setFilteredStates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [DomesticDropdown, setDomesticDropdown] = useState(false);
    const { id } = useParams();

 const location = useLocation(); // Add this hook
   useEffect(() => {
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'instant'
          });
      }, []);   
        useEffect(() => {
              // Scroll to top whenever the component mounts or location changes
              window.scrollTo(0, 0);
          }, [location]); 


    // Fetch from API
    useEffect(() => {
        axios.get(API) // Change this to your real URL
            .then((res) => {
                setStatesData(res.data);
                setFilteredStates(res.data);
                console.log(res.data, "filter")
            })
            .catch((err) => console.error('Failed to load data:', err));
    }, []);

    // Filter cities and states on search
    useEffect(() => {
        if (!searchTerm) {
            setFilteredStates(statesData);
            return;
        }

        const filtered = statesData
            .map((state) => {
                const stateMatch = state.State.toLowerCase().includes(searchTerm.toLowerCase());
                const matchedCities = state.City.filter((city) =>
                    city.toLowerCase().includes(searchTerm.toLowerCase())
                );

                if (stateMatch || matchedCities.length > 0) {
                    return {
                        ...state,
                        City: stateMatch ? state.City : matchedCities, // show all if state matches, else only matching cities
                    };
                }

                return null;
            })
            .filter(Boolean); // remove nulls

        setFilteredStates(filtered);
    }, [searchTerm, statesData]);
    console.log(statesData,"ss");
    

    return (
        <div className="domestic-dropdown-wrapper"
            onMouseEnter={() => setDomesticDropdown(true)}
            onMouseLeave={() => setDomesticDropdown(false)}
        >
            <div className="dropdown-link">
                <span className="domestic-dropdown-trigger"> {NAME}</span>
                <span className="domestic-dropdown-arrow">
            <IoIosArrowDown size={20} /></span>
            </div>
 
            <div className="dropdown-menu">
                <input
                    type="text"
                    placeholder="Search City..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="dropdown-search"
                />

                <div className="dropdown-grid">
                    {filteredStates?.map((state, index) => (
                        <div className="domestic-dropdown-item" key={index}>
                            <div className="state-name"> 
                                {/* {state.State} */}
                                 <Link to={`/domestic/${state.id}`}> 
                                    <span className='state-span'>
                                         {state.State} </span>
                                </Link>
                            </div>
                            <div className="city-submenu">
                                {/* {state.City.map((city, i) => {
                  // Only show cities matching search, if search is applied
                  if (
                    searchTerm &&
                    !city.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                    return null;

                  return (
                    <div className="city-item" key={i}>
                      {city}
                    </div>
                  );
                })} */}
                                {state.City.map((city, i) => (
                                    <div className="city-item" key={i}>
                                        {city}
                                    </div>
                                ))}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavbarDropdown;
