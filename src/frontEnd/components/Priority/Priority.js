import React, { useState } from "react";
import "./priority.css";

export default function Priority() {
  const [red, setRed] = useState([]);
  const [orange, setOrange] = useState([]);
  const [yellow, setYellow] = useState([]);
  const [gray, setGray] = useState([]);
  const [item, setItem] = useState("");
  const [selected, setSelected] = useState("");
  const [newTodoItem, setNewtodoItem] = useState([]);

  const priorities = [
    {
      red: [],
      // backgroundColor: 'red'
    },
    {
      orange: [],
      // backgroundColor: "#FF7E07"
    },
    {
      yellow: [],
      // backgroundColor: "#FFC107"
    },
    {
      gray: [],
      // backgroundColor: "lightgray"
    },
  ];

  const filtering = [
    {label: "red", isUrgent: true, isImportant: true},
    {label: "orange", isUrgent: true, isImportant: false},
    {label: "yellow", isUrgent: false, isImportant: true},
    {label: "gray", isUrgent: false, isImportant: false}
  ]
  // seleted filt the keys (push or concat)(item)
//   function addTodo() {
//     selected === "red" ?
//         setRed(red.concat(item)):
//         selected === "orange" ?
//             setOrange(orange.concat(item)) :
//             selected === "yellow" ?
//                 setYellow(yellow.concat(item)) :
//                 setGray(gray.concat(item));
//   }
function addTodo() {
    setNewtodoItem(newTodoItem.concat({title:"", isUrgent: true, imImportant: true}))
}
  function deleteTodo(e) {
    setGray(gray.filter((todo) => todo.e !== e));
    console.log(gray);
  }

  const newTodo = (e) => setItem(e.target.value);
  const getSelected = (e) => setSelected(e.target.value);
  const selectOptions = priorities.map((option, index) => (
    <option id={option} key={index}>
      {Object.keys(option)}
    </option>
  ));

  return (
    <div className="main">
      <form id="add_input">
        <div className="input_wrapper">
          <input className="text_input" type="text" value={item} onChange={newTodo} />
          <select
            id="priority_selection"
            value={selected}
            onChange={getSelected}
          >
            {selectOptions}
          </select>
        </div>
        <button type="submit" onClick={addTodo}>
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
