import storeFactory from "./store";
import { GetNews, AddSuggestionsBulk } from "./actions";
import initialState from "./initialState";
import React from "react";
import { render } from "react-dom";
import {App} from "./components/app.js"
import {Provider} from "react-redux";
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

let store = storeFactory(initialState);

window.store = store;

const routes = (
	<Provider store={store}>
	   <HashRouter>
	      <div>
	        <Route exact path="/" component={App} />
	      </div>
	   </HashRouter>
	</Provider> 
)

render(routes, document.getElementById('react-container'));

//store.dispatch(GetNews());

// render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// document.getElementById("react-container"));

// render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>, document.getElementById("react-container")
// )
