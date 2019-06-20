import React from 'react';

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.task}</p><br />
        </div>
    );
}

export default TodoItem;