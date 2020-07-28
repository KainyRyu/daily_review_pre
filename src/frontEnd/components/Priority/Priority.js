import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./priority.css";
import Todo from "./Todo";

export default function Priority() {
    const [todo, setTodo] = useState({
        id: uuidv4(),
        task: "",
        urgency: true,
        importance: true
    })
    const [todoList, setTodoList] = useState([]);

    const getTask = e => (setTodo({...todo, task: e.target.value })
    );
    const urgentSelection = e => setTodo({...todo, urgency: (e.target.value) !== "true" ? false : true});
    const significatSelection = e => setTodo({...todo, importance: (e.target.value) !== "true" ? false : true});
    
    function addTodoClick(){
        setTodoList([todo, ...todoList])
        console.log(todoList)
        setTodo({...todo, id: uuidv4()})
    }

    function removeTodo(task) {
        setTodoList(todoList.filter(todo => todo.task !== task))
    }

    function removeClick() {
        removeTodo(todo.task)
    }

  

  return (
    <div className="main">
        <div id="add_input">
            <div className="input_wrapper">
                <input className="text_input" type="text" value={todo.task} onChange={getTask} />
                <select
                    id="priority_selection"
                    value={todo.urgency}
                    onChange={urgentSelection}
                >
                    <option value="true">Urgent</option>
                    <option value="false">Not Urgent</option>
                </select>
                <select
                    id="priority_selection"
                    value={todo.importance}
                    onChange={significatSelection}
                >
                    <option value="true">Significant</option>
                    <option value="false">Insignificant</option>
                </select>
            </div>
            <button onClick={addTodoClick}>
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
                    <li key={todo.id}>{todo.task}</li><button onClick={removeClick}>X</button>
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
