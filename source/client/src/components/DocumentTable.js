import React from "react";
import PaginationDocument from "../containers/PaginationDocument";


export default class DocumentTable extends React.Component {
	constructor(props){
		super(props)

		//store.dispatch(AllNews());
		// this.state = {items: store.getState()}
		// console.log(store.getState());
	}
	render(){
		
		//let items = this.state.items.map(document => <DocumentRow result={document} key={document._id}/>);
		console.log(this.state);
		console.log(this.documents);
		return (<div>
			<table>
				<tbody>
					
				</tbody>
			</table>
			<PaginationDocument />
		</div>)
	}
}