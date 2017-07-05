import {connect} from "react-redux";
import SearchPanel from "../components/SearchPanel";
import { withRouter } from 'react-router';
import {Search, SetLoading} from "../actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search(query, from, take){
            dispatch(Search(query, from, take));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
		query: state.query
	}
}

const SearchPanelContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchPanel);

// export default SearchPanelContainer;
export default withRouter(SearchPanelContainer);