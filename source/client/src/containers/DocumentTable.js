import DocumentTable from "../components/DocumentTable"
import {connect} from "react-redux";
import { withRouter } from 'react-router';
import { FetchAllNews } from "../actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchNews(){
			dispatch(FetchAllNews());
		}
	}
}

const Container = connect(
	(state, props) => ({
		documents : state.AllNews
	}),
	mapDispatchToProps
)(DocumentTable);

export default withRouter(Container);