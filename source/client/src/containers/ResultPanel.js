import ResultPanel from "../components/ResultPanel";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		
	}
}

const ResultPanelContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultPanel);

export default ResultPanelContainer;