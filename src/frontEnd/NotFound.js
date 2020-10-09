import React from 'react';
import notfound from './image/notfound.gif'

export default function NotFound() {
    return (
        <div>
            <div>
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            <img src={notfound} alt="Not found"/>
        </div>
    )
}
