import React, { useState } from "react";
import "./priority.css";

export default function Priority() {
  const [uS, setUS] = useState([]);
  const [uInS, setUInS] = useState([]);
  const [notUS, setNotUS] = useState([]);
  const [notUInS, setNotUInS] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [selected, setSelected] = useState("");

    const pushTitle = function() {
        switch(selected) {
            case "uS":
                uS.push(selected);
                break;
            case "uInS":
                uInS.push(selected);
                break;
            case "notUS":
                notUS.push(selected);
                break;
            case "newToDo":
                newToDo.push(selected);
                break;
        }
    }

  return (
    <div className="main">
        <form id="add_input">
            <input id="must_to_do" type="text" placeholder="Must to do" name="title" onChange={e => setNewToDo(e.target.value)} value={newToDo} />
            <select id="priority_selection" name="priority" value={selected} onChange={e => setSelected(e.target.value)}>
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
            <input type="submit" value="Add" />
        </form>
        <div className="priority-box red">
            <h3>Urgent & Significant</h3>
            <ul>{}</ul>
        </div>
        <div className="priority-box orange">
            <h3>Urgent & Insignificant</h3>
            <ul>{}</ul>
        </div>
        <div className="priority-box yellow">
            <h3>Not Urgent & Significant</h3>
            <ul>{}</ul>
        </div>
        <div className="priority-box gray">
            <h3>Not Urgent & Insignificant</h3>
            <ul>{}</ul>
        </div>
    </div>
  );
}
