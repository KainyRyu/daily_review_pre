import React from 'react'

export default function SwipeDelete({ removeElse, elseEvent }) {
    

    const buttonClicked = () => {
        removeElse(elseEvent)
    }
    return <>
        <button className="else-delete-button" onClick={buttonClicked}>X</button>
    </>
}
