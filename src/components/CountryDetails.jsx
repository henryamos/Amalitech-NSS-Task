import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CountryDetails = ({darkMode}) => {
  return (
    <div className='country_details'>
        <button className={`back ${darkMode ? 'darkMode' :''}`}>
            <ArrowBackIcon/>
            <p>Go Back</p>
        </button>
        <div className="country_details_body">
            <div className="img_container">
                <img src="" alt="" />
            </div>
            <div className="info">
                <h2>Name</h2>
                <div className="info_container">
                    <div className="left_info">
                        <p>Native Name :{""}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>Test</span>
                        </p>
                        <p>Population:{""}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>Test</span>
                        </p>
                        <p>Region :{""}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>Test</span>
                        </p>
                        <p>Sub region :{""}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>Test</span>
                        </p>

                    </div>
                    <div className="right_info">
                       <p>Capital :{""}
                        <span className={`value ${darkMode ? 'darkMode' :''}`}>Test</span>
                        </p>
                        <p>Top Level Domain:{""}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>Test</span>
                        </p>
                        <p>Currencies:{""}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>Test</span>
                        </p>
                        <p>Language:{""}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>Test</span>
                        </p>
                    </div>
                </div>

                Border Countries:
                <div className={`border_country ${darkMode ? 'darkMode' :''}`}>
                    <p>Test</p>
                </div>
                <div className={`border_country ${darkMode ? 'darkMode' :''}`}>
                    <p>Test</p>
                </div>
                <div className={`border_country ${darkMode ? 'darkMode' :''}`}>
                    <p>Test</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CountryDetails;