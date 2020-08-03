import React, { useState } from "react";
import NewElseForm from "./NewElseForm";
import "../dailyPlan.css";
import "./review.css";

//relate with <Priority todo={todo}/> - Else
//send percentage, elseTitle, positive%, negative%
//if productivity !== 100% ? Else default 100 - productivity%, Negative, placeholder="Something Else"


export default function Review() {
    const [selectedTime, setSelectedTime] = useState(0);
    const [elseList, setElseList] = useState([]);

    function addElse(newElse) {
        setElseList([ newElse, ...elseList])
        console.log(elseList)
    }

    return (
        <div className="review_page">
        <div className="review_wrapper">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>time - time</h3>
            {/* get {title} from daily plan (NOT INPUT)*/}
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
                    {
                    elseList ? 
                        <div id="else-wrapper">
                                {elseList.map(({elseEvent, elseProductivity}, index) => {
                                    return <div key={index} className="else-list">
                                            <div>{elseEvent}</div>
                                            <div>{elseProductivity}%</div>
                                            {/* <div className="display-percentage"></div> */}
                                        </div>
                                    }
                                )}
                        </div> : <></>
                    }
                <NewElseForm addElse={addElse}/>
            </div>
        </div>
        </div>
    );
}
