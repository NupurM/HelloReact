import React from 'react';
import TodoItem from './TodoItem';
import TodoData from './TodoData';
import './Todo.css';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(
        todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }
      )
      return { todos: updatedTodos };
    });
  }

  render() {
    const myTasks = this.state.todos.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange} />)

    return (
      <div className="todo-list col s12 m6 offset-m3 l4 offset-l4 white layers">
        <h4 className="row teal-text center-align">
          <u className="col s12">Today's Tasks</u>
        </h4>
        {myTasks}
      </div>
    );
  }
}

export default TodoList;