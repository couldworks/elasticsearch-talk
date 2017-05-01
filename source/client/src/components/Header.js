import React from "react";
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(<nav>
                    <ul>
                        <li>
                            <Link to={"test"}>Link 1</Link>
                        </li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </nav>);
    }
}