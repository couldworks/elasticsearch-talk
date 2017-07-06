import React from "react";
import PaginationDocument from "../containers/PaginationDocument";
import PropTypes from 'prop-types';
import DocumentRow from "../containers/DocumentRow.js";
import {Grid, Row, Col} from "react-bootstrap";


class DocumentTable extends React.Component {
	
    constructor(props){
        super(props);
        this.renderTotal.bind(this);
    }

    componentDidMount(){
		
    }

    renderTotal(){
        this.props.total > 0 ? (<Col md={8} xs={8} mdOffset={2} xsOffset={2} className={"row-content"}>
                        <b>{this.props.total} results</b><br />
					</Col>) : "";
    }
	
    render() {
        let items = this.props.documents.map((document, i) => <DocumentRow result={document} key={i}/>)

        return (<Grid className={"tableResults"}>
			    <Row>
			        <Col md={8} xs={8} mdOffset={2} xsOffset={2} className={"row-content"}>
                        <b>{this.props.total} results</b><br />
					</Col>
			    </Row>
			    {items}
			    <PaginationDocument />
		    </Grid>);
	}
}
export default DocumentTable;
