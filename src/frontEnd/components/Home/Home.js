import React from 'react'
import Priority from '../Priority/Priority'
import Header from '../Header'
import CheckList from '../CheckList/CheckList'

export default function Home() {

    return (
        <>
            <Header />
            <button onClick={() => app.auth().signOut()}>Sign out</button>
            <Priority />
            <CheckList />
            
        </>
    )
}
