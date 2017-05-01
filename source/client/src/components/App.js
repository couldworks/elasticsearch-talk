import React from "react";
import {Main} from "./main.js";
import {Header} from "./header.js"

export class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (<div>
					<Header />
					<Main />
				</div>);
	}
}

/*export default function App({children}){
	return (<div>
				<nav>
						<ul>
							<li>Link 1</li>
						</ul>
					</nav>
					<div>{children}</div>
			</div>);
}*/
