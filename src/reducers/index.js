import { combineReducers } from "redux";
import currentWeather from "./current";
import sevenDaysWeather from "./sevenDays";

const rootReducer = combineReducers({ currentWeather, sevenDaysWeather });

export default rootReducer;
