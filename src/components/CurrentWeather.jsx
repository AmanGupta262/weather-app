import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../actions/current";
import {
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dFlex: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    padding: "1rem",
  },
  cardStyles: {
    backgroundColor: "#181e2394",
    backdropFilter: "blur(5px)",
    padding: "1rem",
    borderRadius: "20px",
    maxWidth: "400px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 7px 30px -10px rgba(150,170,180,0.5)",
    margin: "1rem",
  },
  margin: {
    marginBottom: " 1rem",
  },
});

function CurrentWeather(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchWeather());
  },[]) 

  return (
    <>
      <div className={classes.dFlex}>
        <Card className={classes.cardStyles}>
          <CardContent>
            <Typography variant="h4" className={classes.margin}>
              Bangalore
            </Typography>
            <Typography variant="h1" className={classes.margin}>
              26 &deg;C
            </Typography>
            <Typography variant="subtitle1">Cloudy</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default CurrentWeather;
