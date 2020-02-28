import React from 'react';
import './header.css';
import { HashLink as Link } from 'react-router-hash-link';


function Header(props) {

    return (
        <div className="header" id="header">
            <h1>Hi, I'm Heather Runyon!</h1>
            {/* <Link style={{textDecoration: 'none', color:"black"}}to="/projects/#projects">Check out my work</Link> */}
            <h2>Full Stack Developer</h2>
        </div>
    )
}
export default Header