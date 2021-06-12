import { CURRENT_START, CURRENT_SUCCESS, CURRENT_FAILED } from "./actionTypes";

const initialWeatherState = {
    city: "",
    weather: "",
    weather_desc: "",
    temp="",
    temp_min:"",
    temp_max:"",
    pressure:"",
    wind_speed:"",
    clouds: "",
    sunrise: "",
    susnset: "",
    inProgress: false,
    error="",
}

export default function currentWeather(state=initialWeatherState, actions){
    switch(actions.type){
        case CURRENT_START:
            return state;
        case CURRENT_SUCCESS:
            return state;
        case CURRENT_Failed:
            return state;
        default:
            return state;
    }
}