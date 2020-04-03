import React from 'react'
import Logo from '../image/DR.svg';
import User from '../image/user.png';
import '../App.css';

export default function Header() {
    return (
        <div className="header">
            <img className="header_logo" src={Logo} alt="logo" />
            <img className="header_user" src={User} alt="user" />
        </div>
    )
}
