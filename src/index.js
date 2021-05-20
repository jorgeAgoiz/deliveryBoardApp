import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { signStateReducer } from "./reducers/index";

import App from "./components/App/App";

const reducers = combineReducers({
  auth: signStateReducer,
});

const store = createStore(reducers, composeWithDevTools());

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
