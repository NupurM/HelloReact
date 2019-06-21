import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChange(this.props.todo.id)}/>
        <p>{this.props.todo.task}</p><br />
      </div>
    );
  }
}

export default TodoItem;