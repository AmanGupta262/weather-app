import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

function Navbar(props) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.flexGrow}>
            <Link className={classes.linkStyle} to="/">
              Weather App
            </Link>
          </Typography>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/">
              Current Weather
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/seven/days">
              7 Days Weather
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
