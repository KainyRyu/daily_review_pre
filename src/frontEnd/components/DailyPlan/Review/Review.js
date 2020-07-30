import React, {useState} from 'react';
import '../dailyPlan.css'
import './review.css'

//relate with <Priority todo={todo}/> - Else
//send percentage, elseTitle, PorN

export default function Review() {
    const [productivity, setProductivity] = useState()
    const [somethingElse, setSomethingElse] = useState([])

    function addElses() {
        return (
            <form className="input_wrapper">
                <input className="text_input" type="text"/>
                <input className="percentages" type="number" value={percent} onChange={} />
            </form>
        )
    }
    

    return (
        <div className="review_page">
            <div className="review_wrapper">
                <h3>time - time</h3>
                <div className="review_input_wrapper">
                    <input className="review_input" type="text" placeholder="" />
                    <input className="percentages" type="number" placeholder={100}/>%
                </div>
                <input className="review_button" type="submit" value="Done" />
            </div>
            <div>
                <div style={{ display: "flex"}}>
                    <h2>Else</h2>
                    {
                        //if button clicked add
                    }
                    <button onClick={addElses}>+</button>
                </div>
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
            </div>

        </div>
    )
}
