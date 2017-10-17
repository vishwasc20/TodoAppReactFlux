import React,{Component} from 'react';
import todoActions from '../actions/todo-action-creator.js';

//TodoItem component which is responsible for displaying the todo
export default class TodoItem extends Component {
    constructor(props){
        super(props);
    }

    todoItemStatusChange = () => {
        todoActions.changeItemStatus(this.props.itemId);
    }

    removeItem = () => {
        todoActions.removeItem(this.props.itemId);
    }

    render(){

        const {item,status} = this.props;
        const labelStyle = status?({textDecoration:'line-through'}):{};

        return (
            <div className="todoItem">
                <input type="checkbox" checked={status} onChange={this.todoItemStatusChange}/>
                <label style={labelStyle}>{item}</label>
                <button onClick={this.removeItem}>Delete</button>
            </div>
        )
    }
}
