import React from 'react'
import Logo from '../image/DR.svg';
import User from '../image/user.png';
import '../App.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar_logo" src={Logo} alt="logo" />
            <img className="navbar_user" src={User} alt="user" />
        </div>
    )
}
