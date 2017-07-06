import React from "react";
import {Grid, Row, Col, FormGroup, InputGroup, FormControl, Button} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';

export default class SearchPanel extends React.Component {
	constructor(props){
        super(props);

        this.state = { query: this.props.query, typedQuery: "", queryUpdated: this.props.queryWasChanged};
        this.search.bind(this);
        this.handleKeyPress.bind(this);
    }

	handleKeyPress(key){
		if (key.key === 'Enter') {
            this.props.search(this.state.typedQuery, 0, 20);
		}
    }

	search(){
        this.props.search(this.state.typedQuery, 0, 20);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.queryWasChanged) {
            this.setState({ typedQuery: nextProps.query });
            this.props.queryUpdated();
        }
    }

	render(){
		return <Grid className={"searchPanel"}>
			<Row>
				<Col xs={6} md={6} mdOffset={3}>
					<FormGroup>
						<InputGroup>
                            <FormControl type="text" placeholder="Search..." value={this.state.typedQuery} onChange={(e) => this.setState({ typedQuery: e.target.value })} onKeyPress={(e) => this.handleKeyPress(e)}/>
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