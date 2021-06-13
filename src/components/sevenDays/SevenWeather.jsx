import React from "react";
import { useSelector } from "react-redux";
import { LineChart } from "../";
import {SingleDay} from "../";
import './sevenWeather.css';

function SevenWeather(props) {
    const { days } = useSelector((state) => state.sevenDaysWeather);

  return (
    <>
      <div className="d-flex single-container">
        {days.map((day) => {
          return <SingleDay day={day} key={day.temp} />;
        })}
      </div>
      <LineChart />
    </>
  );
}

export default SevenWeather;
