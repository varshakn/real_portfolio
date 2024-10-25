import React, { useEffect, useState } from 'react';
import './Skills.css'; // Import the CSS file for styling

const skills = [
  { name: 'PostgreSQL', logo: 'https://e7.pngegg.com/pngimages/331/419/png-clipart-postgresql-database-installation-microsoft-sql-server-programming-language-mysql-logo-blue-logo.png' },
  { name: 'Python', logo: 'https://i1.wp.com/qavalidation.com/wp-content/uploads/2018/02/python-logo.png' },
  { name: 'RPA', logo: 'https://th.bing.com/th/id/R.5c2bb7e689c3d98101ed4d7d81b2b461?rik=aMF50syUE6bRwg&riu=http%3a%2f%2fitacademy.com.my%2fwp-content%2fuploads%2f2019%2f08%2fRPA.png&ehk=bNatmywa7gIph4H98zJldw8anC%2bYFMsT%2fqFTJKW5foI%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Flutterflow', logo: 'https://staging-static.us-sea-1.linodeobjects.com/products/logos/9ba06bb8-5560-4f66-ac2b-c54114900acd.png' },
  { name: 'AWS', logo: 'https://snapshooter.io/assets/img/marketing/providers/AWS.png' },
  { name: 'GraphQL', logo: 'https://dwglogo.com/wp-content/uploads/2018/01/GraphQL_logo-768x529.png' },
  { name: 'Kali Linux', logo: 'https://th.bing.com/th/id/OIP.M6n_qLCg1_xiWJqjs_qPgQHaHk?rs=1&pid=ImgDetMain' },
  { name: 'BPA', logo: 'https://e7.pngegg.com/pngimages/847/566/png-clipart-computer-icons-business-process-automation-industry-automate-business-process-industry.png' },
  { name: 'Node.js', logo: 'https://th.bing.com/th/id/R.9c83821480f50c983788c7c002c72944?rik=9bElGknv2XP5KA&pid=ImgRaw&r=0' },
  { name: 'React', logo: 'https://th.bing.com/th/id/OIP.LuafDFw71qlcXt-rekp-KAHaHI?rs=1&pid=ImgDetMain' },
  { name: 'CSS', logo: 'https://image.pngaaa.com/311/3920311-middle.png' },
  { name: 'HTML', logo: 'https://icon-library.com/images/html-icon/html-icon-12.jpg' },
  { name: 'Exoscale', logo: 'https://image.pngaaa.com/603/5328603-middle.png' },
  { name: 'Microsoft Excel', logo: 'https://logodownload.org/wp-content/uploads/2020/04/excel-logo-0.png' },
  { name: 'Cyber Forensics', logo: 'https://as2.ftcdn.net/v2/jpg/02/45/52/17/1000_F_245521738_UOvcmMBMAuO7ZVBwjk5kpjrILoExgn71.jpg' },
  { name: 'JavaScript', logo: 'https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png' }
];

// Add the Dino image URL here
const dinoImage = 'https://www.pngkey.com/png/full/16-169452_dinosaur-png.png'; // Replace with your actual Dino image link

function Skills() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [dinoPosition, setDinoPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => {
        const nextSkill = (prev + 1) % skills.length; // Move to next skill
        updateDinoPosition(nextSkill); // Update dino position
        return nextSkill;
      });
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const updateDinoPosition = (index) => {
    const box = document.querySelectorAll('.skills-box')[index]; // Get the clicked box
    const boxRect = box.getBoundingClientRect(); // Get the box's position

    // Calculate the new position for the dino
    const newX = boxRect.left + boxRect.width / 2 - 25; // Center the dino
    const newY = boxRect.top - 25; // Position above the box (reduced jump height)

    setDinoPosition({ x: newX, y: newY }); // Update dino position
  };

  // Initial position of the dino
  useEffect(() => {
    updateDinoPosition(currentSkill);
  }, [currentSkill]);

  return (
    <section id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            className={`skills-box ${currentSkill === index ? 'active' : ''}`} 
            key={index}
          >
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
        <img 
          className="dino-image" 
          src={dinoImage} 
          alt="Dino" 
          style={{ position: 'absolute', left: dinoPosition.x, top: dinoPosition.y }} // Set dino position
        />
      </div>
    </section>
  );
}

export default Skills;