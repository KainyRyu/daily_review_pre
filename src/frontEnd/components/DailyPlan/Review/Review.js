import React, { useState } from "react";
import NewElseForm from "./NewElseForm";
import SwipeToDelete from "./SwipeDelete";
import "../dailyPlan.css";
import "./review.css";

//relate with <Priority todo={todo}/> - Else
//send percentage, elseTitle, positive%, negative%
//if productivity !== 100% ? Else default 100 - productivity%, Negative, placeholder="Something Else"


export default function Review() {
    // const [selectedTime, setSelectedTime] = useState(0);
    const [elseList, setElseList] = useState([]);

    function addElse(newElse) {
        setElseList([newElse
            //if newElse.elseEvent !== elseList.map(otherElse.elseEvent) ? newElse : none(select the same elseEvent)
            //if elseList.elseProductivity reduce !== error
            , ...elseList])
        console.log(elseList)
    }

    function removeElse(deleteThis) {
        setElseList(elseList.filter(thing => thing.elseEvent !== deleteThis))
    }


    return (
        <div className="review_page">
        <div className="review_wrapper">
            <div className="review-input-wrapper">
                <h3>time - time</h3>
                {/* get {title} from daily plan (NOT INPUT)*/}
                {/* With the Done button check weather the percentage is 100% */}
                <input className="review_button" type="submit" value="Done" />
            </div>
            <div className="review-input-wrapper">
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
                        {elseList.map(({elseEvent, elseProductivity, elseChecked}, index) => {
                            return <div key={index} className="else-list">
                                <div 
                                    className="percentage-overlay"
                                    style={{
                                        backgroundColor: elseChecked ? "dodgerblue" : "#b22222",
                                        width: `${elseProductivity}%`
                                    }}>{elseProductivity}%</div>
                                <div>{elseEvent}</div>
                                <SwipeToDelete removeElse={removeElse} elseEvent={elseEvent} />
                            </div>
                            }
                        )}
                    </div> : <></>
                }
                <NewElseForm addElse={addElse} elseList={elseList} />
            </div>
        </div>
        </div>
    );

}
function DeleteButton({ removeElse, elseEvent }) {
    const buttonClicked = () => {
        removeElse(elseEvent)
    }
    return <button className="else-delete-button" onClick={buttonClicked}>X</button>
}