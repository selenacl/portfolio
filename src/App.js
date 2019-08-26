import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home id="homeContainer"/>
      <About id="aboutContainer"/>
      <Experience id="experienceContainer"/>
      <Portfolio id="portfolioContainer"/>
      <Skills id="skillsContainer"/>
      <Footer />
    </div>
  );
}

export default App;
