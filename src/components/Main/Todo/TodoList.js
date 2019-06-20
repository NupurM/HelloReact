import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    return (
        <div className="todo-list">
            <div className="todo-item">
                <input type="checkbox" />
                <span>Eat lunch</span>
            </div>

            <div className="todo-item">
                <input type="checkbox" />
                <span>Clean table</span>
            </div>

            <div className="todo-item">
                <input type="checkbox" />
                <span>Clean bedroom</span>
            </div >

            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div >
    );
}

export default TodoList;