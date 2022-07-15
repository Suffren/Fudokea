import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { browserHistory } from './history';

import "./index.css";
import App from "./App";
import configureStore from "./configureStore";

const routerSelector = (state) => state.router;
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter
        history={browserHistory}
        store={store}
        selector={routerSelector}
        children={
        <App/>
        }/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
