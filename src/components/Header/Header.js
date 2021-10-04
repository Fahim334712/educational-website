import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",

    };
    const style = { textDecoration: 'none' }
    return (
        <div className="header">
            <h1>BRAIN BATTLE ACADEMIC CARE</h1>
            <nav>
                <NavLink variant="p-5" style={style} activeStyle={activeStyle} to="/home">Home </NavLink>
                <NavLink style={style} activeStyle={activeStyle} to="/courses">Courses </NavLink>
                <NavLink style={style} activeStyle={activeStyle} to="/contact">Contact </NavLink>
                <NavLink style={style} activeStyle={activeStyle} to="/about">About Us </NavLink>
                <NavLink style={style} activeStyle={activeStyle} to="/instractor">Instractors </NavLink>
            </nav>
        </div>
    );
};

export default Header;