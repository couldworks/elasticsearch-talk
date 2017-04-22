import storeFactory from "./store";
import { AllNews } from "./actions";
import initialState from "./initialState";
import React from "react";
import { render } from "react-dom"

const store = storeFactory(initialState);
console.log(store.getState());
//store.dispatch(AllNews());

//react-container

var MyComponent = React.createClass({
	render(){
		return <div>
			<h1>Test</h1>
			<p>One component</p>
		</div>
	}
});

render(<MyComponent />, document.getElementById("react-container"));







