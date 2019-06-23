import React from 'react';
import TodoList from './Todo/TodoList';

class MainContent extends React.Component {
  render() {
    return (
      <main className="row">
        <TodoList />
      </main>
    );
  }
}

export default MainContent;