import C from "./constants";

export function AddPageSize(page=1){
	
	return {
		type: C.SET_PAGESIZE,
		payload: page
	}
}

export function AddNewsBulk(news=null){
	return {
		type: C.ADD_NEWS,
		payload: news
	}
}

export const AddDidyoumean = (phrase=null) =>{

	return {
		type: C.ADD_DIDYOUMEAN,
		payload: phrase
	}
}