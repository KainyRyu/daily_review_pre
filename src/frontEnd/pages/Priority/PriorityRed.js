import React from 'react'
import Todos from './Todos'

export default function PriorityRed({ todoList, removeTodo}) {
    return (
        <div className="priority-box red">
            <h3>Urgent & Significant</h3>
            <ul>
                {todoList
                    .filter(({urgency, importance}) => urgency && importance)
                    .map(({id, task}) => {
                        return <Todos key={id} id={id} task={task} removeTodo={removeTodo}/>
                    })
                }
            </ul>
        </div>
    )
}
 