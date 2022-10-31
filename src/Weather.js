import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            ready: true,
            city: response.data.city,
            description: response.data.condition.description,
            time: "Mon 9:00",
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        })
    }
    
    if (weatherData.ready){
        return(
            <div className="Weather">
                <form className="mt-3">
                <div className="row">
                    <div className="col-9">
                <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.time}</li>
                    <li className="text-capitalize">{(weatherData.description)}</li>
                </ul>
                <div className="row">
                    <div className="col-6"> 
                    <img src={weatherData.icon} alt={weatherData.description}/>
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                        <div className="col-6">
                            <ul>
                                <li>Presipation: 15%</li>
                                <li>Humidity: {weatherData.humidity} %</li>
                                <li>Wind: {weatherData.wind} km/h</li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
} else {
    let apiKey="13e7fa3b011f1d6aacfa14tb3ocd1960";
    let city = props.defaultCity;
    let url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(url).then(handleResponse);
    return(
        "Loading..."
    )
}
}
