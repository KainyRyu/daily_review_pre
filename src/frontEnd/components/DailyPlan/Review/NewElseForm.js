import React, { useState } from "react";

export default function NewElseForm ({ addElse, elseList }) {
    
    const [newElse, setNewElse] = useState({
      elseEvent: "",
      elseProductivity: 0,
      elseChecked: false
    });
    const [filted, setFilted] = useState(0)

    const getNewElseEvent = e => setNewElse({ ...newElse, elseEvent: e.target.value.trim() });
    const getNewElseProductivity = e => setNewElse({ ...newElse, elseProductivity: Number(e.target.value) })
    const getCheckbox = e => setNewElse({ ...newElse, elseChecked: !newElse.elseChecked})
    
    //check the title if the same value or none otherwise push
    const isTheSameEvent = () => {
      const newEvent = newElse.elseEvent
      return newEvent === "" ?
       setFilted({...filted, elseEvent: "Nothing"}) :
        elseList.filter(event => event.elseEvent === newEvent ?
          alert(`${newEvent} is already exist!`) :
          setFilted({...filted, elseEvent: newEvent})
        )
    }
    
    function productivity() {
      //check productivity if 0 or if over 100
      const total = elseList
        .map(event => event.elseProductivity)
        .reduce((total, number) => 
          total + number
        , 0) //
      const toNumber = newElse.elseProductivity
      return toNumber === 0 ?
        alert(`Percentage is 0`) :
        total + toNumber > 100 ?
          alert(`You can't add more than ${100 - total}%`) :
          setFilted({ ...filted, elseProductivity: toNumber })   
    }

    function submitHandler(e) {
      e.preventDefault()
      isTheSameEvent()
      console.log(`elseList : ${elseList} and filted object : ${[filted]}`)
      if (filted.elseProductivity) {
        addElse(filted)
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