import React from 'react';
import TodoItem from './TodoItem';
import TodoData from './TodoData';

class TodoList extends React.Component {
  render() {
    const myTasks = TodoData.map(item => <TodoItem key={item.key} task={item.task} />)

    return (
      <div className="todo-list">
        <h2><u>Today's List</u></h2>
        {myTasks}
      </div>
    );
  }
}

export default TodoList;