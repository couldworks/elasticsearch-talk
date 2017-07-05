import {connect} from "react-redux";
import { withRouter } from 'react-router';
import Details from "../components/Details";
import { FetchNews, EditNews } from "../actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchNews(id){
            dispatch(FetchNews(id));
        },
        cleanNews(){
            dispatch(EditNews(null));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        news: state.EditNews
    }
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Details);

export default withRouter(Container);