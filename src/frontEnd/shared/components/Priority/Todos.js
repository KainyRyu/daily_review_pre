import React from 'react';


export default function Todos({ id, task, removeTodo }) {
    const removeBtn = () => removeTodo(id)
    return (
        <div className="todo">
            <li>{task}</li><button onClick={removeBtn}>X</button>
        </div>
    )
}
