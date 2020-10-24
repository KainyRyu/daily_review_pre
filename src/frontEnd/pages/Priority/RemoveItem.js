import React from 'react'

export default function RemoveItem({ removeTodo, id}) {
    const removeBtn = () => removeTodo(id)
    return <button onClick={removeBtn}>X</button>
}
