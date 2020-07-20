import React, { useState } from "react";
import "./priority.css";

export default function Priority() {
  const [uS, setUS] = useState([]);
  const [uInS, setUInS] = useState([]);
  const [notUS, setNotUS] = useState([]);
  const [notUInS, setNotUInS] = useState([]);
  const [item, setItem] = useState("");
  const [selected, setSelected] = useState("");

    const addItem = function() {
        // selected === "uS" ? 
        //     setUS(uS.push(item)):
            
        switch(selected) {
            case "uS":
                setUS([item, ...uS])
                break;
            case "uInS":
                uInS.push(item);
                break;
            case "notUS":
                notUS.push(item);
                break;
            case "notUInS":
                notUInS.push(item);
                break;
            }
        // console.log(uS)
    }

    //

  return (
    <div className="main">
        <div id="add_input">
            <input  type="text" onChange={e => setItem(e.target.value)} value={item} />
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value="uS" style={{ backgroundColor: "red" }}>
                Urgent & Significant
                </option>
                <option value="uInS" style={{ backgroundColor: "#FF7E07" }}>
                Urgent & Insignificant
                </option>
                <option value="notUS" style={{ backgroundColor: "#FFC107" }}>
                Not Urgent & Significant
                </option>
                <option value="notUInS" style={{ backgroundColor: "lightgray" }}>
                Not Urgent & Insignificant
                </option>
            </select>
            <button onClick={addItem()}>Add</button>
        </div>


        <div className="priority-box red">
            <h3>Urgent & Significant</h3>
            <ul>{
                uS.map((todo, index) => <li key={index}>{todo}</li>)
                }</ul>
        </div>
        <div className="priority-box orange">
            <h3>Urgent & Insignificant</h3>
            <ul>{
                uInS.map((todo, index) => <li key={index}>{todo}</li>)
                }</ul>
        </div>
        <div className="priority-box yellow">
            <h3>Not Urgent & Significant</h3>
            <ul>{
                notUS.map((todo, index) => <li key={index}>{todo}</li>)
                }</ul>
        </div>
        <div className="priority-box gray">
            <h3>Not Urgent & Insignificant</h3>
            <ul>{
                notUInS.map((todo, index) => <li key={index}>{todo}</li>)
                }</ul>
        </div>
    </div>
  );
}
