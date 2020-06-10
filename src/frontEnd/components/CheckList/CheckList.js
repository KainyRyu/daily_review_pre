import React from 'react';
import './checkList.css' ;

export default function CheckList() {

    
    return (
        <div className="check-list">
            <div className="check-list-box">
                <h2 className="check-list-title">Today's Check List</h2>
                <ul className="check-list_ul">
                    <li className="check-list_li">Yoga</li>
                    <li>
                        <input id="today_list" type="text" placeholder="Add.." />
                    </li>
                </ul>
            </div>
        </div>
    )
}
