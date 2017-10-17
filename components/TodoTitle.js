import React,{Component} from 'react';

//TodoTitle component which displays the todo app title
export default class TodoTitle extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="todoTitle">
                <label>{this.props.title}</label>
            </div>
            )
    }
}
