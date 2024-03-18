import React from "react";
import "./Weather.css";

const Weather = ({weather, id}) => {

 
  return (
    <div className="Weather">
      <div className="weatherIn">
        <div className="dec">
          <div className="w_icon"><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} /></div>
          <div className="dec_txt">{weather?.weather[0].description}</div>
        </div>
        <div className="temp">
          {weather?.main.temp}<span>℃</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;

