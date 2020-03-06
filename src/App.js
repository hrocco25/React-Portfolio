import React from 'react';
import './App.css';
import Helmet from "react-helmet";
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
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
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
