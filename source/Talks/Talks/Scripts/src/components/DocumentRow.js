import React from "react";
import {Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class DocumentRow extends React.Component {
	
	constructor(props){
		super(props);
		this.searchMore = this.searchMore.bind(this);
	}

	searchMore(text){
		console.log(text);
	}

	renderHighlight(){

	}


	render(){
	    const {title, timestamp, text, category, id} = this.props.result;
	    debugger;
		return (<Row>
					<Col md={8} xs={8} mdOffset={2} xsOffset={2} className={"row-content"}>
						<Link to={"/details/" + id} className={"titleDoc"} dangerouslySetInnerHTML={{__html: title}}></Link>
						<small className={"timestamp"}>{timestamp}</small>
                        <p dangerouslySetInnerHTML={{__html: text.length < 300 ? text : text.substring(0, 300) + "..."}}></p>
						<span>Categories: {category.join(",") < 50 ? category.join(",") : category.join(",").substring(0, 50) + "..."}</span> <Link onClick={() => this.searchMore(title)} to="#" className={"seeMore"}>See more like this</Link>
					</Col>
				</Row>)
	}
}