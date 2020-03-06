import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Header from './components/header/header'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import About from './components/about/about'
import Tech from './components/tech/tech'
import Nav from './components/nav/nav'

function App() {
  return (
    <div className="App">
      <div>
        <Helmet>
          <meta charSet="UTF-8"/>
          <title>Heather Runyon</title>
          <meta name="description" content="Heather Runyon Portfolio"/>
          <link rel="icon" type="image/png" href="favicon.ico" size="16x16" />
        </Helmet>
      </div>
      <Nav />
      <Header />
      <About/>
      <Tech/>
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
