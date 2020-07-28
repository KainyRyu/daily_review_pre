import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./priority.css";
import Todo from "./Todo";

export default function Priority() {
    const [task, setTask] = useState("");
    const [isUrgent, setIsUrgent] = useState(true);
    const [isSignificant, setIsSignificant] = useState(true);
    const [todoList, setTodoList] = useState([]);
    

    // useEffect(() => {
    //     const storageTodos = JSON.parse(localStorage.setItem('todoList'))
    //     if (storageTodos) {
    //         setTodoList(storageTodos);
    //     }
    // }, [])
    
    const getTask = e => setTask(e.target.value);
    const urgentSelection = e => setIsUrgent((e.target.value) !== "true" ? false : true);
    const significatSelection = e => setIsSignificant((e.target.value) !== "true" ? false : true);
    
    function addTodo() {
        setTodoList(todoList.concat({
            id: uuid, 
            task: task, 
            urgency: isUrgent, 
            importance: isSignificant
        }))
    }

    function removeTodo(task) {
        setTodoList(todoList.filter(todo => todo.task !== task))
    }

    function removeClick() {
        removeTodo(task)
        console.log(task)
    }

  

  return (
    <div className="main">
        <div id="add_input">
            <div className="input_wrapper">
                <input className="text_input" type="text" value={task} onChange={getTask} />
                <select
                    id="priority_selection"
                    value={isUrgent}
                    onChange={urgentSelection}
                >
                    <option value="true">Urgent</option>
                    <option value="false">Not Urgent</option>
                </select>
                <select
                    id="priority_selection"
                    value={isSignificant}
                    onChange={significatSelection}
                >
                    <option value="true">Significant</option>
                    <option value="false">Insignificant</option>
                </select>
            </div>
            <button onClick={addTodo}>
            Click
            </button>
        </div>

      <div className="priority-box red">
        <h3>Urgent & Significant</h3>
        <ul>
            {todoList
            .filter(todo => todo.urgency && todo.importance)
            .map((todo) => (
                <div id="todo">
                    <li key={todo.task}>{todo.task}</li><button onClick={removeClick}>X</button>
                </div>
            ))}
        </ul>
      </div>
      {/* <div className="priority-box orange">
        <h3>Urgent & Insignificant</h3>
        <ul>
            {todoList
                .filter(todo => todo.urgency === false && todo.importance)
                .map((todo,index) => (
                    <div id="todo">
                        <li key={todo.id}>{todo.task}</li><button onClick={removeClick}>X</button>
                    </div>
            ))}
        </ul>
      </div>
      <div className="priority-box yellow">
        <h3>Not Urgent & Significant</h3>
        <ul>
            {todoList
                .filter(todo => todo.urgency && todo.importance === false)
                .map((todo,index) => (
                    <div id="todo">
                        <li key={todo.id}>{todo.task}</li><button onClick={removeClick}>X</button>
                    </div>
            ))}
        </ul>
      </div>
      <div className="priority-box gray">
        <h3>Not Urgent & Insignificant</h3>
        <ul>
            {todoList
                .filter(todo => todo.urgency === false && todo.importance === false  )
                .map((todo,index) => (
                    <div id="todo">
                        <li key={todo.id}>{todo.task}</li><button onClick={removeClick}>X</button>
                    </div>
            ))}
        </ul>
      </div> */}
    </div>
  );
}
