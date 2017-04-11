import C from "../constants";

export const ActualPage = (state=1, action) => {

	if(action.type === C.SET_ACTUALPAGE){
		return parseInt(action.payload);
	}else{
		return state
	}

}



