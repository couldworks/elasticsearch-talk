import storeFactory from "./store";
import { GetNews, AddSuggestionsBulk } from "./actions";
import initialState from "./initialState";
import React from "react";
import { render } from "react-dom";
import {App} from "./components/app.js"
import {Provider} from "react-redux";

let store = storeFactory(initialState);

store.dispatch(GetNews());

render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById("react-container"));

// render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>, document.getElementById("react-container")
// )
