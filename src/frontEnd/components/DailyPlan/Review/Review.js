import React, {useState} from 'react';
import '../dailyPlan.css'
import './review.css'

//relate with <Priority todo={todo}/> - Else
//send percentage, elseTitle, positive%, negative%
//if productivity !== 100% ? Else default 100 - productivity%, Negative, placeholder="Something Else"

function AddElses() {
    return (
        <div className="add-else-warpper">
            <div className="review_input_wrapper" style={{ display: "flex"}}>
                <input className="review_input" type="text"/>
                <input className="percentages" type="number"/>%
            </div>
            <div className="review_input_wrapper" style={{ display: "flex"}}>
                <span style={{flex: 1}}>related to</span>
                <select id="review_related_select">
                    <option>
                    </option>
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
    const [productivity, setProductivity] = useState(0)
    const [somethingElse, setSomethingElse] = useState([])

    

    return (
        <div className="review_page">
            <div className="review_wrapper">
                <h3>time - time</h3>
                <div className="review_input_wrapper">
                    <input className="review_input" type="text" placeholder="" />
                    <option>
                        <select>100</select>
                        <select>90</select>
                        <select>80</select>
                        <select>70</select>
                        <select>60</select>
                        <select>50</select>
                        <select>40</select>
                        <select>30</select>
                        <select>20</select>
                        <select>10</select>
                        <select value="direct"></select>
                    </option>
                    <input type="text" id="selboxDirect" name="selboxDirect"/>
                    <input className="percentages" type="number" placeholder="100"/>%
                </div>
                <input className="review_button" type="submit" value="Done" />
            </div>
            <div>
                <div>
                    <h2>Else</h2>
                    <AddElses />
                    <button>+</button>
                </div>
                
            </div>

        </div>
    )
}
