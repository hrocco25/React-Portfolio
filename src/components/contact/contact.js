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
                <a href="https://drive.google.com/open?id=1PH2114ImSZuHE4hIBUb31Ta3c6olZtmu" target="_blank">View my Resume</a>
            </div>
            <div className="contactIcon">
                <a href="https://github.com/hrocco25" target="blank">
                    <img src={github} alt="github" /> 
                </a>
                <a href="https://www.linkedin.com/in/heather-runyon/" target="blank">
                    <img src={linkedin} alt="linkedin" />
                </a>               
            </div>

        </div>
    )
}
export default Contact