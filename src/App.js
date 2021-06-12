import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core/";
import { Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { CurrentWeather, Navbar } from "./components";

const useStyles = makeStyles({
  contentStyle: {
    padding: "1rem",
    paddingTop: "0",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <CssBaseline />
        <Container  className={classes.contentStyle}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={CurrentWeather} />
            <Route exact path="/seven/days" component={Navbar} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
