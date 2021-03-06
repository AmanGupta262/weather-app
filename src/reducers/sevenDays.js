import {
  SEVEN_DAYS_START,
  SEVEN_DAYS_SUCCESS,
  SEVEN_DAYS_FAILED,
  SEVEN_DAYS_UPDATE,
} from "../actions/actionTypes";

const initialWeatherState = {
  days: [],
  inProgress: false,
  error: "",
};

export default function sevenDaysWeather(state = initialWeatherState, actions) {
  switch (actions.type) {
    case SEVEN_DAYS_START:
      return {
        ...state,
        inProgress: true,
      };
    case SEVEN_DAYS_SUCCESS:
      return {
        ...state,
        inProgress: false,
        days: [...actions.data],
      };
    case SEVEN_DAYS_FAILED:
      return {
        ...state,
        inProgress: false,
        error: actions.error,
      };
    case SEVEN_DAYS_UPDATE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
