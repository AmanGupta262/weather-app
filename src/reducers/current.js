import {
  CURRENT_START,
  CURRENT_SUCCESS,
  CURRENT_FAILED,
  CURRENT_UPDATE,
} from "../actions/actionTypes";

const initialWeatherState = {
  city: "",
  weather: "",
  weather_desc: "",
  feels_like: "",
  temp: "",
  temp_min: "",
  temp_max: "",
  pressure: "",
  wind_speed: "",
  clouds: "",
  sunrise: "",
  sunset: "",
  date: Date.now(),
  time: "",
  icon: "",
  inProgress: false,
  error: "",
};

export default function currentWeather(state = initialWeatherState, actions) {
  switch (actions.type) {
    case CURRENT_START:
      return {
        ...state,
        inProgress: true,
      };
    case CURRENT_SUCCESS:
      return {
        ...state,
        inProgress: false,
        icon: actions.icon,
        date: actions.date,
        time: actions.time,
        city: actions.city,
        humidity: actions.humidity,
        weather: actions.weather,
        weather_desc: actions.weather_desc,
        temp: actions.temp,
        temp_min: actions.temp_min,
        temp_max: actions.temp_max,
        pressure: actions.pressure,
        wind_speed: actions.wind_speed,
        clouds: actions.clouds,
        sunrise: actions.sunrise,
        sunset: actions.sunset,
        feels_like: actions.feels_like,
      };
    case CURRENT_FAILED:
      return {
        ...state,
        inProgress: false,
        error: actions.error,
      };
    case CURRENT_UPDATE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
