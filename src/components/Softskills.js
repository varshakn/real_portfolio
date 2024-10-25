import React from 'react';
import './Softskills.css'; // Ensure you have the correct CSS file

const skills = [
  { 
    name: 'Critical Thinking', 
    logo: 'https://th.bing.com/th/id/OIP.n1B3psisqHC_Y0G1_My7uQAAAA?rs=1&pid=ImgDetMain', // Placeholder for character image
    description: "Throughout my time in school and college, I have actively participated in various teams. I have organized events, addressed student issues, and engaged in discussions with superiors to develop improved solutions."
  },
  { 
    name: 'Communication', 
    logo: 'https://vignette.wikia.nocookie.net/doblaje/images/1/12/Inside_Out_Sadness.png/revision/latest/scale-to-width-down/385?cb=20160106014125&path-prefix=es',
    description: "I have frequently been on stage, interacting and collaborating with individuals from diverse backgrounds, cultures, and languages. This exposure has significantly enhanced my communication skills."
  },
  { 
    name: 'Presentation', 
    logo: 'https://cdn140.picsart.com/242780435015212.png',
    description: "I excel at presenting my findings and work, always considering my audience to ensure clarity and understanding. During my previous internships, I effectively communicated my research conclusions, and my superiors were pleased with my presentation skills."
  },
  { 
    name: 'Leadership', 
    logo: 'https://www.pngplay.com/wp-content/uploads/12/Inside-Out-PNG-Pic-Background.png',
    description: 'From the very early age, I have been a leader. Being a leader and helping people around me and making quick decisions is not new to me. As an ex elected leader at school and then lead at event organisations in college, I have always made sure people around me felt important and safe. I was and will continue to have leadership quality in me.' 
  },
  { 
    name: 'Punctuality', 
    logo: 'https://i.pinimg.com/736x/19/68/c5/1968c5c8ad88b8212300d490876ca1cd.jpg',
    description: "Punctuality is a core value for me. I consistently ensure that I am on time for both formal and informal events. I value time greatly and strive to ensure that others never have to wait for me. I have always submitted my work on time and have never been late, a quality I take great pride in."
  },
  { 
    name: 'Quick Learner', 
    logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/359fe050-3abb-4764-b470-33c7883ce044/ddt7sl9-05554dff-fe30-4518-958e-3aeb31da60f9.png/v1/fill/w_541,h_1476/inside_out__2015____riley_andersen_by_agustinsepulvedave_ddt7sl9-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY4OSIsInBhdGgiOiJcL2ZcLzM1OWZlMDUwLTNhYmItNDc2NC1iNDcwLTMzYzc4ODNjZTA0NFwvZGR0N3NsOS0wNTU1NGRmZi1mZTMwLTQ1MTgtOTU4ZS0zYWViMzFkYTYwZjkucG5nIiwid2lkdGgiOiI8PTYyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.U69DW0ZHX2xiKVz9WoU6dn082d1PGja3IVOH9-EJz0s',
    description: "During my internship at Proceedit, I developed bots capable of predicting stock trends. Despite being new to artificial intelligence and machine learning, I quickly acquired the necessary skills and completed my tasks on schedule. I successfully built two bots within a five-month timeframe."
  },
  { 
    name: 'Cross-Cultural Sensitivity', 
    logo: 'https://th.bing.com/th/id/OIP.XFrY4-YQyqwLhbH_BnOq9wHaGp?rs=1&pid=ImgDetMain',
    description: "Coming from a diverse background, I confidently engage with individuals of various beliefs and cultures, ensuring respect and understanding. I recognize the significance of culture for everyone. During my internship at Proceedit, I collaborated with people worldwide, uniting under a common goal despite language differences, which was an incredible experience."    
  },
  { 
    name: 'Storytelling Ability', 
    logo: 'https://th.bing.com/th/id/R.e8c9815e9453190aa3edc688c16ab87d?rik=a6mXXjVcl0XPqQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-inside-out-image-joy-inside-out-png-international-entertainment-project-wikia-fandom-powered-by-wikia-480.png&ehk=Cnloiw2f%2bLIxVTlFWQRHGDBAL2ozW7tOvsHx2%2fmWNFo%3d&risl=&pid=ImgRaw&r=0',
    description: "I excel at public speaking, whether it's participating in a school competition or delivering a formal presentation at college or work. I have honed the ability to understand my audience and tailor my message accordingly. My storytelling skills have been consistently praised, and I am confident in my ability to engage listeners. Whether I have ample time to prepare or need to deliver an impromptu speech, I am comfortable and effective in both scenarios."
  },
  { 
    name: 'Mentorship Mindset', 
    logo: 'https://2.bp.blogspot.com/-WL8oKLPimZM/WlvkC8fbF3I/AAAAAAABO04/FP7vCYGEX6InZmsb-XGDH6zqSnOhSuSMQCKgBGAs/s1600/5a0c699982e02d31ecb8d00e.png',
    description: "I believe true success is achieved by helping others succeed. Sharing knowledge and supporting others on their journey is essential to being truly successful. I consistently offer assistance to those around me whenever needed. Throughout my leadership roles, I have maintained a strong mentorship mindset."
  },
  { 
    name: 'Ethical Judgment', 
    logo: 'https://cdn.inspireuplift.com/uploads/images/seller_products/1689561305_Together7.png',
    description: "I ensure that my emotions do not interfere with my decision-making. While I acknowledge that there are times when emotions might be more effective than strict ethics, the outcome remains paramount. I consider whether we achieved our goals, if the other party's needs were met, and weigh the pros and cons. These are the questions I reflect on before making or repeating a decision."
  },
  { 
    name: 'Empathy-Driven Leadership', 
    logo: 'https://media0.faz.net/ppmedia/aktuell/wissen/2797585586/1.3836882/width610x580/freude-und-kummer.jpg',
    description: "A company thrives when employees work in a healthy environment. Actively listening and maintaining strong communication can significantly reduce stress and challenges. In team settings, I ensure that every voice is heard and everyone participates. This approach boosts engagement and motivation among teammates, and I firmly believe it leads to excellent outcomes."
  },
  { 
    name: 'Holistic Thinking', 
    logo: 'https://th.bing.com/th/id/R.56937088b4486c60fc3ab0d9f0a5ab90?rik=JB4VAnt1%2fHQiow&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-inside-out--716.png&ehk=IelB%2b3mZemeRBYY6C9cQRW7Il9O9pmIzR%2fhdw%2fSTWyM%3d&risl=&pid=ImgRaw&r=0',
    description: "Understanding the bigger picture is crucial for me. This approach highlights the connections and relationships between different components of a system. It has previously aided me in identifying root causes of problems and developing solutions that address multiple aspects simultaneously."
  },
  { 
    name: 'Social Responsibility', 
    logo: 'https://th.bing.com/th/id/OIP.YPqse_yW8UC64eFg-FsudAAAAA?rs=1&pid=ImgDetMain',
    description: "I am conscious of my decisions and consistently ensure they benefit society."
  },
  { 
    name: 'Cognitive Flexibility', 
    logo: 'https://webstockreview.net/images/joy-clipart-inside-out-5.png',
    description: "I quickly adapt to new environments and always consider the impact of my decisions on my team and society. Thinking outside the box is a skill I cherish and have been praised for, as it helps me grow, learn, and integrate new knowledge."
  },
  { 
    name: 'Reflective Listening', 
    logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5be06a2c-47a3-4935-aeea-d2cbb8db0184/dh0nybm-2d9e7f01-813f-4e0a-a0ac-8a445bb0d939.png/v1/fill/w_1025,h_779/envy_inside_out_2_png_by_cutehamstershh_dh0nybm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzkwIiwicGF0aCI6IlwvZlwvNWJlMDZhMmMtNDdhMy00OTM1LWFlZWEtZDJjYmI4ZGIwMTg0XC9kaDBueWJtLTJkOWU3ZjAxLTgxM2YtNGUwYS1hMGFjLThhNDQ1YmIwZDkzOS5wbmciLCJ3aWR0aCI6Ijw9MTAzOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.s-BwejKKBMkD6DWgegwV_cTiMC34EnatJM5q6rb-P6Y',
    description: "I ensure I fully understand what I've heard by frequently repeating it back to the speaker for confirmation. This approach has been invaluable, as it prevents mistakes by clarifying the problem statement before proceeding with solutions."
  },
  { 
    name: 'Growth Mindset', 
    logo: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/590x590/products/90554/100366/Envy-Inside-Out-2-Cardboard-Cutout-buy-now-at-starstills__62419.1721225150.jpg?c=2',
    description: "I avoid staying in my comfort zone for too long, as I prefer continuous learning and growth. I strive to improve myself and become a better version, enabling me to assist others when needed."
  },
];

function Softskills() {
  return (
    <section id="softskills">
      <h2 className="softskills-title">Soft Skills</h2>
      <div className="softskills-list">
        {skills.map((skill, index) => (
          <div 
            className="softskill-item" 
            key={index} 
            style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }} // Alternating alignment
          >
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="softskill-image"
            />
            <div className="speech-bubble">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Softskills;