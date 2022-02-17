import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calender from "../Calendar/Calender";
import Events from "../Events/Events";

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/calendar" component={Calender}></Route>
        <Route path="/events" component={Events}></Route>
      </Switch>
    </Router>
  );
}
