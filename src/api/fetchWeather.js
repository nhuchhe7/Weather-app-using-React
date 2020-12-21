import axios from "axios";
const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='59d5d5029bfa99d2ddacf645c032d5d0';

export const fetchWeather=async(query)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });
    return data;
}