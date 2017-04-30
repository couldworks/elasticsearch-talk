import React from "react";
import PaginationDocument from "../containers/PaginationDocument";
import PropTypes from 'prop-types';
import DocumentRow from "../components/DocumentRow.js";
import storeFactory from "../store";



class DocumentTable extends React.Component {
	
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchNews();
	}
	
	render() {
		let items = this.props.documents.map((document, i) => <DocumentRow result={document} key={i}/>)

		return (<div>
				<table>
					<tbody>
						{items}
					</tbody>
				</table>
				<PaginationDocument />
			</div>);
	}
}

DocumentTable.propTypes = {
	documents: PropTypes.array
}

export default DocumentTable;
