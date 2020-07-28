import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

export default function Todo({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
    })
    const [todos, setTodos] = useState()

    function taskInputChange(e) {
        setTodo({...todo, task: e.target.value})
    }

    function submitHandler(e) {
        e.preventDefault();
        // if (todo.task.trim()) {
        //     addTodo({ ...todo, id: uuid });
        //     setTodo({ ...todo, task: "" })
        // }
    }

    function addTodo(todo) {
        setTodos([todo, ...todos]);
        //adds new todo to todos array
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function removeClick() {
        removeTodo(todo.id)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    label="Task"
                    value={todo.task}
                    onChange={taskInputChange}
                />
                <button type="submit">Add</button>
            </form>
            <ul id="todoList">
                {
                    todos.map(todo => (
                        <div id="Todo" key={todo.id}>
                            <li>{todo.task}</li>
                            <button onClick={removeClick}>X</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
