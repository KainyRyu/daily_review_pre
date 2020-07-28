import React, { useState } from "react";
import "./priority.css";

export default function Priority() {
  const [title, setTitle] = useState("");
  const [isUrgent, setIsUrgent] = useState(true);
  const [isSignificant, setIsSignificant] = useState(true);
  const [todoList, setTodoList] = useState([]);

    
    const getTitle = e => setTitle(e.target.value);
    const urgentSelection = e => setIsUrgent((e.target.value) !== "true" ? false : true);
    const significatSelection = e => setIsSignificant((e.target.value) !== "true" ? false : true);
    
    function addTodo() {
        setTodoList(todoList.concat({title: title, urgency: isUrgent, importance: isSignificant}))

        console.log(getRed())
    }

    function getRed() {
        todoList
            .filter(todo => todo.urgency && todo.importance)
            .map((todo,index) => {
                return <li key={index}>{todo.title}</li>
            })
    }

  return (
    <div className="main">
        <div id="add_input">
            <div className="input_wrapper">
                <input className="text_input" type="text" value={title} onChange={getTitle} />
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
            .map((todo,index) => (
                <li key={index}>{todo.title}</li>
            ))}
        </ul>
      </div>
      <div className="priority-box orange">
        <h3>Urgent & Insignificant</h3>
        <ul>
          {/* {orange.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button>X</button>
            </li>
          ))} */}
        </ul>
      </div>
      <div className="priority-box yellow">
        <h3>Not Urgent & Significant</h3>
        <ul>

        </ul>
      </div>
      <div className="priority-box gray">
        <h3>Not Urgent & Insignificant</h3>
        <ul>

        </ul>
      </div>
    </div>
  );
}
