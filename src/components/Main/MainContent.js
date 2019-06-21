import React from 'react';
import TodoList from './Todo/TodoList';
import './MainContent.css';

class MainContent extends React.Component {
  render() {
    return (
      <main>
        <TodoList />
      </main>
    );
  }
}

export default MainContent;