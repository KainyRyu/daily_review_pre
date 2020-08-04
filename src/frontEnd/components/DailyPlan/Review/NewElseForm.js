import React, { useState } from "react";

export default function NewElseForm ({ addElse, elseList }) {
    const [newElse, setNewElse] = useState({
      elseEvent: "",
      elseProductivity: 0,
      elseChecked: false
    });
  
    const getNewElseEvent = e => setNewElse({ ...newElse, elseEvent: e.target.value });

    function getNewElseProductivity (e) {
      const toNumber = Number(e.target.value)
      const total = elseList.map(thing => thing.elseProductivity)
      .reduce((total, number) => 
        total + number
      , 0)
      const sum = toNumber + total
      return total + toNumber <= 100 ? setNewElse({ ...newElse, elseProductivity: toNumber}) : alert("Cannot over 100%")
    };
    const getCheckbox = e => setNewElse({ ...newElse, elseChecked: !newElse.elseChecked})
    

    function submitHandler(e) {
      e.preventDefault()
      addElse(newElse)
      if (newElse.elseEvent.trim()) {
        setNewElse({ elseEvent: "", elseProductivity: 0, elseChecked: false})
      }
    }

    return (
      <form 
        className="add-else-warpper" 
        onSubmit={submitHandler}
      >
        <div className="review-input-wrapper">
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
        <div className="review-input-wrapper">
          <span style={{ flex: 1 }}>related to</span>
          <select id="review_related_select">
            <option>None</option>
            <option>None</option>
          </select>
        </div>
        <div className="review-input-wrapper">
          <label class="switch">
            <input type="checkbox" 
            onChange={getCheckbox} 
            value={newElse.elseChecked}/>
            <span class="switch-slider"></span>
          </label>
          <button 
            className="review_button" 
            type="submit" >
              Add
          </button>
        </div>
      </form>
    );
  }