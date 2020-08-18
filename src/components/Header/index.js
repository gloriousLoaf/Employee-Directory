// Header
import React from 'react';
import Logo from '../../logo.svg'
import './style.css'

function Header() {
    return (
        <header className='headerStyle'>
            <h1><span><img className='logoImg' src={Logo} alt='Contact book icon.'></img></span>React Employee Directory</h1>
        </header>
    )
};

export default Header;