import React from 'react';
import './contact.css';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

function Contact(props) {

    return (
        <div className="contact" id="contact">
            <h1>Lets get in touch!</h1>
            <div className="email">
                <h4>Email me @ hrocco25@gmail.com</h4>
                <a href="https://drive.google.com/open?id=10Tmkxq8j_enDJb-dM0tNU1hbSPZmp4bZ" target="_blank" rel="noopener noreferrer">View my Resume</a>
            </div>
            <div className="contactIcon">
                <a href="https://github.com/hrocco25" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" /> 
                </a>
                <a href="https://www.linkedin.com/in/heather-runyon/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin" />
                </a>               
            </div>

        </div>
    )
}
export default Contact