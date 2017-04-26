import React from "react";

export default class DocumentRow extends React.Component {
	
	constructor(props){
		super(props);
	}

	render(){
		const {title, date, result} = this.props.result;
		return <tr>
					<td>
						<h2>{title}</h2>
						<small>{date}</small>
						<p>{description}</p>
					</td>
				</tr>
	}
}