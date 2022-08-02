import React, { useEffect, useState} from 'react'
import './App.css'
import BarLoader from "react-spinners/BarLoader"
import axios from "axios"
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import WeatherCard from './Components/WeatherCard/WeatherCard'


function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
      setLoading(false)
      setData({})
      
  },[])
  const url= `http://api.weatherapi.com/v1/forecast.json?key=da096ae963ec4eb19a362334223006&q=${location}&days=3`



  const searchLocation = (event) => {
    console.log(url)
    if (event.key === 'Enter'){
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      axios.get(url).then((response)=> {
        setData(response.data)
      }).catch((error)=>{
        alert(`City not found`)
      })
    },2500)
    

  }
}

  return (
    <>
      <div className='app__container d-flex center'>
        <div className='container'>
          <div className="top-container d-flex center">
            <input type='search' 
              placeholder='Enter city name' 
              className='SearchBar'
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
            ></input>
            </div>
            <div className="middle-container d-flex center">
              { data.location ? <CurrentWeather {...data}/> : <div className='empty-placeholder'></div>}
              {loading ? <div className='on-top loading d-flex center'><BarLoader /></div> :null}
            </div>
            <div className="bottom-container d-flex row center">
            { data.location ? <WeatherCard {...data}/> : <div className='empty-placeholder'></div>}
            { data.location ? <WeatherCard {...data}/> : <div className='empty-placeholder'></div>}
            { data.location ? <WeatherCard {...data}/> : <div className='empty-placeholder'></div>}
            </div>
          </div>
        </div>
    </>
  )
}

export default App
