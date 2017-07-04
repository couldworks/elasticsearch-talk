import React from "react";
import {Grid, Row, Col} from "react-bootstrap";

export default class TopoApp extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <Grid className={"imageContainer"}>
			<Row>
				<Col xs={12} md={12}>
					<img src="../content/images/logo128.png" className={"img-responsive center-block"}/>
				</Col>
			</Row>
		</Grid>;
	}
}
