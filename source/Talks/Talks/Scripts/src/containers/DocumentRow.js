import {connect} from "react-redux";
import DocumentRow from "../components/DocumentRow";
import { withRouter } from 'react-router';
import { Search, FetchQuery, CleanAllNews, QueryFetched } from "../actions.js";

const mapStateToProps = (state, ownProps) => {
	return {
		title: state.title,
		date: state.date,
		description: state.description
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
        search(query, from, take) {
            dispatch(FetchQuery(query));
            dispatch(QueryFetched(true));
            dispatch(CleanAllNews());
            dispatch(Search(query, from, take));
        }
	}
}

const DocumentRowContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DocumentRow);

export default withRouter(DocumentRowContainer);
//export default DocumentRowContainer;