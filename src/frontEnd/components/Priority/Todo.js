import React from 'react';
import RemoveItem from './RemoveItem';

export default function Todo({ id, task, removeTodo }) {
    return (
        <div className="todo">
            <li>{task}</li><RemoveItem id={id} removeTodo={removeTodo} />
        </div>
    )
}
