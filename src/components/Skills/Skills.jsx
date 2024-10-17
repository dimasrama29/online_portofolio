import React, { useEffect } from "react";
import "./Skills.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,    
    });
  }, []);

  return (
    <div className="about-container">
      <h2 className="about-title">Skills Saya</h2>
      <div className="about-header" data-aos="fade-up">
        <div className="about-intro">
        </div>
      </div>
    </div>
  );
};

export default Skills;
