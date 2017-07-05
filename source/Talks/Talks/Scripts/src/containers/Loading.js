import {connect} from "react-redux";
import Loading from "../components/Loading";
import { withRouter } from 'react-router';
import {SetLoading} from "../actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        query: state.query
    }
}

const Container = connect(
	(state, props) => ({
	    loading : state.Loading
	}),
	mapDispatchToProps
)(Loading);

export default withRouter(Container);