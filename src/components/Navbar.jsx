import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { Refresh, Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../actions/current";
import { useState } from "react";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },

  navbar: {
    background: "transparent",
  },
});

function Navbar(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const handleRefresh = () => {
    dispatch(fetchWeather("update"));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(search));
  };
  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.flexGrow}>
            <Link className={classes.linkStyle} to="/">
              Weather
            </Link>
          </Typography>
          <form>
            <input
              placeholder="Search city"
              className="search-input"
              id="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" color="inherit" onClick={handleSearch}>
              <Search />
            </Button>
          </form>
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
