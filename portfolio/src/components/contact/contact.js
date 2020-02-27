import React from 'react';
import './contact.css';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

function Contact(props) {

    return (
        <div>
            <h1>Contact</h1>
            <div>
                <p>hrocco25@gmail.com</p>
            </div>
            <div>
                <img src={github}/>
                <img src={linkedin}/>
               
            </div>

        </div>
    )
}
export default Contact