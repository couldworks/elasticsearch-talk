import C from "./constants";
import { ActualPage } from "./store/reducers";

const state = 1;

const action = {
	type: C.SET_ACTUALPAGE,
	payload: 2
};

const nextState = ActualPage(state, action);

console.log(`
	initial page: ${state}
	action: ${JSON.stringify(action)}
	new page: ${nextState}
`);

