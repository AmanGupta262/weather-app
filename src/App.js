import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "./actions/current";
import { fetchWeather as sevenDays } from "./actions/sevenDays";
import { CssBaseline } from "@material-ui/core/";
import { Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { CurrentWeather, Navbar, SevenWeather } from "./components";

const useStyles = makeStyles({
  contentStyle: {
    padding: "0",
    background:
      "linear-gradient(180deg, rgba(9,29,77,1) 0%, rgba(150,97,161,1) 100%)",
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sevenDays());
    dispatch(fetchWeather());
  }, [dispatch]);
  return (
    <>
      <Router>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.contentStyle}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={CurrentWeather} />
            <Route exact path="/seven/days" component={SevenWeather} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
