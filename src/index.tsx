import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { ReduxRouter } from "@lagunovsky/redux-react-router";
import { browserHistory } from "./appHistory";

import "./index.css";
import {BaseApp} from "./App";
import {configureStore} from "./configureStore";

const routerSelector = (state) => state.router;
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter
        history={browserHistory}
        store={store}
        selector={routerSelector}
        children={<BaseApp />}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
