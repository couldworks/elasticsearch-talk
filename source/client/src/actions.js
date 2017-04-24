import C from "./constants";
import fetch from "isomorphic-fetch";

export function AddPageSize(page=1){
	
	return {
		type: C.SET_PAGESIZE,
		payload: page
	}
}

export function AddNewsBulk(news=[]){
	return {
		type: C.ADD_NEWS_BULK,
		payload: news
	}
}

export const AllNews = () => dispatch =>{

	fetch("http://localhost:3333/news/")
		.then(response => response.json())
		.then(news => {
			news.hits.map(value => dispatch(AddNews(value._source)));
		})
		.catch(errir => {
			dispatch(AddError(error.message));
		});

}

export function AddNews(news={}){
	return {
		type: C.ADD_NEWS,
		payload: news
	}
}

export const EditNews = (news={}) => {
	return {
		type: C.EDIT_NEWS,
		payload: news
	}
}

export const RemoveNews = (news={}) =>{
	return {
		type: C.REMOVE_NEWS,
		payload: news
	}
}

export const AddDidyoumean = (phrases=[]) =>{

	return {
		type: C.ADD_DIDYOUMEAN,
		payload: phrases
	}
}

export const ClearDidyoumean = () =>{

	return {
		type: C.CLEAR_DIDYOUMEAN,
		payload: null
	}
}

export const Search = (search="") =>{
	return {
		type: C.CHANGE_SEARCH,
		payload: search
	}
}

export const ClearSearch = () => {
	return {
		type: C.CLEAR_SEARCH,
		payload: ""
	}
}

export const AllSuggestions = () => dispatch =>{

	fetch("http://localhost:3333/suggestions/")
		.then(response => response.json())
		.then(suggestions => {
			let bulk = suggestions.map(value => value._source);
			dispatch(AddSuggestionsBulk(bulk));
		})
		.catch(errir => {
			dispatch(AddError(error.message));
		});

}

export const AddSuggestionsBulk = (suggestions=[]) =>{
	return{
		type: C.ADD_SUGGESTIONS,
		payload: suggestions
	}
}

export const ClearSuggestions = () => {
	return {
		type: C.CLEAR_SUGGESTIONS,
		payload: ""
	}
}

export const CancelEdit = (news={}) =>{
	return {
		type: C.CANCEL_EDIT,
		payload: news
	}
} 

export const SetNextToken = (token="") =>{
	return {
		type: C.SET_NEXTTOKEN,
		payload: token
	}
}

export const SetPreviusToken = (token="") =>{
	return {
		type: C.SET_PREVIUSTOKEN,
		payload: token
	}
}

export const SetActualPage = (page=1) =>{
	return {
		type: C.SET_ACTUALPAGE,
		payload: page
	}
}

export const AddError = (error="") =>{
	return {
		type: C.ADD_ERROR,
		payload: error
	}
}

export const ClearError = (index=1) => {
	return {
		type: C.CLEAR_ERROR,
		payload: index
	}
}

