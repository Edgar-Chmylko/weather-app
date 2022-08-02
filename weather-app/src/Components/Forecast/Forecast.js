import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import "./Forecast.css"

function Forecast({forecast}) {
    const tomorrow = forecast.forecastday[1];
    const dayAfterTomorrow = forecast.forecastday[2];
  return (
    <>
        <WeatherCard {...tomorrow} />
        <WeatherCard {...dayAfterTomorrow} />
    </>
  )
}

export default Forecast