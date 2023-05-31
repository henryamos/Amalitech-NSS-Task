import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate} from 'react-router';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const CountryDetails = ({darkMode,countries}) => {
    
    const params = useParams();
    const navigate= useNavigate();
    const [borderNames, setBorderNames] = useState([]);
   
    let name ='';
    let officialName='';
    let flagImg;
    let population;
    let region;
    let subregion;
    let capital;
    let topLevelDomain;
    let currencies =[];
    let borders=[];
     let languages =[]


    countries.forEach( country =>{
       
        if(country.cca3 === params.countryCode){
            const languageList= {...country.languages}     
            name =country.name.common;
            officialName=country.name.official;
            flagImg = country.flags.svg;
            population = country.population.toLocaleString();
            region = country.region;
            subregion = country.subregion;
            topLevelDomain = country.tld[0];
            //currency // 
            currencies = Object.values(country.currencies).map((currency) => currency.name).join(', ');
            //borders//
            borders=country.borders;
            //Language Names // 
            const languageNames = Object.values(languageList).map(language => language).join(', ');
            languages.push(languageNames)
                //Capital //
             capital = country.capital && country.capital.length > 0 ? country.capital[0] : 'N/A';
      
        }
    });
    const goBack=()=>{
        navigate("/")
    }
    useEffect(() => {
        if (borders && borders.length) {
          Promise.all(
            borders.map(borderCode => {
              return fetch(`https://restcountries.com/v2/alpha/${borderCode}`)
                .then(response => response.json())
                .then(data => data.name)
                .catch(error => console.log(error));
            })
          ).then(names => setBorderNames(names));
        }
      }, [borders]);
  return (
    <div className='country_details'>
        <button className={`back ${darkMode ? 'darkMode' :''}`} onClick={goBack}>
            <ArrowBackIcon/>
            <p >Go Back</p>
        </button>
        <div className="country_details_body">
            <div className="img_container">
                <img src={flagImg} alt="" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                
                <div className="info_container">
                    <div className="left_info">
                        <p className={`title ${darkMode ? 'darkMode' :''}`}>Official Name : {" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{officialName}</span>
                        </p>
                        <p className={`title ${darkMode ? 'darkMode' :''}`}>Population: {" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{population}</span>
                        </p>
                        <p className={`title ${darkMode ? 'darkMode' :''}`}>Region : {" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{region}</span>
                        </p>
                        <p className={`title ${darkMode ? 'darkMode' :''}`}>Sub region : {" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{subregion}</span>
                        </p>
                        <p className={`title ${darkMode ? 'darkMode' :''}`}>Capital :{" "}
                        <span className={`value ${darkMode ? 'darkMode' :''}`}>{capital}</span>
                        </p>
                    </div>
                    <div className="right_info">
                       
                        <p className={`title ${darkMode ? 'darkMode' :''}`}>Top Level Domain :{" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{topLevelDomain}</span>
                        </p>
                        <p className={`title ${darkMode ? 'darkMode' :''}`}>Currencies :{" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{currencies}</span>
                        </p>
                        <p className={`title ${darkMode ? 'darkMode' :''}`}>Language :{" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{languages}
                            </span>
                      </p>
                    </div>
                </div>

               <h4> Border Countries:</h4>
                {borders && borders.length ? (
                  borders.map((border, index) => (
                 <div key={border} className={`border_country ${darkMode ? 'darkMode' : ''}`}>
                 <Link className={`link ${darkMode ? 'darkMode' : ''}`} to={`/${border}`}>
                <p >{borderNames[index]}</p>
                </Link>
                 </div>
                 ))
                 ) : (
                    <div className={`border_country ${darkMode ? 'darkMode' :''}`}>
                    <p>No Border Countries...</p>
                    </div>
)}

            </div>
        </div>
    </div>
  )
}

export default CountryDetails;