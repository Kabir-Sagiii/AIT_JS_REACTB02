import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import dataReducer from "../reducers/dataReducer";
import productsReducer from "../reducers/productsReducer";

let combinedReducer = combineReducers({
  dataReducer,
  productsReducer,
});

let myStore = legacy_createStore(combinedReducer, applyMiddleware(logger));

// myStore.subscribe(() => {
//   console.log(myStore.getState());
// });

export default myStore;
