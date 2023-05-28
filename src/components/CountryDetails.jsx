import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate} from 'react-router';
const CountryDetails = ({darkMode,countries}) => {
    const params = useParams();
    const navigate= useNavigate();

    let name ='';
    let nativeName='';
    let flagImg;
    let population;
    let region;
    let subregion;
    let capital;
    let topLevelDomain;
    let currencies =[];
    let borders=[];
    let languages =[];

    countries.forEach( country =>{
        if(country.cca3 === params.countryCode){
            name =country.name.common;
            //Native Name need to be worked on //
            // nativeName=country.name.nativeName.common//;
            flagImg = country.flags.svg;
            population = country.population.toLocaleString();
            region = country.region;
            subregion = country.subregion;
            capital= country.capital[0];
            topLevelDomain = country.tld[0];
            currencies = Object.values(country.currencies).map((currency) => currency.name).join(', ');
            //Borders  need to be worked on //
            borders = country.borders;
            //Langauges need to be worked on //
            languages = Object.values(country.languages).map((language) => language.name).join(', ');
            
        }
    });

    const goBack=()=>{
        navigate("/")
    }

  return (
    <div className='country_details'>
        <button className={`back ${darkMode ? 'darkMode' :''}`} onClick={goBack}>
            <ArrowBackIcon/>
            <p>Go Back</p>
        </button>
        <div className="country_details_body">
            <div className="img_container">
                <img src={flagImg} alt="" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                
                <div className="info_container">
                    <div className="left_info">
                        <p>Native Name : {" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{nativeName}</span>
                        </p>
                        <p>Population: {" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{population}</span>
                        </p>
                        <p>Region : {" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{region}</span>
                        </p>
                        <p>Sub region : {" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{subregion}</span>
                        </p>

                    </div>
                    <div className="right_info">
                       <p>Capital :{" "}
                        <span className={`value ${darkMode ? 'darkMode' :''}`}>{capital}</span>
                        </p>
                        <p>Top Level Domain :{" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{topLevelDomain}</span>
                        </p>
                        <p>Currencies :{" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{currencies}</span>
                        </p>
                        <p>Language :{" "}
                            <span className={`value ${darkMode ? 'darkMode' :''}`}>{languages}</span>
                        </p>
                    </div>
                </div>

                Border Countries:
                <div className={`border_country ${darkMode ? 'darkMode' :''}`}>
                    <p>{borders[0]}</p>
                </div>
                <div className={`border_country ${darkMode ? 'darkMode' :''}`}>
                    <p>{borders[1]}</p>
                </div>
                <div className={`border_country ${darkMode ? 'darkMode' :''}`}>
                    <p>{borders[2]}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CountryDetails;