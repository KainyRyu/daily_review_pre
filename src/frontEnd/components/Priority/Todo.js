import React from 'react';

export default function Todo({ id, task, removeTodo }) {
    return (
        <div className="todo">
            <li>{task}</li><RemoveItem id={id} removeTodo={removeTodo} />
        </div>
    )
}

function RemoveItem({removeTodo, id}) {
    const removeBtn = () => removeTodo(id)
    return <button onClick={removeBtn}>X</button>
}