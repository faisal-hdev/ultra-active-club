import React from 'react';
import './Header.css'
import logo from '../../design-file/ m.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <p className='logo-title'>Gymnastics Club_</p>
        </div>
    );
};

export default Header;