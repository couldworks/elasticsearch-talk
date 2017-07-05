import React from "react";


export default class Details extends React.Component {
    constructor(props){
        super(props);

        this.renderNews.bind(this);
    }

    componentDidMount(){
        this.props.fetchNews(this.props.id);
    }

    componentWillUnmount(){
        this.props.cleanNews();
    }

    renderNews(){
        if(this.props.news != null){
            return (<div>
                        <h2>{this.props.news.title}</h2>
                        <div>
                            {this.props.news.text}
                        </div>
                </div>);
        }
    }

    render(){
        return (<div>
					{this.renderNews()}
				</div>);
    }
}