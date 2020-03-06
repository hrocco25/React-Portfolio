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
                    <div className="camping">
                        <a href="https://dispersed-camping.herokuapp.com/" target="_blank">
                            <h3>Free Camping App</h3>
                            <img src={camping} alt="camping" /> 
                            <p>This is a full stack app created with <b>Django</b>, <b>Python</b>, <b>CSS</b>, <b>Bootstrap</b>, and <b>AWS</b>.  You can look up and add free campsites to the site.</p>   
                        </a>     
                    </div>         
                    <div className="github">
                        <a href="https://github.com/hrocco25/camping" target="_blank"><h4>Check out my code on Github</h4></a>
                    </div>
                </div>

                <div>
                    <div className="brewery">
                        <a href="https://heatherbreweryapp2.herokuapp.com/" target="_blank">
                            <h3>Brewery Search App</h3> 
                            <img src={brewery} alt="brewery" />
                            <p>React app that utilize an API to get data on breweries in the USA. You can search for a brewery by its name or location.  This app was created with <b>React</b>, <b>JavaScript</b>, <b>CSS</b>, and <b>HTML</b>. </p>      

                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/hrocco25/brewery" target="_blank"><h4>Check out my code on Github</h4></a>
                    </div>
                </div>
                
                <div>
                    <div className="greatReads">
                        <a href="https://greatreads.netlify.com/" target="_blank">
                            <h3>Great Reads App</h3>
                            <img src={read} alt="greatreads"/>
                            <p>For this project, I had the pleasure of working with some of my classmates at General Assembly. We created a full stack React app with full CRUD.  It was designed with <b>React</b>, <b>CSS</b>, <b>HTML</b>, <b>JavaScript</b>, and <b>Express</b>.</p>
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/viviRbi/Great-reads" target="_blank"><h4>Check out my code on Github</h4></a>
                    </div>
                </div>


                <div>
                    <div className="trivia">
                        <a href="https://hrocco25.github.io/seir-project-one/" target="_blank">
                            <h3>Colorado Springs Trivia Game</h3>
                            <img src={trivia} alt="trivia"/>
                            <p>Responsive trivia game about Colorado Springs that uses <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>.</p> 
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/hrocco25/seir-project-one" target="_blank"><h4>Check out my code on Github</h4></a>
                    </div>
                </div>

        
              

            </div>
            
        </div>
    )
}
export default Projects