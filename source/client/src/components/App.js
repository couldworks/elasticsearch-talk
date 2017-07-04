import React from "react";
import SearchPanel from "../containers/SearchPanel.js";
import ResultPanel from "../containers/ResultPanel.js";
import TopoApp from "./Topo.js";
import storeFactory from "../store";
import {Provider} from "react-redux";
import { render } from "react-dom";

let store = storeFactory();

export class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div className={"app"}>
			<TopoApp />
			<SearchPanel />
			<ResultPanel />
		</div>;
	}
}

