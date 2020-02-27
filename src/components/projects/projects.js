import React from 'react';
import './projects.css';
import read from './images/read.png';
import brewery from './images/brewery.png';
import trivia from './images/trivia.png'
import camping from './images/camping.png'
function Projects(props) {

    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="allProjects">
                <div className="trivia">
                    <h3>Colorado Springs Trivia Game</h3>
                    <a href="https://hrocco25.github.io/seir-project-one/" target="blank">
                        <img src={trivia}/>
                    </a>
                <p>Trivia game that uses html, css and javascript</p> 
                </div>
                <div className="brewery">
                <h3>Brewery Search App</h3> 
                <a href="https://heatherbreweryapp2.herokuapp.com/" target="blank">
                    <img src={brewery} />
                </a>
                <p>React app that utalizes an API to get data on breweries in the USA. You can search for a brewery by its name or location.  This app was created with React, JavaScript, CSS, and HTML. </p>      
                </div>
                <div className="greatReads">
                    <h3>Great Reads App</h3>
                    <a href="https://greatreads.netlify.com/" target="blank">
                        <img src={read}/>
                    </a>
                    <p>This was a group project that is a full stack app with full CRUD.  It was created with React, CSS, HTML, JavaScript, and Express.</p>
                </div>
                <div className="camping">
                    <h3>Free Camping App</h3>
                    <a href="https://dispersed-camping.herokuapp.com/" target="blank">
                        <img src={camping}/>    
                    </a>                
                    <p>This is a full stack app created with Django, Python, CSS, Boostrap, and AWS.</p>
                </div>
            </div>
            
        </div>
    )
}
export default Projects