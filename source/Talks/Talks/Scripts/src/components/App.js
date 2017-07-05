import React from "react";
import {Main} from "./main.js";
import {Header} from "./header.js";

export class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (<div>
					<Header />
					<Main />
				</div>);
	}
}