import React from 'react'
import "./CurrentWeather.css"

function CurrentWeather({location,current}) {
  return (
    <>
        <div className="card-container d-flex center column">
            <div className="city-name">
              <h1>{location.name}</h1>
            </div>
            <div className="current-weather">
              <img src={current.condition.icon} alt={current.condition.text} />
              <p className='weather-data'>Current temperature  {current.temp_c}°C</p>
              <p className='weather-data'>Feels like  {current.feelslike_c}°C</p>
              <p className='weather-data'>Humidity  {current.humidity} %</p>
              <p className='weather-data'>Wind speed  {current.wind_kph} km/h</p>
              <p className='weather-data'>Wind direction  {current.wind_dir}</p>
            </div>
        </div>
    </>
  )
}

export default CurrentWeather