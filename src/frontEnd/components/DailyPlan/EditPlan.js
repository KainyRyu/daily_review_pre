import React, { useState } from 'react'

export default function EditPlan(props) {
    const [title, setTitle] = useState('New Event');
    const [startTime,setStartTime] = useState(0);
    const [endTime,setEndTime] = useState(0);
    const [due,setDue] = useState(0);
    const [priority, setPriority] = useState('');
    const [memo, setMemo] = useState('')

    return (
        <form>

        </form>
    )
}
