import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis amet, libero quam deleniti facilis hic ullam voluptatem temporibus, culpa sit consequuntur rerum accusamus nemo laborum non illum. Sunt, voluptas?',
    },
    {
      title: 'Android Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis amet, libero quam deleniti facilis hic ullam voluptatem temporibus, culpa sit consequuntur rerum accusamus nemo laborum non illum. Sunt, voluptas?',
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((categoryItem, index) => (
          <div key={index} className="skills-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3 className="skill-title">{categoryItem.title}</h3>
            <p className="skill-description">{categoryItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
