import React from 'react';
import './checkList.css' ;

export default function CheckList() {
    return (
        <div className="check-list">
            <div className="check-list-box">
                <h2 className="check-list-title">Check List</h2>
                <ul className="check-list_ul">
                    <li>Yoga</li>
                    <li>Read a book</li>
                    <li>Study Typescript</li>
                    <li>Laundry</li>
                </ul>
            </div>
        </div>
    )
}
