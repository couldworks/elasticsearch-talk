import React from "react";
import {Provider} from "react-redux";
import { render } from "react-dom";
import {Row, Col, Grid} from "react-bootstrap";


export default class Loading extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            loading: this.props.Loading
        };

        this.showLoading = this.showLoading.bind(this);
    }

    showLoading(){
        return(<div className={"text-center"}>
                    <i className={"fa fa-refresh fa-spin fa-3x fa-fw"}></i>
                    <span className={"sr-only"}>Loading...</span>
                </div>);
    }

    render(){
        return (<Grid>
			<Row>
				<Col xs={12} md={12}>
					{ this.props.loading ? this.showLoading() : ""}
				</Col>
			</Row>
		</Grid>);
    }
}