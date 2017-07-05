import React from "react";
import PaginationDocument from "../containers/PaginationDocument";
import PropTypes from 'prop-types';
import DocumentRow from "../components/DocumentRow.js";
import {Grid, Row, Col} from "react-bootstrap";


class DocumentTable extends React.Component {
	
	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}
	
	render() {
		let items = this.props.documents.map((document, i) => <DocumentRow result={document} key={i}/>)

		return (<Grid className={"tableResults"}>
			{items}
			<PaginationDocument />
		</Grid>);
	}
}

export default DocumentTable;
