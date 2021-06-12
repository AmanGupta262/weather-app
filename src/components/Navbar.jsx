import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../actions/current";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
  icon: {
    height: "24px",
    width: "24px",
  },
  navbar: {
    background: "transparent"
  }

});

function Navbar(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRefresh = () => {
    dispatch(fetchWeather("update"))
  }
  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h4" className={classes.flexGrow}>
            <Link className={classes.linkStyle} to="/">
              Weather 
            </Link>
          </Typography>
          <Button color="inherit" onClick={handleRefresh}>
            <Refresh />
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/">
              Today
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/seven/days">
              7 Days
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
