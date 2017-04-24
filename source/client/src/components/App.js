import React from "react";
import {SearchPanel, ResultPanel} from "./DocumentPanel.js";
import TopoApp from "./Topo.js";

export default class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div>
			<TopoApp />
			<SearchPanel />
			<ResultPanel />
		</div>;
	}
}
