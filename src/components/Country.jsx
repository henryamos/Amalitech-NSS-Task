import React from 'react'
const Country = ({darkMode,flags,name,region,capital,population}) => {
  return (
   
    <div className={`country ${darkMode ? 'darkMode' :''}`}>
    
      <div className="flag_container">
        <img src={flags.svg} alt="" />
      </div>

      <div className="details">
        <h3 className="name">{name.common}</h3>
        <p className='title'> Population:
        <span className={`values ${darkMode ? 'darkMode' :''}`}>{population}</span>
        </p>
        <p className='title'> Capital:
        <span className={`values ${darkMode ? 'darkMode' :''}`}>{capital}</span>
        </p>
        <p className='title'> Region:{''}
        <span className={`values ${darkMode ? 'darkMode' :''}`}>{region}</span>
        </p>
        
      </div>
    </div>
  )
}

export default Country;
