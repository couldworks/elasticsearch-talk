import C from "../constants";
import { combineReducers } from "redux";
import { routeReducer } from "react-router-redux" ;

export const ActualPage = (state=1, action) => 
	(action.type === C.SET_ACTUALPAGE) ?
		parseInt(action.payload) :
		state


export const NextToken = (state=null, action) => 
	(action.type === C.SET_NEXTTOKEN) ?
		action.payload :
		state

export const PreviusToken = (state=null, action) => 
	(action.type === C.SET_PREVIUSTOKEN) ?
		action.payload :
		state

export const Errors = (state=[], action) => {

	switch(action.type){
		case C.ADD_ERROR:
			return [
				...state,
				action.payload
			];
		case C.CLEAR_ERROR:
			return state.filter((message, i) => i !== action.payload);
		default:
			return state;
	}
}

export const News = (state=null, action) =>
	(action.type === C.ADD_NEWS) ?
		action.payload :
		state

export const AllNews = (state=[], action) =>{
	
	let newArray = [];
	
	switch(action.type){
		case C.ADD_NEWS :
			
			const hasNewsAlready = state.some(news => news.title === action.payload.title && news.version === action.payload.version);

			return (hasNewsAlready) ? 
				state : 
				[
					...state,
					News(null, action)
				];
		case C.ADD_NEWS_BULK:
			
			return [
					...state,
					...action.payload
				];
		case C.REMOVE_NEWS :
			return state.filter(news => news.title !== action.payload);
		case C.GET_NEWS :
			console.log("hihi");
			return state;
		default:
			return state;
	}
}

export const AllSuggestions = (state=[], action) => {

	switch(action.type){

		case C.CLEAR_SUGGESTIONS : 
			return [];

		case C.CHANGE_SUGGESTIONS :
			return action.payload;

		case C.ADD_SUGGESTIONS :
			return [
				...state,
				...action.payload
			]
		default :
			return state;
	}
}

export const Didyoumean = (state=[], action) => {
	
	switch(action.type){
		case C.ADD_DIDYOUMEAN :
			return [
				...state,
				...action.payload
			];
		case C.CLEAR_DIDYOUMEAN :
			return [];
		default :
			return state;
	}
}

export const Search = (state="", action) => {

	switch(action.type)
	{
		case C.CHANGE_SEARCH :
			return action.payload;
		case C.CLEAR_SEARCH :
			return "";
		default:
			return state;
	}
}

export const EditNews = (state=null, action) => {

	switch(action.type) {
		case C.EDIT_NEWS :
			return action.payload;
		case C.CANCEL_EDIT :
			return null;
		default :
			return state;
	}
}

export const PageSize = (state=1, action) => 
	(action.type === C.SET_PAGESIZE) ?
		parseInt(action.payload) :
		state

export const Loading = (state=false, action) => 
    (action.type === C.SET_LOADING) ?
		action.payload :
		state

export default combineReducers({
	Didyoumean,
	Search,
	EditNews,
	PageSize,
	NextToken,
	PreviusToken,
	ActualPage,
	AllSuggestions,
	AllNews,
    Errors,
    Loading
});

