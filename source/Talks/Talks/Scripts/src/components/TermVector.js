import React from "react";
import {Row, Col, Grid} from "react-bootstrap";


export default class TermVector extends React.Component {
    constructor(props){
        super(props);

        this.renderTermVector.bind(this);
        this.renderWords.bind(this);
    }

    componentDidMount(){
        this.props.fetchTermVector(this.props.id);
    }

    componentWillUnmount(){
        this.props.cleanTerm();
    }

    renderWords(terms){
        
        let items = Object.keys(terms).reverse().map(function (key) { 
            return (<div key={key}> 
                        <h3 className={"labelTerm"}>{key}</h3>
                        <span className={"labelTerm"}>Doc freq:</span> {terms[key].doc_freq} <br />
                        <span className={"labelTerm"}>Term freq:</span> {terms[key].term_freq} <br />
                        <span className={"labelTerm"}>Ttf:</span> {terms[key].ttf} <br />
                    </div>);   
        });

        return items;
    }

    renderTermVector(){
        if(this.props.term != null){

            return (<div>
                        <h2>{this.props.term.title}</h2>
                        <span className={"labelTerm"}>Doc count:</span> { this.props.term.data.field_statistics.doc_count } <br />
                        <span className={"labelTerm"}>Sum doc:</span> { this.props.term.data.field_statistics.sum_doc_freq } <br />
                        <span className={"labelTerm"}>Sum ttf:</span> { this.props.term.data.field_statistics.sum_ttf } <br />
             </div>);
    }
}

render(){
    return (<Grid>
                <Row>
                    <Col md={8} xs={8} mdOffset={2} xsOffset={2} className={"row-content"}>
                        {this.renderTermVector()}
                        {this.props.term != null ? this.renderWords(this.props.term.data.terms) : ""}
                    </Col>
                </Row>
            </Grid>);
}
}