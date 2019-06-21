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
      <div className="todo-list">
        <h1><u>Today's List</u></h1>
        {myTasks}
      </div>
    );
  }
}

export default TodoList;