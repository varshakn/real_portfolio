// src/components/Achievements.js
import React from 'react';
import './Achievements.css'; // Ensure this file exists

const achievements = [
  { title: 'Indo-European Hackathon', description: 'Best Performing Team' },
  { title: 'National Level Hackathon', description: '' } // You can add a description if needed
];

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <h3 className="achievement-title">{achievement.title}</h3>
            {achievement.description && <p className="achievement-description">{achievement.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
