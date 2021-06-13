import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./currentWeather.css";

const useStyles = makeStyles({
  dFlex: {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "column",
    padding: "1rem",
    color: "#fcfcfd",
  },
  dflex: {
    display: "flex",
    justifyContent: "center",
    marginTop: ".5rem",
  },
  marginRight: {
    marginRight: " 1rem",
  },
  marginBottom: {
    marginBottom: " 1rem",
  },
});

function CurrentWeather(props) {
  const classes = useStyles();
  const { currentWeather } = useSelector((state) => state);
  const icon = `http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`;
  console.log(currentWeather);

  return (
    <>
      <div className={classes.dFlex}>
        {currentWeather.inProgress ? (
          <Typography variant="h4" align="center">
            Loading ...
          </Typography>
        ) : (
          <div>
            <Typography variant="h4" align="center">
              {currentWeather.city}
            </Typography>
            <div className={classes.dflex}>
              <Typography
                align="center"
                className={classes.marginRight}
                variant="subtitle2"
              >
                {currentWeather.date},
              </Typography>
              <Typography align="center" variant="subtitle2">
                {currentWeather.time}
              </Typography>
            </div>
            <div className="weather d-flex">
              <div className="temperature d-flex">
                <div className="weather-type d-flex">
                  <img src={icon} alt="weather" className="weather-icon" />
                  {currentWeather.weather}
                  <span className="weather-desc">{currentWeather.weather_desc}</span>
                </div>
                <div className="curr-temperature">
                  {currentWeather.temp}&deg;
                </div>
              </div>
              <div className="max-min-temp">
                <div className="min-temp">{currentWeather.temp_min}&deg; C</div>
                <div className="max-temp">{currentWeather.temp_max}&deg; C</div>
              </div>
            </div>
            <div className="details-container d-flex">
              <Typography variant="h6" className="details-title">
                Details
              </Typography>
              <div className="details d-flex">
                <div className="detail d-flex">
                  <img
                    className="detail-icon"
                    src={`${process.env.PUBLIC_URL}/icons/thermometer.svg`}
                    alt=""
                  />

                  <div className="detail-title">Feels Like</div>
                  <div className="detail-data">
                    {currentWeather.feels_like} &deg;
                  </div>
                </div>
                <div className="detail d-flex">
                  <img
                    className="detail-icon"
                    src={`${process.env.PUBLIC_URL}/icons/wind.svg`}
                    alt=""
                  />

                  <div className="detail-title">Wind</div>
                  <div className="detail-data">
                    {currentWeather.wind_speed} Km/h
                  </div>
                </div>
                <div className="detail d-flex">
                  <img
                    className="detail-icon"
                    src={`${process.env.PUBLIC_URL}/icons/drops.svg`}
                    alt=""
                  />

                  <div className="detail-title">Humidity</div>
                  <div className="detail-data">{currentWeather.humidity} %</div>
                </div>
                <div className="detail d-flex">
                  <img
                    className="detail-icon"
                    src={`${process.env.PUBLIC_URL}/icons/pressure.svg`}
                    alt=""
                  />

                  <div className="detail-title">Pressure</div>
                  <div className="detail-data">
                    {currentWeather.pressure} mb
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CurrentWeather;
