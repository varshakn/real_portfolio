// src/components/Introduction.js
import React from 'react';
import './Introduction.css'; // Make sure this CSS file exists for styling

function Introduction() {
  return (
    <section id="introduction" className="introduction-section">
      <div className="intro-content">
        <h1 className="intro-name">
          Varsha Kizhakkillam<br />
          Neelamana
        </h1>
        <p className="intro-paragraph">
          Aspiring Data Scientist and Cyber Security professional with a strong educational background in Data Science, Artificial Intelligence, and Forensic Science. 
          Skilled in various programming languages and tools, including Python, GraphQL, and AWS, and experienced in cyber forensics and risk mitigation. 
          Proven ability to work in diverse environments and deliver impactful projects. Seeking opportunities to leverage my skills and contribute to innovative data-driven solutions.
        </p>
      </div>
    </section>
  );
}

export default Introduction;
