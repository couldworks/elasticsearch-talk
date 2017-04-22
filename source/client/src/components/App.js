import React from "react";
import {SearchPanel, ResultPanel} from "./DocumentPanel.js";

export default class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div>
			<SearchPanel />
			<ResultPanel />
		</div>;
	}
}
