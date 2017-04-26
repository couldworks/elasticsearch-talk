import DocumentTable from "../components/DocumentTable";
import React from "react";

export default class ResultPanel extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <DocumentTable />;
	}
}