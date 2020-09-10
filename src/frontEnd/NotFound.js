import React from 'react';
import notfound from './image/notfound.gif'

export default function NotFound() {
    return (
        <div>
            <div>
                <h1>404</h1>
                <p>Page not found</p>
            </div>
            <img src={notfound} />
        </div>
    )
}
