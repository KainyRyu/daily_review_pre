import React, {useState} from 'react'

export default function Review() {
    const [percent, setPercent] = useState(0)

    function addElses() {
        return (
            <form>
                <input type="text"/>
                <input className="percentage" type="number" value={percent} onChange={setPercent(e => e.target.value)} />
            </form>
        )
    }
    
    const percentage = (e) => e / 100 
    return (
        <div>
            <div>
                <div>time</div>
                <input type="text" placeholder="" />
                <input className="percentage" type="number" placeholder={1 / 100}/>%
                <input type="submit" />
            </div>
            <div>
                <title>Else</title>
                <button onClick={addElses}>+</button>
            </div>

        </div>
    )
}
