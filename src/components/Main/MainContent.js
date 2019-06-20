import React from 'react';
import TodoList from './Todo/TodoList';

function MainContent(){
    return(
        <main>
            <h2>Today's tasks:</h2>
            <TodoList />
        </main>
    );
}

export default MainContent;