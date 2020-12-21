import React,{useState} from 'react';
import {fetchWeather} from "./api/fetchWeather";
import './App.css';

const App=()=>{
    const [query,setQuery]=useState('');
    const [weather,setWeather]=useState({});

    const search=async(e)=>{
        if(e.key==='Enter')
        {
            const data=await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    }

    return(
        <div className="main-container">
            <input 
                size='40'
                type="text"
                className="search"
                placeholder="Enter City..."
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                onKeyPress={search}
            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {weather.main.temp}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <p><strong>Feels Like :</strong> {weather.main.feels_like}<sup>&deg;C</sup></p>
                        <p><strong>Humidity :</strong> {weather.main.humidity}%</p>
                        <p><strong>Wind : </strong>{weather.wind.speed} km/hr, at {weather.wind.deg}&deg;</p>
                    </div>
                       <div className="source">
                        <p> source: openweathermap.org</p>
                        </div>
                </div>
            )}
        </div>
        
    );
}

export default App;