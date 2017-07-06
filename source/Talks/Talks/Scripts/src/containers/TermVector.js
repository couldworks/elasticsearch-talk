import {connect} from "react-redux";
import { withRouter } from 'react-router';
import TermVector from "../components/TermVector";
import { FetchTermVector, SetTermVector } from "../actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTermVector(id){
            dispatch(FetchTermVector(id));
        },
        cleanTerm(){
            dispatch(SetTermVector(null));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        term: state.TermVector
    }
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(TermVector);

export default withRouter(Container);