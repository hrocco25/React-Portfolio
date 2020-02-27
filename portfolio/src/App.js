import React from 'react';
import{Link, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/header'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import About from './components/about/about'
// import Nav from './components/nav/nav'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Header />
      <About/>
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
