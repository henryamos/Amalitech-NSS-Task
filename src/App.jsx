import { useState,useEffect,useRef } from 'react';
import React from 'react'
import Header from './components/Header';
import Country from './components/Country';
import SearchIcon from '@mui/icons-material/Search';
import './App.css'
import  {Routes,Route} from "react-router-dom"
import CountryDetails from './components/CountryDetails';

function App() {
  const url = 'https://restcountries.com/v3.1/all';
  //  dark mode state : set to false //
  const [darkMode, setDarkMode] = useState(false);
  //Search State
  const countriesInputRef = useRef();
  const regionRef = useRef();
  //Countries state //
  const [countries, setCountries] = useState([]);

  const noCountries = countries.status || countries.message;

  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 404) {
        setCountries([]);
        return;
      }
      setCountries(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //Fetch data Function
    fetchCountryData();
  }, []);

  //dark mode function //
  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  // Searching Countries //
  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;
    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const data = await response.json();
        setCountries(data);
      };
      try {
        fetchSearch();
      } catch (error) {}
    } else {
      fetchCountryData();
    }
  };
  // select region //
  const selectRegion = () => {
    const selectValue = regionRef.current.value;
    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${selectValue}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (selectValue === 'All') {
          try {
            fetchCountryData();
          } catch (error) {
            console.log(error);
          }
          return;
        }
        setCountries(data);
      };
      try {
        fetchSelect();
      } catch (error) {
        console.log(error);
      }
    }
  };
return (
    <div className={`app ${darkMode ? 'darkMode' :''}`}>
      {/* Header Section */}
      <Header onClick={switchMode} darkMode={darkMode}/>
      
      {/* Body  */}
      <Routes>
         <Route path='/' 
         element={
          <div className="app_body">
          <div className="inputs">
            {/* Search Input */}
            <div className= {`search_input ${darkMode ? 'darkMode' :''}`}>
              <SearchIcon/>
              <input type="search"  placeholder='Search for country...' ref={countriesInputRef} onChange={searchCountries}/>
            </div>
  
            {/* Region Selection */}
            <div className={`region ${darkMode ? 'darkMode' :''}`}>
                <select ref={regionRef} onChange={selectRegion}>
                  <option>All</option>
                  <option>Africa</option>
                  <option>Americas</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Ocenia</option>
                </select>
            </div>
          </div>
          {/* Countries Container */}
          <div className="countries">
              {!noCountries? (

                countries.map(country =>(
                  <Country 
                    darkMode={darkMode}
                    key={country.name.common} {...country}
                  />
                ))

                  ):(
                    <h4>No Country Found..</h4>
                  )
         
            }
          </div>
        </div>
      
         }/>

      <Route path='country-details' element={
        <CountryDetails darkMode={darkMode}/>
        
}/>
      </Routes>
      </div>
  )
}

export default App;
