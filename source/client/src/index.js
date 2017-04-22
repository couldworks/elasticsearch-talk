import storeFactory from "./store";
import { AllNews } from "./actions";
import initialState from "./initialState";
import React from "react";
import { render } from "react-dom";
import App from "./components/app.js"

const store = storeFactory(initialState);
//store.dispatch(AllNews());

render(<App />, document.getElementById("react-container"));

// 1nd option
// class MyComponent extends React.Component {
// 		render(){
// 					return <div>
// 						<h1>Test</h1>
// 						<p>One component</p>
// 					</div>
// 		}
// }
// 2nd option
// class MyComponent extends React.Component{}
// MyComponent.prototype.render = function(){
// 	return (<div>
// 		<h1>Test</h1>
// 		<p>One component</p>
// 	</div>);
// }

// 3nd option
// function MyComponent(){}
// MyComponent.prototype.render = function(){
// 	return (<div>
// 		<h1>Test</h1>
// 		<p>One component</p>
// 	</div>);
// }
