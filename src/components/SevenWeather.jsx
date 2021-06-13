import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../actions/sevenDays";

function SevenWeather(props) {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchWeather());
  }, [dispatch]);
  return (
    <>
      <div></div>
    </>
  );
}

export default SevenWeather;
