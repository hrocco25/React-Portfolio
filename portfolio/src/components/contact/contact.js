import React from 'react';
import './contact.css';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

function Contact(props) {

    return (
        <div className="contact">
            <h1>Lets get in touch!</h1>
            <div>
                <h4>Email me @ hrocco25@gmail.com</h4>
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