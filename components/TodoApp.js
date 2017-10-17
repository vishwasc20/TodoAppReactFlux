import React,{Component} from 'react';
import todoCss from './TodoApp.less';
import TodoTitle from './TodoTitle.js';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

//TodoApp container which has subcomponents TodoTitle,TodoForm and TodoList
export default class TodoApp extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div id="reactApp">
                <TodoTitle title="React/Flux Todo App"/>
                <TodoForm placeHolder="What needs to be Done?"/>
                <TodoList />
            </div>
        )
    }
}
