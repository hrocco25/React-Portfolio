import React from 'react';
import './nav.css';
import { HashLink as Link } from 'react-router-hash-link';

function Nav(props) {

    return (
        <div className="nav">
            <div className="navL">
                <Link style={{textDecoration: 'none', color:"#14B1BA "}} to="/projects/#header">Heather Runyon</Link>
            </div>
            <div className="navR">
                <Link style={{textDecoration: 'none', color:"#14B1BA "}} to="/projects/#about">About</Link>
                <Link style={{textDecoration: 'none', color:"#14B1BA "}}to="/projects/#projects">Projects</Link>
                <Link style={{textDecoration: 'none', color:"#14B1BA "}} to="/projects/#contact">Contact</Link>   
            </div>

        </div>
    )
}
export default Nav