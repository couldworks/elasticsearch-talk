import DocumentTable from "../components/DocumentTable"
import {connect} from "react-redux";
import { withRouter } from 'react-router';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	}
}

const Container = connect(
	(state, props) => ({
		documents : state.AllNews
	}),
	mapDispatchToProps
)(DocumentTable);

export default withRouter(Container);