import React, { Component } from 'react' ;
import { connect } from "react-redux";
import Todo from './Todo.js';
import AddTodo from './AddTodo.js';

class TodoList extends Component{
    render(){
        var data = this.props.data;
        return (
             <div className="container">
                <div className="row">{ data.map( (a,i) =>  <Todo title={a.title} contents = {a.contents} key={i} />  )}</div>
                <AddTodo />
            </div>
        );
    }
}
const mapStateToProps = state => {
    let data = state.todos;
    return {data}
}
export default connect(mapStateToProps)(TodoList);