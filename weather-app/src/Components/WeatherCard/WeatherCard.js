import React from 'react'
import "./WeatherCard.css"
import Day from "../Icons/day.svg"
import Night from '../Icons/night.svg'

function WeatherCard({date,day}) {
  return (
    <>
      <div className="forecast-container d-flex center column">
        <h3>{date.replace("2022-","")}</h3>
        <img src={day.condition.icon} alt={day.condition.text} />
        <p className='text-highligh d-flex center row'><img src={Day} alt="" className='icon forecast-icon'/> {day.maxtemp_c.toFixed()}°C</p>
        <p className='text-highligh d-flex center row'><img src={Night} alt="" className='icon forecast-icon'/> {day.mintemp_c.toFixed()}°C</p>
      </div>
      <div className="border-card"></div>
    </>
  )
}

export default WeatherCard