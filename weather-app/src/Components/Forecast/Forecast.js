import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import "./Forecast.css"

function Forecast({forecast}) {
    const one = forecast.forecastday[1];
    const two = forecast.forecastday[2];

  return (
    <>
      <div className="forecast d-flex center row">
        <WeatherCard {...one} />
        <WeatherCard {...two} />
      </div>
    </>
  )
}

export default Forecast