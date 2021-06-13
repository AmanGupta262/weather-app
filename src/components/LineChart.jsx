import React from "react";
import { CanvasJSChart } from 'canvasjs-react-charts'
import { useSelector } from "react-redux";

function LineChart(props) {
  const { days } = useSelector((state) => state.sevenDaysWeather);

  const minTemp = [];
  const maxTemp = [];
  days.map((day) => {
    minTemp.push({ y: day.temp_min, label: day.date.substr(0,3) });
    maxTemp.push({ y: day.temp_max, label: day.date.substr(0,3) });
    return "";
  });

  const options = {
    animationEnabled: true,
    theme: "dark1",
    backgroundColor: "transparent",
    title: {
      text: "Temperature",
    },
    axisY: {
      title: "Min-Max Temperature",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "min",
        showInLegend: true,
        dataPoints: minTemp,
      },
      {
        type: "spline",
        name: "max",
        showInLegend: true,
        dataPoints: maxTemp,
      },
    ],
  };
  
  return (
    <>
        <CanvasJSChart options = {options} />
    </>
  );
}

export default LineChart;
