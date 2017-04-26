import C from "../constants";
import appReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

//const consoleMessages = function (store) {
	//return function (next) {
	//	return function(action){

	//	}
	//}
//}

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

const logger = store => next => action => {
  
  console.log('Dispatching', action);
  let result = next(action);
  console.log('Next state', store.getState());
  return result;
}

export default (initialState={}) => {
	return applyMiddleware(thunk, logger, consoleMessages)(createStore)(appReducer, initialState);
}

