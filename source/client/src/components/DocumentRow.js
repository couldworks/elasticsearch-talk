import React from "react";

export default class DocumentRow extends React.Component {
	
	constructor(props){
		super(props);
	}

	render(){
		const {title, timestamp, text} = this.props.result;
		
		return <tr>
					<td>
						<h2>{title}</h2>
						<small>{timestamp}</small>
						<p>{text}</p>
					</td>
				</tr>
	}
}