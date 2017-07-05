import React from "react";
import SearchPanel from "../containers/SearchPanel.js";
import ResultPanel from "../containers/ResultPanel.js";
import TopoApp from "./Topo.js";

import Loading from "../containers/Loading.js";
import {Provider} from "react-redux";
import { render } from "react-dom";

export class Main extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div>
			<TopoApp />
			<SearchPanel />
            <Loading />
			<ResultPanel />
		</div>;
	}
}
