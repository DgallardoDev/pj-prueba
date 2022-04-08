import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";
import rootSaga from "../sagas";
import { cartReducer, catalogReducer, loadingReducer, messageReducer, showMiniCartReducer } from "../reducers";


const composeEnhancers = // eslint-disable-next-line
  (typeof window !== "undefinded" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  showMiniCart: showMiniCartReducer,
  loading:loadingReducer,
  message:messageReducer
});
const sagaMiddleware = reduxSaga();
export const store = {
  ...createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware))),
  runSaga: sagaMiddleware.run(rootSaga),
};
