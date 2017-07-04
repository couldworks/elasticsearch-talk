import storeFactory from "./store";
<<<<<<< HEAD
import { GetNews, AddSuggestionsBulk, FetchAllNews } from "./actions";
=======
>>>>>>> fa03bd5d266fbdc7426043be0d5dba821ad9dfb3
import initialState from "./initialState";
import React from "react";
import { render } from "react-dom";
import {App} from "./components/app.js";
import {Provider} from "react-redux";
import {Router} from "react-router";
import { BrowserRouter, HashRouter,  Switch,  Route,  Link} from 'react-router-dom';

let store = storeFactory();

store.dispatch(FetchAllNews());

window.store = store;

/*const routes = (
	<Provider store={store}>
	   <BrowserRouter>
	      <App />
	   </BrowserRouter>
	</Provider> 
);*/



class test extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
		return (<div>hi</div>)
	}
}

const routes = (
	<Provider store={store}>
	   <BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/test" component={test} />
			</Switch>	
	   </BrowserRouter>
	</Provider> 
);


render(routes, document.getElementById('react-container'));
