import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded]=useState(false); 
    let [forecast, setForecast]=useState(null);

    useEffect(() => {
    setLoaded(false);
    }, [props.city]);


    function handleResponse(response){
        setLoaded(true);
        setForecast(response.data.daily);
}

if (loaded){
    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 5) {
                        return(
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    } else{
                      return null;  
                    }
                })}
            </div>
        </div>
    );
    
} else {
    let apiKey = "13e7fa3b011f1d6aacfa14tb3ocd1960"
    let url =`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`
    axios.get(url).then(handleResponse)
    return null;
    }
}