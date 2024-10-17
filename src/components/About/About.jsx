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
      <h2 className="about-title">Tentang Saya</h2>
      <div className="about-header" data-aos="fade-up">
        <div className="about-intro">
          <p>Saya Dimas Setyawan Ramadhansyah lulusan Universitas Islam Indonesia jurusan Informatika</p>
        </div>
      </div>
    </div>
  );
};

export default About;
