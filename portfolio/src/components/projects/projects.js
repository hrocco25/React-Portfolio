import React from 'react';
import './projects.css';

function Projects(props) {

    return (
        <div className="projects">
            <div className="trivia">
               <h2>Colorado Springs Trivia Game</h2>
               <p>Trivia game that uses html, css and javascript</p> 
            </div>
            <div className="brewery">
               <h2>Brewery Search App</h2> 
               <p>React app that utalizes an API to get data on breweries in the USA. You can search for a brewery by its name or location.  This app was created with React, JavaScript, CSS, and HTML. </p>
            </div>
            <div className="greatReads">
                <h2>Great Reads App</h2>
                <p>This was a group project that is a full stack app with full CRUD.  It was created with React, CSS, HTML, JavaScript, and Express.</p>
            </div>
            <div className="camping">
                <h2>Free Camping App</h2>
                <p>This is a full stack app created with Django, Python, CSS, Boostrap, and AWS.</p>
            </div>
            
        </div>
    )
}
export default Projects