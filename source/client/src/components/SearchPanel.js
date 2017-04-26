import React from "react";
import {Search} from "../actions.js";

export default class SearchPanel extends React.Component {
	constructor(props){
		super(props);
		this.state = {query: ""};
		this.search = this.search.bind(this);
	}
	search(){
		console.log(this.state.query);
	}
	render(){
		return <div>
			<input type="text" placeholder="Search..." value={this.state.query} onChange={(e) => this.setState({query: e.target.value})}/>
			<button onClick={this.search}> Search! </button>
		</div>;
	}
}