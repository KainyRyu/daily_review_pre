import React, { useState } from "react";
import "./priority.css";

export default function Priority() {
  const [red, setRed] = useState([]);
  const [orange, setOrange] = useState([]);
  const [yellow, setYellow] = useState([]);
  const [gray, setGray] = useState([]);
  const [item, setItem] = useState("");
  const [isUrgent, setIsUrgent] = useState(true);
  const [isSignificant, setIsSignificant] = useState(true);
  const [newTodoItem, setNewtodoItem] = useState([]);


    function addTodo() {
        setNewtodoItem(newTodoItem.concat({title: item, isUrgent: true, imImportant: true}))
        console.log(newTodoItem)
    }

    function deleteTodo(e) {
        setGray(gray.filter((todo) => todo.e !== e));
        console.log(gray);
    }


    const newTodo = e => setItem(e.target.value);
    const urgentSelection = e => setIsUrgent((e.target.value) !== "true" ? false : true);
    const significatSelection = e => setIsSignificant((e.target.value) === "true" ? true : false);


  return (
    <div className="main">
        <form id="add_input">
            <div className="input_wrapper">
                <input className="text_input" type="text" value={item} onChange={newTodo} />
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
            +
            </button>
        </form>

      <div className="priority-box red">
        <h3>Urgent & Significant</h3>
        <ul>
          {red.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={deleteTodo(todo)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="priority-box orange">
        <h3>Urgent & Insignificant</h3>
        <ul>
          {orange.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="priority-box yellow">
        <h3>Not Urgent & Significant</h3>
        <ul>
          {yellow.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="priority-box gray">
        <h3>Not Urgent & Insignificant</h3>
        <ul>
          {gray.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
