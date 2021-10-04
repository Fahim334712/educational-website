import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white",

    };
    const style = { textDecoration: 'none' }
    return (
        <div className="header">
            <img className="Size" src="./images/img-11.png" alt="" />
            <nav className="NavSize m-3">
                <NavLink className="Color m-3" style={style} activeStyle={activeStyle} to="/home">Home </NavLink>
                <NavLink className="Color m-3" style={style} activeStyle={activeStyle} to="/courses">Courses </NavLink>
                <NavLink className="Color m-3" style={style} activeStyle={activeStyle} to="/contact">Contact </NavLink>
                <NavLink className="Color m-3" style={style} activeStyle={activeStyle} to="/about">About Us </NavLink>
                <NavLink className="Color m-3" style={style} activeStyle={activeStyle} to="/instractor">Instractors </NavLink>
            </nav>
        </div>
    );
};

export default Header;