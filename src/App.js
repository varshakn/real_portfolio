// src/App.js
import React from 'react';
import './styles/global.css';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project'; 
import Achievements from './components/Achievements';
import Introduction from './components/Introduction';
import Softskills from './components/Softskills';
import './components/Skills.css';
import Navbar from './components/Navbar';
import Certifications from './components/Certification';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Experience />
      <Education />
      <Skills />
      <Softskills />
      <Certifications />
      <Project />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;

