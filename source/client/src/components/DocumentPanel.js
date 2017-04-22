import React from "react";

export class SearchPanel extends React.Component {
	constructor(props){
		super(props);
		this.state = {query: ""};
		this.search = this.search.bind(this);
	}
	search(){
		console.log(this.state.query);
	}
	render(){
		return <div>
			<input type="text" placeholder="Search..." value={this.state.query} onChange={(e) => this.setState({query: e.target.value})}/>
			<button onClick={this.search}> Search! </button>
		</div>;
	}
}

export class ResultPanel extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <DocumentTable />;
	}
}

export class PaginationDocument extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <span>"1, 2, 3, 4, 5"</span>;
	}
}

export class DocumentTable extends React.Component {
	constructor(props){
		super(props)
		this.state = {items: [{
			title: "Lorem ipsum dolor sit amet",
			date: "04/22/2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut est enim. \
			Fusce rutrum mollis nisl, sed tincidunt purus faucibus et. Vestibulum at pulvinar leo. Pellentesque sem leo, efficitur sed nisl vestibulum, \
			eleifend laoreet sapien."
		}]}
	}
	render(){
		return <div>
			<table>
				<tbody>
					<tr>
						<td>
							<h2>{this.state.items[0].title}</h2>
							<small>{this.state.items[0].date}</small>
							<p>{this.state.items[0].description}</p>
						</td>
					</tr>
				</tbody>
			</table>
			<PaginationDocument />
		</div>
	}
}
