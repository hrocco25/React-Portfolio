import React from 'react';
import './projects.css';
import read from './images/read.png';
import brewery from './images/brewery.png';
import trivia from './images/trivia.png'
import camping from './images/camping.png'

function Projects(props) {

    return (
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <div className="allProjects">

                <div>
                    <div className="trivia">
                        <h3>Colorado Springs Trivia Game</h3>
                        <a href="https://hrocco25.github.io/seir-project-one/" target="blank">
                            <img src={trivia} alt="trivia"/>
                        </a>
                        <p>Responsive trivia game about Colorado Springs that uses HTLM, CSS and JavaScript.</p> 
                    </div>
                    <div className="github">
                        <a href="https://github.com/hrocco25/seir-project-one" target="blank"><h4>Check out my code on Github</h4></a>
                    </div>
                </div>

                <div>
                    <div className="brewery">
                        <h3>Brewery Search App</h3> 
                        <a href="https://heatherbreweryapp2.herokuapp.com/" target="blank">
                            <img src={brewery} alt="brewery" />
                        </a>
                        <p>React app that utilize an API to get data on breweries in the USA. You can search for a brewery by its name or location.  This app was created with React, JavaScript, CSS, and HTML. </p>      
                    </div>
                    <div className="github">
                        <a href="https://github.com/hrocco25/brewery" target="blank"><h4>Check out my code on Github</h4></a>
                    </div>
                </div>

                <div>
                    <div className="greatReads">
                        <h3>Great Reads App</h3>
                        <a href="https://greatreads.netlify.com/" target="blank">
                            <img src={read} alt="greatreads"/>
                        </a>
                        <p>For this project, I had the pleasure of working with some of my classmates at General Assembly. We created a full stack React app with full CRUD.  It was designed with React, CSS, HTML, JavaScript, and Express.</p>
                    </div>
                    <div className="github">
                        <a href="https://github.com/viviRbi/Great-reads" target="blank"><h4>Check out my code on Github</h4></a>
                    </div>
                </div>

                <div>
                    <div className="camping">
                        <h3>Free Camping App</h3>
                        <a href="https://dispersed-camping.herokuapp.com/" target="blank">
                            <img src={camping} alt="camping" />    
                        </a>     
                        <p>This is a full stack app created with Django, Python, CSS, Boostrap, and AWS.  You can look up and add free campsites to the site.</p>

                    </div>         
                    <div className="github">
                        <a href="https://github.com/hrocco25/camping" target="blank"><h4>Check out my code on Github</h4></a>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default Projects