import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';

const Signup = () =>  {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [qty, setQty] = useState(null)
    const [description, setDescription] = useState("")

    const onSubmit = e => {
        e.preventDefault()
        firebase
            .firestore()
            .collection("items")
            .add({
                name,
                type,
                qty,
                description,
            })
            .then(() => setName(""), setType(""), setQty(""), setDescription(""))
    }

    return (
        <from onSubmit={onSubmit}>
            <input 
                placeholder="Name" 
                value={name} 
                name="name" 
                type="text" />
            <input 
                placeholder="Type" 
                value={type} 
                name="type" 
                type="text" />
            <input 
                placeholder="Qty" 
                value={qty} 
                name="qty" 
                type="number" />
            <input 
                placeholder="Description" 
                value={description} 
                name="description" 
                type="text" />
            <button>Submit</button>
        </from>
    )
}
export default Signup;