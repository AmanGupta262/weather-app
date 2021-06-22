import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_UPDATE,
} from "../actions/actionTypes";

const initialWeatherState = {
  days: [],
  inProgress: false,
  error: "",
};

export default function sevenDaysWeather(state = initialWeatherState, actions) {
  switch (actions.type) {
    case FETCH_START:
      return {
        ...state,
        inProgress: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        inProgress: false,
        days: [...actions.data],
      };
    case FETCH_FAILED:
      return {
        ...state,
        inProgress: false,
        error: actions.error,
      };
    case FETCH_UPDATE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
