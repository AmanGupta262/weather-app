import axios from "axios";
import moment from "moment";
import {
  CURRENT_START,
  CURRENT_SUCCESS,
  CURRENT_FAILED,
  CURRENT_UPDATE,
} from "./actionTypes";
import { APIUrls } from "../helpers/urls";

const API_KEY = process.env.REACT_APP_API_KEY;

export function startFetching() {
  return {
    type: CURRENT_START,
  };
}
export function fetchSuccess(data) {
  return {
    type: CURRENT_SUCCESS,
    ...data,
  };
}
export function fetchFailed(error) {
  return {
    type: CURRENT_FAILED,
    error,
  };
}
export function updateWeather() {
  return {
    type: CURRENT_UPDATE,
  };
}

function returnTime(time) {
  return moment.unix(time).format("hh : mm A");
}

export function fetchWeather(search="Bengaluru", update="") {
  return (dispatch) => {
    dispatch(startFetching());
    const params = {
      q: search,
      units: "metric",
      appid: API_KEY,
    };
    const config = {
      method: "get",
      url: APIUrls.current(),
      params: params,
    };

    axios(config)
      .then((response) => response.data)
      .then((data) => {
        if (data.cod === 200) {
          if (update) dispatch(updateWeather());
          const weatherData = {
            city: data.name,
            clouds: data.clouds.all,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            feels_like: data.main.feels_like,
            sunrise: returnTime(data.sys.sunrise),
            sunset: returnTime(data.sys.sunset),
            wind_speed: data.wind.speed,
            weather: data.weather[0].main,
            weather_desc: data.weather[0].description,
            icon: data.weather[0].icon,
            date: moment.unix(data.dt).format("dddd"),
            time: moment.unix(data.dt).format("hh : mm A"),
          };
          dispatch(fetchSuccess(weatherData));
          return;
        }
      })
      .catch(function (error) {
        console.log(error);
        const errorMsg = error.response.data.message;
        dispatch(fetchFailed(errorMsg));
      });
  };
}
