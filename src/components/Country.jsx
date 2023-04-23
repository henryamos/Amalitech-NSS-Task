import React from 'react'

const Country = ({darkMode}) => {
  return (
    <div className={`country ${darkMode ? 'darkMode' :''}`}>
      <div className="flag_container">
        <img src="" alt="" />
      </div>

      <div className="details">
        <h3 className="name">Name</h3>
        <p className='title'> Population:
        <span className={`values ${darkMode ? 'darkMode' :''}`}>Test</span>
        </p>
        <p className='title'> Capital:
        <span className={`values ${darkMode ? 'darkMode' :''}`}>Test</span>
        </p>
        <p className='title'> Region:
        <span className={`values ${darkMode ? 'darkMode' :''}`}>Test</span>
        </p>
        
      </div>
    </div>
  )
}

export default Country;
