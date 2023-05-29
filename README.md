# rest-countries-api
# Amalitech-NSS-Task 

Country Info App
This is a React webapp that allows users to view information about different countries using data fetched from the restcountries API.

Installation
To run this project, you will need to have Node.js installed. Clone the repository, and run the following command in your terminal to install the dependencies.

Features
Dark mode toggle button
Search countries by name
Filter countries by region
Click on a country to see detailed information

Code Overview
App.js is the main component of the app, and it contains the state and logic for fetching the data, as well as rendering the different components.
Header.js renders the header of the app, which contains the title and the dark mode toggle button.
Country.js renders information about a single country, such as the flag, name, population, region, and capital.
CountryDetails.js shows detailed information about a selected country, such as languages, currencies, and bordering countries.
index.js renders the app to the DOM.

API Usage
This app uses the restcountries API to fetch data about different countries. The API provides data in both JSON and XML format and includes information such as country name, capital, population, currency, and more.