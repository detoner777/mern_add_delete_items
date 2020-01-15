import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import Item from "./components/Item";
import AddItem from "./components/AddItem";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/additem" component={AddItem} />
    <Route exact path="/item/:id" component={Item} />
  </Switch>
);

export default Routes;
