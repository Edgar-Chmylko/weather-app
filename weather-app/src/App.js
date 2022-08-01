import React, { useEffect, useState} from 'react'
import './App.css'
import BarLoader from "react-spinners/BarLoader"
import axios from "axios"
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'


function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
      setLoading(false)
      setData({})
      
  },[])
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8e5db52e02e347c69d892563ce2277d3`


  const searchLocation = (event) => {
    if (event.key === 'Enter'){
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      axios.get(url).then((response)=> {
        setData(response.data)
      })
    },1000)
    

  }
}

  return (
    <>
      <div className='app__container'>
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
          <div className="middle-container d-flex center column">
            { data.name ? <CurrentWeather {...data}/>: <div className='empty-placeholder'></div>}
            {loading ? <div className='on-top loading d-flex center'><BarLoader /></div> :null}
          </div>
          <div className="bottom-container">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
