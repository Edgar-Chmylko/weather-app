import React from 'react'
import "./WeatherCard.css"

function WeatherCard({date,day}) {
  return (
    <>
      <div className="forecast-container d-flex center column">
        <h3>{date.replace("2022-","")}</h3>
        <img src={day.condition.icon} alt={day.condition.text} />
        <p className='text-highligh'>Day : {day.maxtemp_c.toFixed()}°C</p>
        <p className='text-highligh'>Night : {day.mintemp_c.toFixed()}°C</p>
      </div>
    </>
  )
}

export default WeatherCard