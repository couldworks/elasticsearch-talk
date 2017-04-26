import DocumentTable from "../components/DocumentTable"
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	}
}

const DocumentTableContainer = connect(
	(state, ownProps) => ({documents: state.AllNews}),
	mapDispatchToProps
)(DocumentTable);

export default DocumentTableContainer;