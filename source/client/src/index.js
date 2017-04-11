import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";
import { createStore } from "redux";

const store = createStore(appReducer, initialState);

store.subscribe(() => console.log(store.getState()));

console.log("initial state", store.getState());

store.dispatch({
	type: C.SET_PAGESIZE,
	payload: 5
});

console.log("next state", store.getState());