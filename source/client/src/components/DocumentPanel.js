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

export class DocumentRow extends React.Component {
	
	constructor(props){
		super(props);
	}

	render(){
		return <tr>
					<td>
						<h2>{this.props.result.title}</h2>
						<small>{this.props.result.date}</small>
						<p>{this.props.result.description}</p>
					</td>
				</tr>
	}
}

export class DocumentTable extends React.Component {
	constructor(props){
		super(props)
		this.state = {items: [{
			_id: "sdsfdf",
			title: "Lorem ipsum dolor sit amet",
			date: "04/22/2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut est enim. \
			Fusce rutrum mollis nisl, sed tincidunt purus faucibus et. Vestibulum at pulvinar leo. Pellentesque sem leo, efficitur sed nisl vestibulum, \
			eleifend laoreet sapien."
		},
		{
			_id: "sdsfadf",
			title: "Lorem ipsum dolor sit amet",
			date: "04/22/2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut est enim. \
			Fusce rutrum mollis nisl, sed tincidunt purus faucibus et. Vestibulum at pulvinar leo. Pellentesque sem leo, efficitur sed nisl vestibulum, \
			eleifend laoreet sapien."
		},
		{
			_id: "sdfs",
			title: "Lorem ipsum dolor sit amet",
			date: "04/22/2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut est enim. \
			Fusce rutrum mollis nisl, sed tincidunt purus faucibus et. Vestibulum at pulvinar leo. Pellentesque sem leo, efficitur sed nisl vestibulum, \
			eleifend laoreet sapien."
		},
		{
			_id: "kuy",
			title: "Lorem ipsum dolor sit amet",
			date: "04/22/2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut est enim. \
			Fusce rutrum mollis nisl, sed tincidunt purus faucibus et. Vestibulum at pulvinar leo. Pellentesque sem leo, efficitur sed nisl vestibulum, \
			eleifend laoreet sapien."
		},
		{
			_id: "hjkb",
			title: "Lorem ipsum dolor sit amet",
			date: "04/22/2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut est enim. \
			Fusce rutrum mollis nisl, sed tincidunt purus faucibus et. Vestibulum at pulvinar leo. Pellentesque sem leo, efficitur sed nisl vestibulum, \
			eleifend laoreet sapien."
		},
		{
			_id: "ty",
			title: "Lorem ipsum dolor sit amet",
			date: "04/22/2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut est enim. \
			Fusce rutrum mollis nisl, sed tincidunt purus faucibus et. Vestibulum at pulvinar leo. Pellentesque sem leo, efficitur sed nisl vestibulum, \
			eleifend laoreet sapien."
		},
		{
			_id: "mn",
			title: "Lorem ipsum dolor sit amet",
			date: "04/22/2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut est enim. \
			Fusce rutrum mollis nisl, sed tincidunt purus faucibus et. Vestibulum at pulvinar leo. Pellentesque sem leo, efficitur sed nisl vestibulum, \
			eleifend laoreet sapien."
		}]}
	}
	render(){
		
		let items = this.state.items.map(document => <DocumentRow result={document} key={document._id}/>);

		return (<div>
			<table>
				<tbody>
					{items}
				</tbody>
			</table>
			<PaginationDocument />
		</div>)
	}
}
