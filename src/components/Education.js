// src/components/Education.js
import React, { useState, useEffect, useCallback } from 'react';
import './Education.css'; // Import the CSS file for education styles

function Education() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index

  const educationItems = [
    {
      title: "University of Liverpool",
      description: "Masters in Data Science and AI (Present)"
    },
    {
      title: "Yenepoya Institute of Arts, Science, Commerce and Management",
      description: "BSc Forensic Science, Data Analytics, and Cyber Security with IBM"
    },
    {
      title: "Durga Higher Secondary School",
      description: "Class 12th"
    },
    {
      title: "Chinmaya Vidyalaya",
      description: "Class 10th"
    }
  ];

  const showNextItem = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % educationItems.length); // Cycle through items
  }, [currentIndex, educationItems.length]); // Include dependencies

  // Automatically show the next item every 3 seconds
  useEffect(() => {
    const interval = setInterval(showNextItem, 3000); // Change item every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [showNextItem]); // Include showNextItem in the dependency array

  return (
    <section id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationItems.map((item, index) => (
          <div
            className={`education-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <div className="education-inner">
              <div className="education-front">
                <h3>{item.title}</h3>
              </div>
              <div className="education-back">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;