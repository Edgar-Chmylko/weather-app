import React, { useEffect, useState} from 'react'
import './App.css'
import BarLoader from "react-spinners/BarLoader"
import axios from "axios"
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import Forecast from './Components/Forecast/Forecast'


function App() {
  
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
      setLoading(false)
      setData({})
  },[])

  const url = `http://api.weatherapi.com/v1/forecast.json?key=`
  const key = 'da096ae963ec4eb19a362334223006'
  const api = `${url}${key}&q=${location}&days=7`
   
  const searchLocation = (event) => {
    if (event.key === 'Enter'){
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      axios.get(api).then((response)=> {
        setData(response.data)
      }).catch((error)=>{
        alert(`City not found`)
      })
    },1500)
  }
}
  return (
    <>
      <div className='app__container d-flex center' >
        <div className='container'>
          <div className="top-container d-flex center">
            <input type='search'
              className='SearchBar'
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
            ></input>
            </div>
            <div className="middle-container d-flex center column">
              { data.location ? <CurrentWeather {...data}/> : <div className='empty-placeholder'></div>}
              {loading ? <div className='on-top loading d-flex center'><BarLoader /></div> :null}
            </div>
            <div className="bottom-container d-flex row center">
            { data.location ? <Forecast {...data}/> :<div className='empty-placeholder'></div>}
            </div>
          </div>
        </div>
    </>
  )
}

export default App
