import { useState,useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  //Search State //
  const countriesInputRef = useRef();
  const regionRef = useRef();
// Loading state //
const [isLoading, setIsLoading] = useState(false);
  //navigate //
  const navigate = useNavigate()
  //Countries state //
  const [countries, setCountries] = useState([]);

  const noCountries = countries.status || countries.message;

  const fetchCountryData = async () => {
    setIsLoading(true);
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
      try {
        let url;
        if (selectValue === 'All') {
          url = 'https://restcountries.com/v3.1/all';
        } else {
          url = `https://restcountries.com/v3.1/region/${selectValue}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Unable to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        if (selectValue === 'All') {
          fetchCountryData();
          return;
        }
        setCountries(data);

      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    fetchSelect();
  }
};

//Show Details of Country //
const showDetails = (code) => {
  navigate(`/${code}`);
}
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
                  <option>Oceania</option>
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
                    code={country.cca3}
                    showDetails={showDetails}
                  />
                ))

                  ):(
                    <h4>No Country Found..</h4>
                  )
         
            }
          </div>
        </div>
      
         }/>

      <Route path='/:countryCode' element={
        <CountryDetails darkMode={darkMode} countries={countries}/>
        
}/>
      </Routes>
      </div>
  )
}

export default App;
