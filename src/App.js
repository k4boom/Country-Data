import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
function App() {
  //COUNTRY LIST STATE
  const [countries,setCountries] = useState([]);
  //STATE FOR SEARCH BAR CHANGES
  const [search , setSearch] = useState('');

  //COUNTRY STATS API ACCESS THROUGH AXIOS
  useEffect(()=>{axios
  .get('https://restcountries.eu/rest/v2/all')
  .then(response => {
    console.log(response)
    setCountries(response.data)
  })} , [])
  //SEARCH BAR CHANGE HANDLER
  const handleChange = (event)=>{
    setSearch(event.target.value);
  }
  
  //FILTER FUNCTION FOR SEARCHING THROUGH COUNTRY LIST
  //NOT SENSITIVE TO LOWER OR UPPER CASE
  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));

      return (
    <div>
      Find Countries <input value={search} onChange={handleChange} ></input>
    
      <CountryList content={countriesToShow}></CountryList>
    
    </div>
    
  )
}

export default App
