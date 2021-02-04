import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import About from "./core/About";
import ScheduleForm from "./core/ScheduleForm";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/schedule" exact component={ScheduleForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
