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
            <Link to="/"><Icon icon={homeIcon} style={{color:'black', fontSize: '45px'}} /></Link>
            <Link to="/schedule"><Icon icon={timeOutIcon} style={{color:'black', fontSize: '45px'}} /></Link>
            <Link to="/"><Icon icon={calendarIcon} style={{color:'black', fontSize: '45px'}} /></Link>
            <Link to="/more"><Icon icon={moreIcon} style={{color:'black', fontSize: '45px'}} /></Link>
            {/* <Link to="/"><Icon icon={settingIcon} style={{color:'black', fontSize: '42px'}} /> </Link> */}
            {/* <img className="navbar_user" src={User} alt="user" /> */}
        </div>
    )
}
