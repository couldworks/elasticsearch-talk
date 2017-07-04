import React from "react";
import {Main} from "./main.js";
import {Header} from "./header.js"

export class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
<<<<<<< HEAD
		return <div className={"app"}>
			<TopoApp />
			<SearchPanel />
			<ResultPanel />
		</div>;
=======
		return (<div>
					<Header />
					<Main />
				</div>);
>>>>>>> fa03bd5d266fbdc7426043be0d5dba821ad9dfb3
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
