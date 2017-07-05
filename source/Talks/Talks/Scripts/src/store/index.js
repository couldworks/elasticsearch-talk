import C from "../constants";
import appReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
//require('../styles/styles.scss');
//import style from "../styles/styles.scss";
require("!style-loader!css-loader!sass-loader!../styles/styles.scss");

const consoleMessages = store => next => action => {
	
	let result;

	console.groupCollapsed(`dispatching action => ${action.type}`);
	
	result = next(action);

	let { Didyoumean, Search,	EditNews,	PageSize,	NextToken,	PreviusToken,	ActualPage,	AllSuggestions,	AllNews, Errors } = store.getState();

	console.log(`

		News: ${ AllNews.length }
		Suggestions: ${ AllSuggestions.length }
		Errors: ${ Errors.length }
	`);

	console.groupEnd();

	return result;
}

export default (initialState={}) => {
	return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
}

