import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from "react-bootstrap";

export default class DidYouMean extends React.Component {
    constructor(props) {
        super(props);

        this.renderSuggestions.bind(this);
        this.searchByMean.bind(this);
    }

    searchByMean(query) {
        this.props.search(query);
    }

    renderSuggestions() {
        if (this.props.suggestions.length > 0) {
            var items = this.props.suggestions.map((sgg, i) => <Link to={"#"} className={"linkDidYouMean"} onClick={() => this.searchByMean(sgg)}>{sgg}</Link>);
            return (<div>
                <span className={"didYouMean"}>Did you mean: </span>{items}
            </div>);
        }
    }

    render() {
        return (<Grid>
            <Row>
                <Col md={8} xs={8} mdOffset={2} xsOffset={2}>
                    {this.renderSuggestions()}
                </Col>
            </Row>
        </Grid>);
    }
}