import React  from "react";
import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherIcon(props){
     const codeMapping= {
        "clear-sky-night": "CLEAR_NIGHT",
        "overcast clouds": "CLOUDY", 
        "clear-sky-day": "CLEAR_DAY",
        "few-clouds-day": "PARTLY_CLOUDY_DAY",
        "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day": "CLOUDY",
        "scattered-clouds-night":"PARTLY_CLOUDY_NIGHT",
        "broken-clouds-day": "CLOUDY",
        "broken-clouds-night": "CLOUDY",
        "shower-rain-day": "RAIN",
        "shower-rain-night": "RAIN",
        "rain-day": "RAIN",
        "rain-night": "RAIN",
        "thunderstorm-day": "RAIN",
        "thunderstorm-night": "RAIN",
        "snow-day": "SNOW",
        "snow-night": "SNOW",
        "mist-day": "FOG",
        "mist-night": "FOG",




    }
    return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#FFBF0A" 
      size={60}
      animate={true}
    />
  );
}