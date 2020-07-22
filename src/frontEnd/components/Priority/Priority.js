import React, { useState } from "react";
import "./priority.css";

const priorities = [{
  red:[],
  // backgroundColor: 'red'
  },{
  orange:[],
  // backgroundColor: "#FF7E07"
  },{
  yellow:[],
  // backgroundColor: "#FFC107"
  },{
  gray:[],
  // backgroundColor: "lightgray"
}]
const red = priorities[0].red
const orange = priorities[0].orange
const yellow = priorities[0].yellow
const gray = priorities[0].gray

export default function Priority() {
  const [uS, setUS] = useState([]);
  const [uInS, setUInS] = useState([]);
  const [notUS, setNotUS] = useState([]);
  const [notUInS, setNotUInS] = useState([]);
  const [item, setItem] = useState("");
  const [selected, setSelected] = useState("");

// seleted filt the keys (push or concat)(item)
    function addTodo() {
        selected === "red" ?
            setUS(uS.concat(item)) :
            selected === "orange" ?
                setUInS(uInS.concat(item)) :
                selected === "yellow" ?
                    setNotUS(notUS.concat(item)) :
                    setNotUInS(notUInS.concat(item))
    }
    function deleteTodo(e) {
        setUS(uS.filter(todo => todo.e !== e))
        console.log(uS)
    }
    
    const newTodo = (e) => setItem(e.target.value)
    const getSelected = (e) => setSelected(e.target.value)
    const selectOptions = priorities.map((option, index) => <option id={option} key={index}>{Object.keys(option)}</option>)

  return (
    <div className="main">
        <div id="add_input">
            <div id="new_todo">
                <input type="text" value={item} onChange={newTodo} />
                <select id="priority_selection" value={selected} onChange={getSelected}>
                    {
                        selectOptions
                    }
                </select>
            </div>
            <button type="submit" onClick={addTodo}>+</button>
        </div>

        <div className="priority-box red">
            <h3>Urgent & Significant</h3>
            <ul>{
                uS.map((todo, index) => <li key={index}><span>{todo}</span><button onClick={deleteTodo(todo)}>X</button></li>)
            }</ul>
        </div>
        <div className="priority-box orange">
            <h3>Urgent & Insignificant</h3>
            <ul>{
                uInS.map((todo, index) => <li key={index}><span>{todo}</span><button >X</button></li>)
            }</ul>
        </div>
        <div className="priority-box yellow">
            <h3>Not Urgent & Significant</h3>
            <ul>{
                notUS.map((todo, index) => <li key={index}><span>{todo}</span><button>X</button></li>)
            }</ul>
        </div>
        <div className="priority-box gray">
            <h3>Not Urgent & Insignificant</h3>
            <ul>{
                notUInS.map((todo, index) => <li key={index}><span>{todo}</span><button>X</button></li>)
            }</ul>
        </div>
    </div>
  );
}
