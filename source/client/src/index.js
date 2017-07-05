import storeFactory from "./store";

import { GetNews, AddSuggestionsBulk, FetchAllNews } from "./actions";

import initialState from "./initialState";
import React from "react";
import { render } from "react-dom";
import {App} from "./components/app.js";
import {Provider} from "react-redux";
import {Router} from "react-router";
import { BrowserRouter, HashRouter,  Switch,  Route,  Link} from 'react-router-dom';


let store = storeFactory();

//store.dispatch(FetchAllNews());

window.store = store;

const routes = (
	<Provider store={store}>
	   <BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>	
	   </BrowserRouter>
	</Provider> 
);


render(routes, document.getElementById('react-container'));
