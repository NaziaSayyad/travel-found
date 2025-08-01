import React, { useState, useEffect } from "react";
import "./FilterComponent.css";
const list =[
  "Leh","Leh Sightseeing", "Nubra", "Pangong", "Tso Moriri", "Hanle Umling La","Turtuk Day Excursion","Turtuk",
];

const FilterComponent = ({ onFilterChange, cityList = [] }) => {
      const [filters, setFilters] = useState({
        nights: "",
        route: "",
        budget: "",
        customize: "",
        cities: []
      });

    const handleChange = (e) => {
      const { name, value } = e.target;
      const updatedFilters = { ...filters, [name]: value };
      setFilters(updatedFilters);
      onFilterChange(updatedFilters);
    };

  const handleCityToggle = (city) => {
    const updatedCities = filters.cities.includes(city)
      ? filters.cities.filter(c => c !== city)
      : [...filters.cities, city];

    const updatedFilters = { ...filters, cities: updatedCities };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    const resetFilters = { 
      nights: "",
      route: "",
      budget: "",
      customize: "",
      cities: [],
      turtuk : "",
      leh: "",
      hanleUmlingla : "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  // Update handleChange to handle checkboxes
// const handleCheckboxChange = (e) => {
//   const { name, checked } = e.target;
//   console.log(name);
  
//   const updatedFilters = { ...filters, [name]: checked };
//   setFilters(updatedFilters);
//   onFilterChange(updatedFilters);
// };


  return (
    <>
      <div className="filter-main-container">
        <h4> Create Your Own Itenary </h4>
        {/* Multi-select Cities */}
        <div className="city-multiselect">
          <div className="city-checkbox-list">
            {list.length > 0 ? list
              // .filter(city => 
              // ["Leh", "Nubra", "Pangong", "Tso Moriri", "Hanle Umling La",
              //   "Turtuk Day Excursion","Turtuk","Leh Sightseeing"].includes(city))
              .map((city) => {
                const isTurtukDisabled = filters.cities.includes("Turtuk Day Excursion") && city === "Turtuk";
                const isExcursion = filters.cities.includes("Turtuk") && city === "Turtuk Day Excursion";
                const isLehDisabled = filters.cities.includes("Leh") && city === "Leh Sightseeing";
                const isLehSightDisabled = filters.cities.includes("Leh Sightseeing") && city === "Leh";
                const isdisabled = isTurtukDisabled || isExcursion  || isLehDisabled || isLehSightDisabled;

                return(
                   <label key={city} className="city-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.cities.includes(city)}
                    disabled ={isdisabled}
                    onChange={() => handleCityToggle(city)}
                  />
                  {city}
                </label>
              )}) : <p> No cities Available</p>
            }

               
          </div>
        </div>

        <div className="filter-container">
          {/* Nights Dropdown */}
          <select name="nights" value={filters.nights} onChange={handleChange}>
            <option value="">Select Nights</option>
            <option value="4">4 Nights</option>
            <option value="5">5 Nights</option>
            <option value="7">7 Nights</option>
            <option value="8">8 Nights</option>
            <option value="9">9 Nights</option>
            <option value="10">10 Nights</option>
            <option value="11">11 Nights</option>
            <option value="12">12 Nights</option>
            <option value="13">13 Nights</option>
          </select>

          {/* Route Dropdown */}
          <select name="route" value={filters.route} onChange={handleChange}>
            <option value="">Select Route</option>
            <option value="Delhi-Srinagar">Delhi-Srinagar</option>
            <option value="Delhi-Delhi">Delhi-Delhi</option>
            <option value="Srinagar-Leh">Srinagar-Leh</option>
            <option value="Srinagar-Delhi">Srinagar-Delhi</option>
            <option value="Srinagar-Manali">Srinagar-Manali</option>
            <option value="Manali-Srinagar">Manali-Srinagar</option>
            <option value="Leh-Srinagar">Leh-Srinagar</option>
            <option value="Leh-Leh">Leh-Leh</option>
          </select>

          {/* Budget Dropdown */}
          {/* <select name="budget" value={filters.budget} onChange={handleChange}>
            <option value="">Select Budget</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select> */}

          {/* Customize Dropdown */}
          <select name="customize" value={filters.customize} onChange={handleChange}>
            <option value="">Select Group / Custom</option>
            <option value="Custom">Customize</option>
            <option value="Group">Group</option>
          </select>
          {/* leh sighteseeing */}
          {/* <select name="leh" value={filters.leh} onChange={handleChange}>
          <option value="false"> No Leh Sightseeing</option>
          <option value="Leh Sightseeing">Leh Sightseeing</option>
          </select>  */}
          {/* turtuk */}
          {/* <select name="turtuk" value={filters.turtuk} onChange={handleChange}>
          <option value="false"> Turtuk </option>
          <option value="Turtuk Day Excursion">Turtuk Day Excursion</option>
          </select>  */}
          {/* hanle umlingla */}
            {/* <select name="hanleUmlingla" value={filters.hanleUmlingla} onChange={handleChange}>
          <option value="false"> No Hanle Umlingla </option>
          <option value="hanle Umlingla">Hanle Umlingla</option>
          </select>  */}
        {/* <div className="extra-checkboxes">
        <label>
          <input
            type="checkbox"
            name="Leh Sightseeing"
            checked={filters.leh}
            onChange={handleCheckboxChange}
          />
          Leh Sightseeing
        </label>

          <label>
            <input
              type="checkbox"
              name="Turtuk Day Excursion"
              checked={filters.turtuk}
              onChange={handleCheckboxChange}
            />
            Turtuk Day Excursion
          </label>
            <label>
            <input
              type="checkbox"
              name="hanle Umlingla"
              checked={filters.hanleUmlingla}
              onChange={handleCheckboxChange}
            />
            Hanle Umlingla 
          </label>
        </div> */}
</div>

        

        <button className="reset-btn" onClick={handleReset}>
          Reset Filters ⟳
        </button>
      </div>
    </>
  );
};

export default FilterComponent;
