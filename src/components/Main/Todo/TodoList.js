import React from 'react';
import TodoItem from './TodoItem';
import TodoData from './TodoData';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("I was clicked and changed" + id);
    this.setState(prevState => {
      console.log(prevState);
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
        <h2><u>Today's List</u></h2>
        {myTasks}
      </div>
    );
  }
}

export default TodoList;