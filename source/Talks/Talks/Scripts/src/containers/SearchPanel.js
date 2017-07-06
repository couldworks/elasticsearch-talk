import {connect} from "react-redux";
import SearchPanel from "../components/SearchPanel";
import { withRouter } from 'react-router';
import { Search, FetchQuery, CleanAllNews, QueryFetched} from "../actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search(query, from, take){
            dispatch(FetchQuery(query));
            dispatch(CleanAllNews());
            dispatch(Search(query, from, take));
            //dispatch(QueryFetched(true));
        },
        queryUpdated() {
            dispatch(QueryFetched(false));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        query: state.Query,
        queryWasChanged: state.QueryFetched
	}
}

const SearchPanelContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchPanel);

// export default SearchPanelContainer;
export default withRouter(SearchPanelContainer);