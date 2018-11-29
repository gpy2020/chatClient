import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "../App";
import login from "../../containers/Login";

const wrapper = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/auth" component={login} />
    </Switch>
  );
};

export default wrapper;
