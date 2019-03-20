import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { store } from "./store/configureStore";
import { history } from "./store/configureStore";
import App from "./App";
import NotFound from "./pages/NotFound/NotFound";
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root"),
);
