import React, {useState} from 'react';
import '../dailyPlan.css'
import './review.css'

//relate with <Priority todo={todo}/> - Else
//send percentage, elseTitle, positive%, negative%
//if productivity !== 100% ? Else default 100 - productivity%, Negative, placeholder="Something Else"

function AddElses({ addElse }) {
    const [newElse, setNewElse] = useState({ elseEvent: "", elseProductivity: 0 });
    const getNewElseEvent = e => newElse({...newElse, elseEvent: e.target.value })
    const getNewElseProductivity = e => newElse({...newElse, elseProductivity: e.target.value })

    return (
        <div className="add-else-warpper">
            <div className="review_input_wrapper" style={{ display: "flex" }}>
                {/* get {title} from daily plan */}
                <input className="review_input" type="text" onChange={getNewElseEvent} value={newElse.elseEvent}/>
                <select className="percentages" onChange={getNewElseProductivity} value={newElse.elseProductivity}>
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
            <div className="review_input_wrapper" >
                <span style={{flex: 1}}>related to</span>
                <select id="review_related_select">
                    <option>None</option>
                    <option>None</option>
                </select>
            </div>
            <div className="checkboxes">
                <input type="checkbox" className="checkbox"/>
                <input type="checkbox" className="checkbox"/>
            </div>
        </div>
    )
}
export default function Review() {
    const [selectedTiem, setSelectedTime] = useState(0)
    const [elseList, setElseList] = useState([
        { currentEvent: "", defaultProductivity: 100 }
    ]);

    function addElse(newElse) {
        setElseList(...elseList, newElse)
    }
    

    return (
        <div className="review_page">
            <div className="review_wrapper">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h3>time - time</h3>
                    <input className="review_button" type="submit" value="Done" />
                </div>
                <div className="review_input_wrapper">
                    <input className="review_input" type="text" placeholder="" />
                    <select className="percentages">
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
                    {/* <input type="text" id="selboxDirect" name="selboxDirect"/> */}
                    {/* <input className="percentages" type="number" placeholder="100"/>% */}
                </div>
            </div>
            <div>
                <div>
                    <h2>Else</h2>
                    <AddElses addElse={addElse}/>
                    <button>+</button>
                </div>
                
            </div>

        </div>
    )
}
