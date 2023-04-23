import { useState } from 'react';
import React from 'react'
import Header from './components/Header';
import Country from './components/Country';
import SearchIcon from '@mui/icons-material/Search';
import './App.css'
import  {Routes,Route} from "react-router-dom"
import CountryDetails from './components/CountryDetails';

function App() {
//  dark mode state : set to false //
const [darkMode,setDarkMode] = useState(false);
const switchMode = ()=>{
  setDarkMode((prevState) => !prevState);
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
              <input type="search"  placeholder='Search for country...' />
            </div>
  
            {/* Region Selection */}
            <div className={`region ${darkMode ? 'darkMode' :''}`}>
                <select>
                  <option value="">All</option>
                  <option value="">Africa</option>
                  <option value="">America</option>
                  <option value="">Asia</option>
                  <option value="">Europe</option>
                  <option value="">Ocenia</option>
                </select>
            </div>
          </div>
          {/* Countries Container */}
          <div className="countries">
            <Country darkMode={darkMode}/>
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
