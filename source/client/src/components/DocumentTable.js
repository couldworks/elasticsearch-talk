import React from "react";
import PaginationDocument from "../containers/PaginationDocument";
import PropTypes from 'prop-types';
import DocumentRow from "../components/DocumentRow.js";


const DocumentTable = ({documents}) => {
	let items = documents.map((document, i) => <DocumentRow result={document} key={i}/>)
	return (<div>
				<table>
					<tbody>
						{items}
					</tbody>
				</table>
				<PaginationDocument />
			</div>);
}

DocumentTable.propTypes = {
	documents: PropTypes.array
}

export default DocumentTable;
