import React from 'react'
import "./CurrentWeather.css"

function CurrentWeather({name,main,wind,weather}) {
  return (
    <>
        <div className="card-container d-flex center column">
            <div className="city-name">
              <h1>{name}</h1>
            </div>
            <div className="current-weather">
              <p className='weather-descrition weather-data'>{weather[0].description.toUpperCase()}</p>
              <p className='weather-data'>Current temperature : {main.temp.toFixed()} C</p>
              <p className='weather-data'>Feels like : {main.feels_like.toFixed()} C</p>
              <p className='weather-data'>Humidity : {main.humidity}%</p>
              <p className='weather-data'>Wind speed : {wind.speed} m/s</p>
            </div>
        </div>
    </>
  )
}

export default CurrentWeather