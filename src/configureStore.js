import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './ducks/users/saga'

const initialState = {};
export default function configureStore(initialState) {

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );
  sagaMiddleware.run(rootSaga);

  return store;
}