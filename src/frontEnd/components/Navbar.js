import React from 'react'
import { Link } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import calendarIcon from '@iconify/icons-fa/calendar-o';
import homeIcon from '@iconify/icons-ant-design/home-outlined';
import settingIcon from '@iconify/icons-ant-design/setting-outlined';
import moreIcon from '@iconify/icons-eva/more-horizontal-fill';
import timeOutIcon from '@iconify/icons-ant-design/field-time-outlined';
import Logo from '../image/DR.svg';
import User from '../image/user.png';
import '../App.css';


export default function Navbar() {
    return (
        <div className="navbar">
            {/* <img className="navbar_logo" src={Logo} alt="logo" /> */}
            <Link to="/"><Icon icon={homeIcon} style={{fontSize: '45px'}} /></Link>
            <Link to="/schedule"><Icon icon={timeOutIcon} style={{fontSize: '45px'}} /></Link>
            <Link to="/"><Icon icon={calendarIcon} style={{fontSize: '45px'}} /></Link>
            {/* <Link to="/"><Icon icon={settingIcon} style={{fontSize: '42px'}} /> </Link> */}
            <Link to="/"><Icon icon={moreIcon} style={{fontSize: '45px'}} /></Link>
            {/* <img className="navbar_user" src={User} alt="user" /> */}
        </div>
    )
}
