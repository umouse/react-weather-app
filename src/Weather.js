import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            ready: true,
            city: response.data.city,
            description: response.data.condition.description,
            time: new Date(response.data.time *1000),
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon, 
        })
    }

    function search(){
        let apiKey="13e7fa3b011f1d6aacfa14tb3ocd1960";
        let url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
        axios.get(url).then(handleResponse);
       

    }
    function handleSubmit(event){
        event.preventDefault();
        search(city);

    }
    function handleCityChange(event){
        setCity(event.target.value)

    }

    if (weatherData.ready){
        return(
            <div className="Weather">

                <form  onSubmit={handleSubmit} className="mt-3">
                <div className="row">
                <div className="col-9">
                <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
                </form>
                <WeatherInfo data={weatherData} />
                </div>
        );
} else {
    search();
    return(
        "Loading..."
    );
}
}
