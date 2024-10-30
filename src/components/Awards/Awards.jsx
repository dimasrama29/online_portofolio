import React from 'react';
import './Awards.css';

const Awards = () => {
  const awardsData = [
    {
      title: 'Scalable Web Service with Golang',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis amet, libero quam deleniti facilis hic ullam voluptatem temporibus, culpa sit consequuntur rerum accusamus nemo laborum non illum. Sunt, voluptas?',
    },
    {
      title: 'FGA Bootcamp Web Development Program + React',
      issuer: 'Online Course Platform',
      date: 'August 2024',
      description: 'Completed advanced courses in React for building web applications.',
    },
    // Tambahkan penghargaan lainnya sesuai kebutuhan
  ];

  return (
    <div className="awards-container" data-aos="fade-up">
      <h2 className="awards-title">Awards & Certifications</h2>
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <div key={index} className="awards-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3 className="awards-title-text">{award.title}</h3>
            <p className="awards-issuer">{award.issuer}</p>
            <span className="awards-date">{award.date}</span>
            <p className="awards-description">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
