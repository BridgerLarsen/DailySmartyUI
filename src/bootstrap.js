import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reducers from "./reducers";
import thunk from 'redux-thunk';

import App from "./components/app";
import Results from './components/results';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/results' component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
