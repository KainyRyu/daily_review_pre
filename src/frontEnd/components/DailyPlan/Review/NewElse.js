import React, { useState } from "react";

export default function NewElse({ addElse }) {
    const [newElse, setNewElse] = useState({
      elseEvent: "",
      elseProductivity: 0,
    });
  
    const getNewElseEvent = (e) =>
      setNewElse({ ...newElse, elseEvent: e.target.value });
    const getNewElseProductivity = (e) =>
      setNewElse({ ...newElse, elseProductivity: e.target.value });
  
    function submitHandler() {
      addElse({ newElse });
    }
    return (
      <div className="add-else-warpper">
        <div className="review_input_wrapper" style={{ display: "flex" }}>
          {/* get {title} from daily plan */}
          <input
            className="review_input"
            type="text"
            onChange={getNewElseEvent}
            value={newElse.elseEvent}
          />
          <select
            className="percentages"
            onChange={getNewElseProductivity}
            value={newElse.elseProductivity}
          >
            <option value="100">100%</option>
            <option value="90">90%</option>
            <option value="80">80%</option>
            <option value="70">70%</option>
            <option value="60">60%</option>
            <option value="50">50%</option>
            <option value="40">40%</option>
            <option value="30">30%</option>
            <option value="20">20%</option>
            <option value="10">10%</option>
            <option value="0">0%</option>
          </select>
        </div>
        <div className="review_input_wrapper">
          <span style={{ flex: 1 }}>related to</span>
          <select id="review_related_select">
            <option>None</option>
            <option>None</option>
          </select>
        </div>
        <div className="checkboxes">
          <input type="checkbox" className="checkbox" />
          <input type="checkbox" className="checkbox" />
        </div>
      </div>
    );
  }