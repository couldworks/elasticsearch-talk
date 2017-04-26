import {connect} from "react-redux";
import PaginationDocument from "../components/PaginationDocument.js";
import { withRouter } from 'react-router'


const mapDispatchToProps = (dispatch, props) => {
	return {
		
	}
}

const Container = connect(
	(state, props) => ({
		NextToken : state.NextToken
	}),
	mapDispatchToProps
)(PaginationDocument);

export default withRouter(Container);