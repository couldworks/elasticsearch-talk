import DocumentTable from "../containers/DocumentTable";
import React from "react";

export default class ResultPanel extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <DocumentTable />;
	}
}