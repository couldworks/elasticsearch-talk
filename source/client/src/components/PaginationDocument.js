import React from "react";

export default class PaginationDocument extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		const {NextToken} = this.props;
		console.log(this.props);

		return <span>{NextToken}</span>;
	}
}