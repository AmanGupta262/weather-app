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

export default function currentWeather(state = initialWeatherState, action) {
  switch (action.type) {
    case CURRENT_START:
      return {
        ...state,
        inProgress: true,
      };
    case CURRENT_SUCCESS:
      console.log(action)
      return {
        ...state,
        inProgress: false,
        ...action.data,
      };
    case CURRENT_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case CURRENT_UPDATE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
