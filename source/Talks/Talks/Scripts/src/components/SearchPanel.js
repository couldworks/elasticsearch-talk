import React from "react";
import {Grid, Row, Col, FormGroup, InputGroup, FormControl, Button} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';

export default class SearchPanel extends React.Component {
	constructor(props){
		super(props);
		this.state = {query: ""};
		this.search = this.search.bind(this);
	}
	handleKeyPress(key){
		if (key.key === 'Enter') {
			this.search();
		}
	}
	search(){
	    this.props.search(this.state.query, 0, 20);
	}
	render(){
		return <Grid className={"searchPanel"}>
			<Row>
				<Col xs={6} md={6} mdOffset={3}>
					<FormGroup>
						<InputGroup>
							<FormControl type="text" placeholder="Search..." value={this.state.query} onChange={(e) => this.setState({query: e.target.value})} onKeyPress={this.handleKeyPress}/>
							<InputGroup.Button>
								<Button  onClick={this.search}><FontAwesome name="" className={"fa fa-search"} /></Button>
							</InputGroup.Button>
						</InputGroup>
					</FormGroup>
				</Col>
			</Row>
		</Grid>;
	}
}