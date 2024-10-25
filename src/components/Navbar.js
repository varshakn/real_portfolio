// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="portfolio-text">Portfolio</div>
            <ul className="nav-menu">
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#softskills">Soft Skills</a></li> {/* Updated ID to match Softskills section */}
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;