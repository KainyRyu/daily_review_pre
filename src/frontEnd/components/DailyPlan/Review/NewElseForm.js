import React, { useState } from "react";

export default function NewElseForm ({ addElse, elseList }) {
    
    const [newElse, setNewElse] = useState({
      elseEvent: "",
      elseProductivity: 0,
      elseChecked: false
    });

    const getNewElseEvent = e => setNewElse({ ...newElse, elseEvent: e.target.value });
    const getNewElseProductivity = e => setNewElse({ ...NewElseForm, elseProductivity: e.target.value })
    const getCheckbox = e => setNewElse({ ...newElse, elseChecked: !newElse.elseChecked})

    function isPercentageAHundred () {
      const toNumber = Number(newElse.elseProductivity)
      const total = elseList.map(thing => thing.elseProductivity)
        .reduce((total, number) => 
          total + number
        , 0)
        return total + toNumber > 100 ? 
          alert(`You can't add more than ${100 - total}%`) :
          total + toNumber < 100 ?
            alert(`The total is less than 100%`) :
            setNewElse({ ...newElse, elseProductivity: toNumber})
    };
    
    const isTheSameEvent = () => {
      const newEvent = newElse.elseEvent.trim()
      return newEvent === "" ?
      "Nothing" :
      elseList.filter(event => event.elseEvent === newEvent) ?
      `${newEvent} is already exist!` :
      newEvent
    }
    
    function submitFilter() {
      const isAHundred = elseList
      .map(thing => thing.elseProductivity)
      .reduce((total, number) => 
      total + number
      , 0)
      const toNumber = Number(newElse.elseProductivity)
      const productivityFilter = () => (
        toNumber === 0 ?
        alert(`Percentage have no value`) :
        isAHundred + toNumber > 100 ?
        alert(`You can't add more than ${100 - isAHundred}%`) :
        setNewElse({ ...newElse, elseProductivity: toNumber })
      )
      const newEvent = newElse.elseEvent.trim()
    }

    function submitHandler(e) {
      e.preventDefault()

      addElse({
        elseEvent: isTheSameEvent(), 
        elseProductivity: newElse.elseProductivity, 
        elseChecked: newElse.elseChecked
      })
      
      if (newElse.elseEvent) {
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
          <label className="switch">
            <input type="checkbox" 
            onChange={getCheckbox} 
            value={newElse.elseChecked}/>
            <span className="switch-slider"></span>
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