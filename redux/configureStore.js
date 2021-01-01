import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import ammos from "./ducks/ammos";
import user from "./ducks/user";
import cart from "./ducks/cart";
import weapons from "./ducks/weapons";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  ammos,
  user,
  cart,
  weapons,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
