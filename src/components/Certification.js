import React from 'react';
import './Certification.css'; // Assuming you have a CSS file for styling

function Certifications() {
  return (
    <section id="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-content">
        <img 
          src="https://www.freepnglogos.com/uploads/certified-png/stamp-certified-png-images-download-21.png" 
          alt="Certified" 
          className="certification-image" 
        />
        <div className="certification-details">
          <ul>
            <li>IBM Badge - Cyber Security Advanced Certificate</li>
            <li>Certification from AttackIQ - Foundation of Operationalizing MITRE ATT&CK</li>
            <li>Diploma from Alison - Diploma in Fundamentals of Artificial Intelligence</li>
            <li>VTF University Bootcamp - Security Analyst Completion Certificate & Splunk Completion Certificate</li>
            <li>Cyber Triage - Introduction to DFIR</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Certifications;