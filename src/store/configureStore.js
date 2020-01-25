import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { rootReducer } from "../reducers/rootReducer";

const createHistory = require("history").createBrowserHistory;

export const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(...middleware)),
);
