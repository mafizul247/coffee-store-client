import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBer.css'

const NavBer = () => {
    return (
        <div className='nav-items'>
            <Link to='/' className='logo'>Espresso Emporium</Link>
            <div className='items'>
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'}>Home</NavLink></li>
                    <li><NavLink to='/add-coffee' className={({ isActive }) => isActive ? 'active' : 'default'}>Add Coffee</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBer;