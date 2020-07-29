import React from 'react'

export default function Todo({ todoList, removeTodo }) {
    let randomKey = Math.random().toString(16).slice(2)

    return todoList
                .filter(todo => todo.urgency && todo.importance)
                .map(({id, task}) => {
                    console.log(id, task)
                    return (
                        <div id="todo" key={id}>
                            <li>{task}</li><RemoveItem id={id} removeTodo={removeTodo} />
                        </div>
                    )
                }
            )
}

function RemoveItem({removeTodo, id}) {
    const removeBtn = () => removeTodo(id)
    return <button onClick={removeBtn}>X</button>
}