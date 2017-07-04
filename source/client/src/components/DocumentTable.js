import React from "react";
import PaginationDocument from "../containers/PaginationDocument";
import PropTypes from 'prop-types';
import DocumentRow from "../components/DocumentRow.js";
<<<<<<< HEAD
import {Grid, Row, Col} from "react-bootstrap";

const DocumentTable = ({documents}) => {
	let items = documents.map((document, i) => <DocumentRow result={document} key={i}/>)
	return (<Grid className={"tableResults"}>
				{items}
				{/*<Row>
					<Col xs={12} md={12}>
						<table className={"tableResults"}>
							<tbody>
								{items}
							</tbody>
						</table>
						<PaginationDocument />
					</Col>
				</Row>*/}
			</Grid>);
}

DocumentTable.propTypes = {
	documents: PropTypes.array
};
=======
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

// DocumentTable.propTypes = {
// 	documents: PropTypes.array
// }
>>>>>>> fa03bd5d266fbdc7426043be0d5dba821ad9dfb3

export default DocumentTable;
