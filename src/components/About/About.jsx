import React, { useEffect } from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,    
    });
  }, []);

  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-header" data-aos="fade-up">
        <div className="about-intro">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis amet, libero quam deleniti facilis hic ullam voluptatem temporibus, culpa sit consequuntur rerum accusamus nemo laborum non illum. Sunt, voluptas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
