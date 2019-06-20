import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    return (
        <div>
            <input type="checkbox" />
            <span>Eat lunch</span><br />

            <input type="checkbox" />
            <span>Clean table</span><br />

            <input type="checkbox" />
            <span>Clean bedroom</span><br />

            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

export default TodoList;