import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createRouterMiddleware } from "@lagunovsky/redux-react-router";

import { browserHistory } from "./history";
import rootReducer from "./reducers";
import rootSaga from "./ducks/Tips/saga";

export default function configureStore(initialState) {
  const routerMiddleware = createRouterMiddleware(browserHistory);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  return store;
}
