import { connect } from "react-redux";
import { withRouter } from 'react-router';
import DidYouMean from "../components/DidYouMean";
import { FetchQuery, QueryFetched, CleanAllNews, Search } from "../actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search(query) {
            dispatch(FetchQuery(query));
            dispatch(QueryFetched(true));
            dispatch(CleanAllNews());
            dispatch(Search(query, 0, 20));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        suggestions: state.Didyoumean
    }
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(DidYouMean);

export default withRouter(Container);