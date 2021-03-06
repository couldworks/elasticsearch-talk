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

export const GetNews = () => {
    return {
        type: C.GET_NEWS,
        payload: ""
    }
}

export const SetLoading = (loading=false) => {
    return {
        type: C.SET_LOADING,
        payload: loading
    }
}

export const FetchAllNews = () => dispatch =>{

    fetch("http://localhost:63979/api/wiki")
		.then(response => response.json())
		.then(news => {
		    news.map(value => dispatch(AddNews(value)));
		})
		.catch(error => {
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

export const FetchNews = (id=0) => dispatch =>{
    let searchUrl = "http://localhost:63979/api/wiki/{id}/"
        .replace("{id}", id)

    fetch(searchUrl)
    .then(response => response.json())
    .then(news => {
        dispatch(EditNews(news));
        return true;
    })
    .catch(error => {
        dispatch(AddError(error.message));
    });
}

export const CleanAllNews = () => {
    return {
        type: C.REMOVE_ALL_NEWS,
        payload: []
    }
}

export const Search = (query="", from=0, take=20) => dispatch =>{

    let searchUrl = "http://localhost:63979/api/wiki/{query}/{from}/{take}"
        .replace("{query}", query)
        .replace("{from}", from)
        .replace("{take}", take)
    
    dispatch(SetLoading(true));

    fetch(searchUrl)
        .then(response => response.json())
        .then(news => {

            news.Data.map(value => dispatch(AddNews(value)));
            dispatch(AddDidyoumean(news.Suggestions));
            dispatch(SetTotal(news.Total));
            
		    return true;
		})
        .then(end => {
            dispatch(SetLoading(false));
            
        })
		.catch(error => {
		    dispatch(AddError(error.message));
		});

}

export const FetchTermVector = (id) => dispatch => {
    let searchUrl = "http://localhost:63979/api/wiki/terms/{id}"
        .replace("{id}", id)

    fetch(searchUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            dispatch(SetTermVector(response));
        })
		.catch(error => {
		    dispatch(AddError(error.message));
		});
}

export const SetTermVector = (terms) => {
    return {
        type: C.SET_TERM_VECTOR,
        payload: terms
    }
}

export const GetTermVector = () => {
    return {
        type: C.GET_TERM_VECTOR,
        payload: null
    }
}

export const QueryFetched = (fetchQuery) => {
    return {
        type: C.QUERY_FETCHED,
        payload: fetchQuery
    }
}

export const FetchQuery = (query) => {
    return {
        type: C.CHANGE_SEARCH,
        payload: query
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
		.catch(error => {
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

export const SetTotal = (total = 0) => {
    return {
        type: C.TOTAL_NEWS,
        payload: total
    }
}

