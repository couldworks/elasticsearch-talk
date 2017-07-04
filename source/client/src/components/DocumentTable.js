import React from "react";
import PaginationDocument from "../containers/PaginationDocument";
import PropTypes from 'prop-types';
import DocumentRow from "../components/DocumentRow.js";
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

export default DocumentTable;
