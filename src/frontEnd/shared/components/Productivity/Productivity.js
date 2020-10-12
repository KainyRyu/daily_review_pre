import React from 'react';
import './productivity.css' ;

export default function Productivity() {

    //review lists -> calculate the productivities -> display and show in a diagram
    return (
        <div className="check-list">
            <div className="check-list-box">
                <h2 className="check-list-title">Productivity</h2>
                <div className="productivity-bg">
                    <div>
                        <div className="chart x-60">
                            <p>60%</p>
                        </div>

                        <div className="chart x-20">
                            <p>20%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
