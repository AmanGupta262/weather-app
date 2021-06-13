import axios from "axios";
import moment from "moment";
import {
  SEVEN_DAYS_START,
  SEVEN_DAYS_SUCCESS,
  SEVEN_DAYS_FAILED,
  SEVEN_DAYS_UPDATE
} from "./actionTypes";
import { APIUrls } from "../helpers/urls";

const API_KEY = process.env.REACT_APP_API_KEY;

export function startFetching() {
  return {
    type: SEVEN_DAYS_START,
  };
}
export function fetchSuccess(data) {
  return {
    type: SEVEN_DAYS_SUCCESS,
    data,
  };
}
export function fetchFailed(error) {
  return {
    type: SEVEN_DAYS_FAILED,
    error,
  };
}
export function fetchUpdate() {
  return {
    type: SEVEN_DAYS_UPDATE,
  };
}


function returnTime(time) {
  return moment.unix(time).format("hh : mm A");
}

export function fetchWeather(update) {
  return (dispatch) => {
      if(update){
          dispatch(fetchUpdate());
      }
    dispatch(startFetching());
    const params = {
      lat: "12.9762",
      lon: "77.6033",
      units: "metric",
      exclude: "minutely,hourly,current,alerts",
      appid: API_KEY,
    };
    const config = {
      method: "get",
      url: APIUrls.sevenDays(),
      params: params,
    };

    axios(config)
      .then((response) => response.data)
      .then((data) => {
        const weatherData = [];
        data.daily.map((day) => {
          const dayWeather = {
            date: moment.unix(day.dt).format("dddd"),
            temp: day.temp.day,
            temp_min: day.temp.min,
            temp_max: day.temp.max,
            sunrise: returnTime(day.sunrise),
            sunset: returnTime(day.sunset),
            feels_like: day.feels_like.day,
            pressure: day.pressure,
            humidity: day.humidity,
            wind_speed: day.wind_speed,
            weather: day.weather[0].main,
            weather_desc: day.weather[0].description,
            icon: day.weather[0].icon,
            id: day.weather[0].id,
          };
          weatherData.push(dayWeather);
          return "";
        });
        dispatch(fetchSuccess(weatherData));
        return;
      })
      .catch(function (error) {
        console.log(error);
        const errorMsg = error.response.data.message;
        dispatch(fetchFailed(errorMsg));
      });
  };
}
