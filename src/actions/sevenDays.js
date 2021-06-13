import axios from "axios";
import moment from "moment";
import {
  SEVEN_DAYS_START,
  SEVEN_DAYS_SUCCESS,
  SEVEN_DAYS_FAILED,
  SEVEN_DAYS_UPDATE,
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
    ...data,
  };
}
export function fetchFailed(error) {
  return {
    type: SEVEN_DAYS_FAILED,
    error,
  };
}
export function updateWeather() {
  return {
    type: SEVEN_DAYS_UPDATE,
  };
}

function returnTime(time) {
  return moment.unix(time).format("hh : mm A");
}