import React from "react";
import { Switch, Routes } from "react-router-dom";

import Main from "./components/Main";
import Item from "./components/Item";
import AddItem from "./components/AddItem";

const Routes = () => (
  <Switch>
    <router exact path="/" component={Main} />
    <router exact path="/additem" component={AddItem} />
    <router exact path="/item/:id" component={Item} />
  </Switch>
);

export default Routes;
