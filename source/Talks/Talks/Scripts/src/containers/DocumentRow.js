import {connect} from "react-redux";
import DocumentRow from "../components/DocumentRow";
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
	return {
		title: state.title,
		date: state.date,
		description: state.description
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	}
}

const DocumentRowContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DocumentRow);

export default withRouter(DocumentRowContainer);
//export default DocumentRowContainer;