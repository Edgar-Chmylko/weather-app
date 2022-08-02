import React from 'react'
import "./CurrentWeather.css"
import Temperature from '../Icons/Temperature.svg'
import Humidity from '../Icons/Raindrops.svg'
import Wind from '../Icons/Wind.svg'

function CurrentWeather({location,current}) {
  return (
    <>
        <div className="card-container d-flex center column">
            <div className="city-name">
              <h1>{location.name}</h1>
              <h5>{location.localtime.replace("2022-","")}</h5>
            </div>
            <img src={current.condition.icon} alt={current.condition.text} className="weather-icon"/>
            <div className="current-weather d-flex center">
              <p className='weather-data'><img src={Temperature} alt="" className='icon' />  {current.temp_c.toFixed()}°C</p>
              <div className="border"></div>
              <p className='weather-data'>Feels like  {current.feelslike_c.toFixed()}°C</p>
              <div className="border"></div>
              <p className='weather-data'><img src={Humidity} alt="" className='icon'/> {current.humidity} %</p>
              <div className="border"></div>
              <p className='weather-data'><img src={Wind} alt="" className='icon'/> {current.wind_kph} km/h</p>
            </div>
        </div>
    </>
  )
}

export default CurrentWeather