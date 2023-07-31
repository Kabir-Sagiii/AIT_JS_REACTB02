import { legacy_createStore } from "redux";

import dataReducer from "../reducers/dataReducer";

let myStore = legacy_createStore(dataReducer);

myStore.subscribe(() => {
  console.log(myStore.getState());
});

export default myStore;
