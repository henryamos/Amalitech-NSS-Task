import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Header = ({onClick,darkMode}) => {
  return (
    // Header//
   <div className={`header ${darkMode ? 'darkMode' :''}`}>
    
        <div className="header_container">
        <h2 className="logo">Where is the world?</h2>
       {/* Dark Mode */}
        <div className="switch_mode" onClick={onClick}>
        <DarkModeIcon/>
        <h3>Dark Mode</h3>
      
        </div>
        

          {/* container end */}
        </div>
        
   </div>
  )
}

export default Header