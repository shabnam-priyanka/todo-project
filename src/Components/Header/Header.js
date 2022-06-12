import React from 'react';
import { NavLink } from "react-router-dom"; 
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Todo Project</h1>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}> 
            
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/complete' >Complete Project</NavLink>
            <NavLink to='/delete' >Deleted Projects</NavLink>
            </nav>
        </div>
    );
};

export default Header;