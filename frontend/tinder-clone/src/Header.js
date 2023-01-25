import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import  logo from './logo.jpeg';
function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize="large" className='header_icon' />
            </IconButton>

            <img className='header_logo' src={logo} alt="Header_logo"/>
            
            <IconButton>
            <ForumIcon fontSize="large" className='header_icon' />
            </IconButton>
          
        </div>
    )
}

export default Header
