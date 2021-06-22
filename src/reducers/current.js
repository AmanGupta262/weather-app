import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_UPDATE,
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

export default function currentWeather(state = initialWeatherState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        inProgress: true,
      };
    case FETCH_SUCCESS:
      console.log(action)
      return {
        ...state,
        inProgress: false,
        ...action.data,
      };
    case FETCH_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case FETCH_UPDATE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
