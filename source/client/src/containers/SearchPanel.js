import {connect} from "react-redux";
import SearchPanel from "../components/SearchPanel";
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
	return {
		query: state.query
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSearch: () => dispatch(Search)
	}
}

const SearchPanelContainer = connect(
	mapStateToProps,
	{
		onSearch: (query) => Search(query)
	}
)(SearchPanel);

// export default SearchPanelContainer;
export default withRouter(SearchPanel);