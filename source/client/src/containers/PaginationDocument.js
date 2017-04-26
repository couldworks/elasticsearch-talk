import {connect} from "react-redux";
import PaginationDocument from "../components/PaginationDocument.js";


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		
	}
}

const PaginationDocumentContainer = connect(
	(state, ownProps) => ({
		NextToken : state.NextToken
	}),
	mapDispatchToProps
)(PaginationDocument);

export default PaginationDocumentContainer;