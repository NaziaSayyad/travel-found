import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const InternationalDropdown = ({ API, NAME }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch countries from API
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setCountries(res.data);
        setFilteredCountries(res.data);
      })
      .catch((err) => console.error('Failed to load data:', err));
  }, [API]);

  // Filter countries on search
  useEffect(() => {
    if (!searchTerm) {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.Country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm, countries]);

  return (
    <div
      className="domestic-dropdown-wrapper"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="dropdown-link">
        <span className="domestic-dropdown-trigger">{NAME}</span>
        <span className="domestic-dropdown-arrow">
          <IoIosArrowDown size={20} />
        </span>
      </div>

      <div
        className={`domestic-dropdown-panel ${
          isDropdownOpen ? 'domestic-dropdown-show' : ''
        }`}
      >
        <input
          type="text"
          className="domestic-dropdown-search"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="domestic-dropdown-grid">
          {/* Display filtered country list dynamically */}
          {filteredCountries.length > 0 ? (
            filteredCountries.map((item, index) => (
              <div className="domestic-dropdown-col" key={index}>
                <Link to={`/international/${item.id}`}>{item.Country}</Link>
              </div>
            ))
          ) : (
            <div className="domestic-dropdown-col">
              <span>No countries found</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternationalDropdown;
