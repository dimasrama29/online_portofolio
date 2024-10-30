import React, { useEffect } from 'react';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const experiences = [
    {description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis amet, libero quam deleniti facilis hic ullam voluptatem temporibus, culpa sit consequuntur rerum accusamus nemo laborum non illum. Sunt, voluptas?', },

  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card" data-aos="fade-up">
            <h3 className="experience-role">{exp.title}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <span className="experience-duration">{exp.duration}</span>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
