// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Optional CSS for styling

function Contact() {
  return (
    <section id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:knvarsha9@gmail.com">knvarsha9@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p><a href="tel:+447553990475">+44 7553 990475</a></p>
        </div>
        <div className="contact-item">
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/varsha-kizhakkillam-neelamana-396bab226" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/varsha-kizhakkillam-neelamana
          </a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
