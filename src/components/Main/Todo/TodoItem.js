import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <label className="col s12 m10 offset-m1 todo-item hoverable grey-text text-darken-3">
          <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChange(this.props.todo.id)} />
          <span className={this.props.todo.completed === true ? "checked" : null}>
            {this.props.todo.task}
          </span>
        </label>
      </div>
    );
  }
}

export default TodoItem;