import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChange(this.props.todo.id)}/>
        <p className={this.props.todo.completed == true ? "checked" : null}>
          {this.props.todo.task}
        </p>
      </div>
    );
  }
}

export default TodoItem;