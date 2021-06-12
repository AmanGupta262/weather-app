import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core/";
import { Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { CurrentWeather, Navbar } from "./components";

const useStyles = makeStyles({
  contentStyle: {
    padding: "0",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80)",
    objectFit: "cover",
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
