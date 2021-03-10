import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AllLeagues from "./components/AllLeagues/AllLeagues";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        {/* <Route path="/allLeagues">
          <AllLeagues></AllLeagues>
        </Route> */}
        <Route path="/allLeagues/:leagueId">
          <LeagueDetails></LeagueDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
