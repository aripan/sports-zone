import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  const [headerValues, setHeaderValues] = useState([]);
  const changeHeaderImg = (...arg) => {
    setHeaderValues(arg);
  };

  return (
    <Router>
      <Header headerValues={headerValues}></Header>
      <Switch>
        <Route path="/home">
          <Home changeHeaderImg={changeHeaderImg}></Home>
        </Route>
        {/* <Route path="/allLeagues">
          <AllLeagues></AllLeagues>
        </Route> */}
        <Route path="/allTeams/:idTeam">
          <TeamDetails></TeamDetails>
        </Route>
        <Route exact path="/">
          <Home changeHeaderImg={changeHeaderImg}></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
